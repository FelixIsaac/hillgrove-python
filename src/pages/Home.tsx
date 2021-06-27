import React, { Fragment } from "react";
import { Image, Center, Flex, Heading, Text } from "@chakra-ui/react"
import GoogleLogin from 'react-google-login';
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
                            <span style={{ color: '#40A14F' }}>Hillgrove</span>{" "}
                            <span style={{ color: '#025051' }}>Python Course</span>
                    </Heading>
                    <Text
                        fontSize={['sm', '1xl', '2xl', '3xl', '4xl']}
                        textAlign="center"
                        color="#66381B"
                        fontWeight="Semibold"
                    >Secondary Three Level</Text>
                </div>
                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                    <GoogleLogin
                        clientId="709200906463-vfrts5ve7kvaks7h5r96f269bn1q0pb1.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
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