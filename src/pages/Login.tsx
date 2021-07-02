import React, { Fragment, useState, useContext } from "react";
import { Image, Center, Flex, Heading, Text, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import SignInButton from '../components/SignInButton';
import { UserContext } from "../contexts/UserContext";

const Home = () => {
    const user = useContext(UserContext);
    const [loginStatus, setLoginStatus] = useState<'error' | 'success'>('error');
    const [loginStatusVisibility, setLoginStatusVisibility] = useState(false)
    const [loginMessage, setLoginMessage] = useState('');
    const [loginDescription, setLoginDescription] = useState('');
    const [loading, setLoading] = useState(false)

    
    async function loginSuccess(response: GoogleLoginResponse) {
        try {
            const serverResponse = await fetch(`${process.env.REACT_APP_BACKEND_API}/authentication`, {
                method: 'POST',
                headers: {
                    'Authorization': response.tokenId,
                    'Content-Type': 'text/plain'
                },
                body: response.tokenId
            });

            if (!serverResponse.ok) {
                if (serverResponse.status === 400) return handleError(serverResponse);
                else throw serverResponse;
            }

            setLoginStatus('success');
            setLoginMessage('Successfully logged, happy coding! :)');
            setLoginDescription('Redirecting to course dashboard, please wait...')

            // set cookie
            document.cookie = `token=${await serverResponse.text()};expires=${Date.now() + 1.037e+9};`;
            document.location.href = '/';
            user.updateUser();
        } catch (err) {
            setLoginStatus('error');
            setLoginMessage('Encountered error while logging in :(')
            setLoginDescription('Contact one of the available support channels for further assistance.');
            setLoginStatusVisibility(true)

            console.error('Error occured while requesting authentication server', err);
            sessionStorage.setItem('lastError', err.toString())
        } finally {
            setLoading(false)
            setLoginStatusVisibility(true);
        }

        function handleError(err) {
            setLoginStatus('error');
            setLoginStatusVisibility(true)
            setLoginMessage('Invalid email address')
            setLoginDescription('Please use either "students.edu.sg" or "hillgrove.edu.sg" address');

            console.error('Error occured while requesting authentication server', err);
            sessionStorage.setItem('lastError', err.toString())
        }
    }
    
    function loginFailure(response: any) {
        setLoading(false)
        if (response.error === "popup_closed_by_user") return;

        console.error(response);
        sessionStorage.setItem('lastError', (response?.message | response).toString());

        setLoginStatus('error');
        setLoginStatusVisibility(true)
        setLoginMessage('Encountered error while logging in :(')
        setLoginDescription('Contact one of the available support channels for further assistance.');
    }

    return (
        <Fragment>
            <Center>
                <Image src="./images/landing.jpg" style={{ width: '100%', height: 'auto', borderRadius: '0 0 10px 10px' }} />
            </Center>
            <Flex alignItems="center" flexFlow="column" style={{ margin: '76px 0 76px 0' }}>
                <div>
                    <Heading as="h1" fontSize={['3xl', '3xl', '5xl', '6xl', '6xl']} textAlign="center">
                        <Text as="span" color="green.500">Hillgrove</Text>{" "}
                        <Text as="span" color="teal.600">Python Course</Text>
                    </Heading>
                    <Text
                        fontSize={['sm', '1xl', '2xl', '3xl', '4xl']}
                        textAlign="center"
                        color="orange.800"
                        fontWeight="Semibold"
                    >Secondary Three Level</Text>
                </div>
                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                    {loginStatusVisibility && (
                        <Alert status={loginStatus} style={{ marginBottom: '8px' }}>
                            <AlertIcon />
                            <AlertTitle mr={2}>{loginMessage}</AlertTitle>
                            <AlertDescription>{loginDescription}</AlertDescription>
                        </Alert>
                    )}

                    <GoogleLogin
                        clientId="709200906463-vfrts5ve7kvaks7h5r96f269bn1q0pb1.apps.googleusercontent.com"
                        onSuccess={loginSuccess}
                        onFailure={loginFailure}
                        render={({ onClick, disabled }) => <SignInButton onClick={onClick} disabled={disabled} loading={{ loading, setLoading }}/>}
                        cookiePolicy={'single_host_origin'}
                        theme="dark"
                    />
                    <Text
                        fontSize="xs"
                        style={{ marginTop: '4px'}}
                        textAlign="center"
                        fontWeight="Semibold"
                    >*Login with Google using your <u><strong>school given ICON</strong></u> email account</Text>
                </div>
            </Flex>

        </Fragment>
    )
};

export default Home;
