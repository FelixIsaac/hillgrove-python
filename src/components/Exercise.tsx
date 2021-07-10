import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@chakra-ui/button';
import CodeEditor from './CodeEditor';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/alert"

interface CallbackValues {
    variables: {
        [key: string]: any
    }
    mod: any
}

interface ICodeExercise {
    code: string[];
    attempts: number;
    hint: string[];
    solutionURL: string;
    callback(values: CallbackValues): boolean
}

const CodeExercise = ({ code: initCode, attempts: initAttempts, callback, hint }: ICodeExercise) => {
    const [code, changeCode] = useState(initCode);
    const [prints, updatePrints] = useState([]);
    const [executionStatus, setExecutionStatus] = useState("success")
    const [executionDisplay, setExecutionDisplay] = useState(false)
    const [executionMessage, setExecutionMessage] = useState(false)
    const [hintVisible, setHintVisible] = useState(false)
    const [passed, setPassed] = useState(false);
    const [attempts, setAttempts] = useState(initAttempts || 0)
    const [loading, setLoading] = useState(true);

    const getSolution = () => {
        
    }

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://skulpt.org/js/skulpt.min.js";
        script.async = true;
        
        // set config
        script.onload = ({ target }) => {
            //  SK configuration
            Sk.configure({
                output: (out) => updatePrints(previous => [...previous, out]),
                read: (file) => {
                    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][file] === undefined) {
                        throw "File not found: '" + file + "'";
                    }

                    return Sk.builtinFiles["files"][file];
                },
                __future__: Sk.python3
            });
            
            // load standard library
            const script = document.createElement('script');
            script.src = "https://skulpt.org/js/skulpt-stdlib.js";
            script.async = true;
            script.onload = () => setLoading(false);
            document.body.appendChild(script);
            document.body.removeChild(script);
        }

        document.body.appendChild(script);
        document.body.removeChild(script);
    }, []);

    const checkSolution = () => {
        if (!window.Sk) {
            setExecutionStatus('error');
            setExecutionDisplay(true);
            setExecutionMessage('Python code compiler has not been uploaded yet. Try again in a few moments.');

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

            updatePrints(updatedState => {
                console.log('updated prints', updatedState);

                setExecutionStatus("success")
                setExecutionDisplay(true)
                setExecutionMessage(`Code is syntactically correct. ${!callback ? "No tests defined for this exercise" : "Running tests..."}`)
            
                return updatedState;
            });

            if (!callback) return setLoading(false);

            updatePrints(updatedState => {
                //  if callback was passed
                const { passed, totalTests, passedTests } = callback({
                    variables,
                    prints,
                    mod,
                    Sk
                });
    
                if (passed) {
                    setPassed(true)
                    setExecutionStatus("success")
                    setExecutionDisplay(true)
                    setExecutionMessage(`Your code has passed all test cases: (${passedTests}/${totalTests} tests)`);
                    setLoading(false)
                }

                return updatedState;
            });
        }, (err) => {
            setExecutionStatus("error")
            setExecutionDisplay(true)
            setExecutionMessage(err.toString());
            setLoading(false)
        });
    }

    return (
        <>
            <CodeEditor code={code} onChange={changeCode} />
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
                    onClick={getSolution}
                    disabled={attempts < 2 || !passed}
                    isLoading={loading}
                >
                    Show solution
                </Button>
                <Button
                    colorScheme="blue"
                    onClick={() => setHintVisible(true)}
                    disabled={hintVisible || attempts < 1}
                    isLoading={loading}
                >
                    Show hint
                </Button>
                <Button
                    colorScheme="green"
                    onClick={checkSolution}
                    isLoading={loading}
                >Check your solution</Button>
            </ButtonGroup>
        </>
    )
}

export default CodeExercise;