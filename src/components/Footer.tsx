import React from "react";
import { Image, Box, Text, Grid, UnorderedList, ListItem, Link, Badge } from "@chakra-ui/react"
import { FiExternalLink } from 'react-icons/fi';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Icon = () => <FiExternalLink style={{ display: 'inline' }}/>

const Footer = () => {
    return (
        <section className="footer">
            <Box bg="green.50" w="100%" p={4} style={{ borderRadius: "10px 10px 0px 0px" }}>
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    <Image src="./images/hillgrove_logo.png" width="236px" height="95px" />
                    <Box w="100%" h="10">
                        <Text fontWeight="Bold" fontSize="18" color="black">Free resources</Text>
                        <UnorderedList color="black">
                            <ListItem>
                                <Link color="blue.600" href="https://freecodecamp.org" isExternal>freeCodeCamp <Icon /></Link>
                            </ListItem>
                            <ListItem>
                                <Link color="blue.600" href="https://introtopython.org" isExternal>Intro to Python <Icon /></Link>
                            </ListItem>
                            <ListItem>
                                <Link color="blue.600" href="https://kaggle.com" isExternal>Kaggle <Icon /></Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box w="100%" h="10">
                        <Text fontWeight="Bold" fontSize="18" color="black">Support channels</Text>
                        <UnorderedList color="black">
                            <ListItem>
                                <Link color="blue.600" href="" isExternal>
                                    WhatsApp  <Icon />
                                    {" "}<Badge colorScheme="red" variant="outline">unavailable</Badge>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link color="blue.600" href="" isExternal>
                                    Telegram  <Icon />
                                    {" "}<Badge colorScheme="red" variant="outline">unavailable</Badge>
                                </Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box w="100%" h="10" fontWeight="Bold" fontSize="18" color="black">
                        Dark mode toggle: <ColorModeSwitcher justifySelf="flex-end" />
                    </Box>
                </Grid>
            </Box>
        </section>
    )
}

export default Footer;