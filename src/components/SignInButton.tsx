import React from 'react';
import { Button } from "@chakra-ui/react"

const SignInButton = ({ onClick, disabled, loading: { loading, setLoading } }) => {
    const ImageStyle = {
        backgroundColor: '#FFFFFF',
        padding: '8px',
        borderRadius: '4px',
        marginRight: '12px'
    }

    const clickHandler = () => {
        onClick();
        setLoading(true);
    }

    return (
        <Button
            colorScheme="messenger"
            isLoading={loading}
            loadingText="Signing in"
            size="lg"
            onClick={clickHandler}
            disabled={disabled || loading}
        >
            <img src="./images/google.svg" alt="Google Sign In" style={ImageStyle} />
            Sign in with Google
        </Button>
    )
}

export default SignInButton;