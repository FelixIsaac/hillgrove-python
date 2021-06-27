import React from 'react';
import { Button } from "@chakra-ui/react"

const SignInButton = ({ onClick, disabled }) => {
    const ImageStyle = {
        backgroundColor: '#FFFFFF',
        padding: '8px',
        borderRadius: '4px',
        marginRight: '12px'
    }

    return (
        <Button colorScheme="messenger" size="lg">
            <img src="./images/google.svg" alt="Google Sign In" style={ImageStyle} />
            Sign in with Google
        </Button>
    )
}

export default SignInButton;