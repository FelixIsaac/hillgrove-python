import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Button,
  Textarea
} from "@chakra-ui/react"

const Feedback = () => {
    const user = useContext(UserContext);
    const [isSubmitting] = useState(false)
    
    if (!user.name ) return window.location.href = '/';

    // todo: get user email from server
    return (
        <Container my="8">
            <form name="feedback" method="POST" data-netlify="true">
                <input type="hidden" name="name" value={user.name}/>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" />
                    <FormHelperText>Site is encrypted with HTTPS SHA 256 Encryption</FormHelperText>
                </FormControl>
                <FormControl id="email" my="6">
                    <FormLabel>Feedback</FormLabel>
                    <Textarea placeholder="Your feedback message" name="feedback" height="400px"/>
                </FormControl>
                <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={isSubmitting}
                    type="submit"
                >
                    Submit feedback
                </Button>
            </form>
        </Container>
    )
}

export default Feedback;
