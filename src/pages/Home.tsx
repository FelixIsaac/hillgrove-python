import React, { Fragment, useState, useContext } from "react";
import { Image, Center, Flex, Heading, Text, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import SignInButton from '../components/SignInButton';

const Home = () => {
    const responseGoogle = (response: any) => {
        console.log(response);
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
                            <AlertTitle mr={2}>
                                {
                                    loginStatus === 'success' ?
                                        "Successfully logged, happy coding! :)" :
                                        "Encountered error while logging in :("
                                }
                            </AlertTitle>
                            <AlertDescription>
                                {
                                    loginStatus === 'success' ?
                                        "Redirecting to course dashboard, please wait..." :
                                        "Contact one of the available support channels for further assistance."
                                }
                            </AlertDescription>
                        </Alert>
                    )}

                    <GoogleLogin
                        clientId="709200906463-vfrts5ve7kvaks7h5r96f269bn1q0pb1.apps.googleusercontent.com"
                        onSuccess={loginSuccess}
                        onFailure={loginFailure}
                        render={({ onClick, disabled }) => <SignInButton onClick={onClick} disabled={disabled} />}
                        cookiePolicy={'single_host_origin'}
                        theme="dark"
                        hostedDomain={'students.edu.sg'}
                    />
                    <Text
                        fontSize="xs"
                        style={{ marginTop: '4px'}}
                        textAlign="center"
                        fontWeight="Semibold"
                    >*Login with Google using your <u><strong>ICON Hillgrove</strong></u> account</Text>
                </div>
            </Flex>

        </Fragment>
    )
};

export default Home;