import React, { useContext, useState, useEffect } from 'react';
import { UserContext, getToken } from '../contexts/UserContext';
import {
  FormControl,
  FormLabel,
  Container,
  Button,
  Textarea
} from "@chakra-ui/react"

const Feedback = () => {
    const user = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setSubmit] = useState(false)
    
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/authentication/email`, {
            method: 'GET',
            headers: {
                'Authorization': getToken(),
            }
        }).then(serverResponse => {
            if (!serverResponse.ok) {
                if (serverResponse.status === 401) return window.location.href = '/';
                else throw serverResponse;
            }
            
            return serverResponse.json();
        }).then(({ email }) => setEmail(email));
    });
    
    if (!user.name) return window.location.href = '/';

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        setSubmit(true);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                'form-name': 'feedback',
                name: user.name,
                email,
                feedback
            })
        })
            .then(() => {})
            .catch(() => { })
            .finally(() => setSubmit(false));

        e.preventDefault();
    }
    
    return (
        <Container py="8" maxWidth="4xl">
            <form name="feedback" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <FormControl id="email" my="6">
                    <FormLabel>Feedback</FormLabel>
                    <Textarea
                        value={feedback}
                        onChange={e => setFeedback(e.target.value)}
                        placeholder="Your feedback message"
                        height="400px"
                    />
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
