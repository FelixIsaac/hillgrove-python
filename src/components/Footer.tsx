import React from "react";
import { Box,  Container, Link, SimpleGrid, Stack, Text, Image } from "@chakra-ui/react"
import { FiExternalLink } from 'react-icons/fi';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Icon = () => <FiExternalLink style={{ display: 'inline' }}/>

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
    return (
        <section className="footer">
            <Box
                bg="green.200" w="100%"
                p={4}
                style={{ borderRadius: "10px 10px 0px 0px" }}
                color="black"
            >
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '2fr 2fr', md: '4fr 2fr 2fr 2fr' }}
                        spacing={8}
                    >
                        <Stack spacing={6}>
                            <Box>
                                <Image src="/images/hillgrove_logo.png" maxWidth="236px" height="95px" />
                            </Box>
                        </Stack>
                         <Stack align={'flex-start'}>
                        <ListHeader>Free resources</ListHeader>
                            <Link color="blue" href="https://freecodecamp.org" isExternal>freeCodeCamp <Icon /></Link>
                            <Link color="blue" href="https://introtopython.org" isExternal>Intro to Python <Icon /></Link>
                            <Link color="blue" href="https://kaggle.com" isExternal>Kaggle <Icon /></Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Support channels</ListHeader>
                            <Link color="blue" href={process.env.REACT_APP_WHATSAPP} isExternal>
                                WhatsApp  <Icon />
                                </Link>
                            <Link color="blue" href={process.env.REACT_APP_TELEGRAM} isExternal>
                                Telegram  <Icon />
                            </Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Others</ListHeader>
                            <Link color="blue" href="https://go.gov.sg/HGV-intro-to-python-feedback" isExternal>Feedback <Icon /></Link>
                            <Text>
                                Dark mode: <ColorModeSwitcher justifySelf="flex-end" />
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </section>
    )
}

export default Footer;
