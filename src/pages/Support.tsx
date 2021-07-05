import React, { useContext } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { Center, Container } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { UserContext } from '../contexts/UserContext';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Support = () => {
    const user = useContext(UserContext);

    if (!user.name) window.location.href = '/';

    return (
        <Container paddingY="32px">
            <Center>
                <ButtonGroup size="lg" spacing="3vw">
                    <Button
                        colorScheme="whatsapp"
                        leftIcon={<Icon fontSize="x-large"><FaWhatsapp /></Icon>}
                        as="a"
                        target="_blank"
                        href={process.env.REACT_APP_WHATSAPP}
                    >Join WhatsApp Group
                    </Button>
                    <Button
                        colorScheme="telegram"
                        leftIcon={<Icon fontSize="x-large"><FaTelegram /></Icon>}
                        as="a"
                        target="_blank"
                        href={process.env.REACT_APP_TELEGRAM}
                    >Join Telegram Group
                    </Button>
                </ButtonGroup>
            </Center>
        </Container>
    );
};

export default Support;