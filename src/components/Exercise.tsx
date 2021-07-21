import React, { useState, useRef, useEffect, lazy } from 'react';
import Sk from 'skulpt';
import { ButtonGroup, Button, } from '@chakra-ui/button';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/alert"
import { Skeleton } from '@chakra-ui/skeleton'
import { getToken } from '../contexts/UserContext';
import CodeEditor from './CodeEditor';
const Reward = lazy(() => import('react-rewards'));

Sk.configure({
    output: (out) => updatePrints(previous => [...previous, out]),
    read: (file) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][file] === undefined) {
            throw new Error("File not found: '" + file + "'");
        }

        return Sk.builtinFiles["files"][file];
    },
    __future__: Sk.python3
});

interface CallbackValues {
    variables: {
        [key: string]: any
    }
    mod: any;
    Sk: any;
}

export interface ICodeExercise {
    code: string[];
    attempts: number;
    hint: string[];
    solutionURL: string;
    callback(values: CallbackValues): boolean
}

const CodeExercise = ({ code: initCode, attempts: initAttempts, solutionURL, callback, hint }: ICodeExercise) => {
    const [code, changeCode] = useState(initCode);
    const [prints, updatePrints] = useState([]);
    const [executionStatus, setExecutionStatus] = useState("success")
    const [executionDisplay, setExecutionDisplay] = useState(false)
    const [executionMessage, setExecutionMessage] = useState(false)
    const [hintVisible, setHintVisible] = useState(false)
    const [passed, setPassed] = useState(false);
    const [attempts, setAttempts] = useState(initAttempts || 0)
    const [solutionCode, setSolution] = useState('');
    const [showSolution, setSolutionVisible] = useState(false);
    const [userSolution, setUserSolution] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingWindow, setLoadingWindow] = useState(false)

    const reward = useRef();

    // get code draft and solution
    useEffect(() => {
        setLoadingWindow(true)

        fetch(`${process.env.REACT_APP_BACKEND_API}/users/solution/${solutionURL}`, {
            headers: {
                'Authorization': getToken()
            }
        })
            .then(response => response.json())
            .then(({ progress }) => {
                if (!progress) return;
                changeCode(progress.draft_code.split('\n'));
                setUserSolution(progress.solution_code.split('\n'))
            })
            .finally(() => setLoadingWindow(false));
    }, [solutionURL])

    const draftSolution = () => {
        setLoading(true)

        fetch(`${process.env.REACT_APP_BACKEND_API}/users/solution/${solutionURL}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify({ code: code.join('\n') })
        })
            .finally(() => setLoading(false))
    }
    
    const getSolution = () => {
        setLoading(true);

        fetch(`${process.env.REACT_APP_BACKEND_API}/session/solution/${solutionURL}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            }
        })
            .then(response => response.json())
            .then((response) => {
                if (response.error) throw response;
                
                setSolution(response.solution.split('\n'));
                setSolutionVisible(true);
            })
            .finally(() => setLoading(false))
    };

    const showHint = () => {
        setHintVisible(true)

        fetch(`${process.env.REACT_APP_BACKEND_API}/session/hint/${solutionURL}`, {
            headers: {
                'Content-Type': 'application1/json',
                'Authorization': getToken()
            }
        })
    }

    const checkSolution = () => {
        if (!window.Sk) {
            setExecutionStatus('error');
            setExecutionDisplay(true);
            setExecutionMessage('Python code compiler has not been uploaded yet. Try again in a few moments.');

            return;
        }

        if (initCode.join('\n') === code.join('\n')) {
            setExecutionStatus('warning');
            setExecutionDisplay(true);
            setExecutionMessage('Copy your solution from your REPL development environment and paste it here to verify your solution');
            return;
        }

        updatePrints([]);
        setAttempts(attempts + 1);
        setLoading(true);

         Sk.misceval.asyncToPromise(() => (
            Sk.importMainWithBody("<stdin>", false, code.join("\n"))
        )).then((mod) => {
            const variables = {};

            Object.keys(Sk.globals)
                .filter(key => key.charAt(0) !== "_")
                .forEach(property => {
                    variables[property] = Sk.ffi.remapToJs(Sk.globals[property]);
                });

            if (!callback) {
                updatePrints(updatedState => {
                    setLoading(false);
                    passedTest(`Code is syntactically correct. ${!callback ? "No tests defined for this exercise" : "Running tests..."}`)          
                    return updatedState;
                });
            }
            
            updatePrints(updatedState => {
                //  if callback was passed
                const { passed, totalTests, passedTests } = callback({
                    variables,
                    prints,
                    mod,
                    Sk
                });
    
                const stats = ` (${passedTests}/${totalTests} passed tests)`;

                if (passed) passedTest(`Your code has passed all test cases: ${stats}`)
                else failedTest(`Your code has failed some test cases, don't give up and please try again. ${stats}`)

                return updatedState;
            });
        }, (err) => failedTest(err));

        function passedTest(message: string) {
            setPassed(true)
            setExecutionStatus("success")
            setExecutionDisplay(true)
            setExecutionMessage(message);
            setLoading(false)
            reward.current.rewardMe();
            updateDatabase(true);
        }

        function failedTest(message: string) {
            setExecutionStatus("error")
            setExecutionDisplay(true)
            setExecutionMessage(message.toString());
            setLoading(false)
            reward.current.punishMe();
            updateDatabase();
        }

        function updateDatabase(correct_solution = false) {
            fetch(`${process.env.REACT_APP_BACKEND_API}/users/solution/${solutionURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getToken()
                },
                body: JSON.stringify({
                    code: code.join('\n'),
                    correct_solution
                })
            })
        }
    }

    return (
        <>
            <Skeleton isLoaded={!loadingWindow}>
                <CodeEditor code={code} solution={{ showSolution, solutionCode }} onChange={changeCode} />
                <Alert status={executionStatus} hidden={!executionDisplay}>
                    <AlertIcon />
                    <AlertTitle mr={2}>
                        {
                            executionStatus === "success"
                                ? "Successfully executed "
                                : "Error while executing "
                        }
                        your code
                    </AlertTitle>
                    <AlertDescription>{executionMessage}</AlertDescription>
                </Alert>
                {
                    hintVisible && (
                        <Alert status="info">
                            <AlertIcon />
                            <AlertTitle mr={2}>Hint:</AlertTitle>
                            <AlertDescription>{hint?.join('\n') || 'Hint not included in this exercise'}</AlertDescription>
                        </Alert>
                    )
                }
                <ButtonGroup py="24px">
                    <Button
                        colorScheme="yellow"
                        onClick={!solutionCode && getSolution}
                        disabled={attempts < 2 || passed || solutionCode || loading}
                        isLoading={loading}
                    >
                        Show solution
                    </Button>
                    <Button
                        colorScheme="blue"
                        onClick={showHint}
                        disabled={hintVisible || attempts < 1 || loading}
                        isLoading={loading}
                    >
                        Show hint
                    </Button>
                    <Button
                        onClick={draftSolution}
                        disabled={loading || solutionCode}
                        isLoading={loading}
                    >
                        Draft solution
                    </Button>
                    <Reward
                        ref={reward}
                        type="emoji"
                    >
                        <Button
                            colorScheme="green"
                            onClick={checkSolution}
                            isLoading={loading}
                            disabled={solutionCode || loading}
                        >Check your solution</Button>
                    </Reward>
                </ButtonGroup>
                {
                    userSolution.length ? (
                        <CodeEditor
                            code={userSolution}
                            solution={{ showSolution: true, solutionCode: userSolution }}
                            onChange={() => { }}
                        />
                    ) : null
                }
            </Skeleton>
        </>
    )
}

export default CodeExercise;
