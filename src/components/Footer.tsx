import React from "react";
import { Image, Box, Text, Grid, UnorderedList, ListItem, Link, Badge } from "@chakra-ui/react"

const Footer = () => {
    return (
        <section className="footer">
            <Box bg="#ECD799" w="100%" p={4} style={{ borderRadius: "10px 10px 0px 0px" }}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Image src="./images/hillgrove_logo.png" width="236px" height="95px" />
                    <Box w="100%" h="10">
                        <Text fontWeight="Bold" fontSize="18">Free resources</Text>
                        <UnorderedList>
                            <ListItem>
                                <Link color="teal.500" href="https://freecodecamp.org" isExternal>freeCodeCamp</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="teal.500" href="https://introtopython.org" isExternal>Intro to Python</Link>
                            </ListItem>
                            <ListItem>
                                <Link color="teal.500" href="https://kaggle.com" isExternal>Kaggle</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box w="100%" h="10">
                        <Text fontWeight="Bold" fontSize="18">Support channels</Text>
                        <UnorderedList>
                            <ListItem>
                                <Link color="teal.500" href="" isExternal>WhatsApp <Badge colorScheme="red" variant="outline">unavailable</Badge></Link>
                            </ListItem>
                            <ListItem>
                                <Link color="teal.500" href="" isExternal>Telegram <Badge colorScheme="red" variant="outline">unavailable</Badge></Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Grid>
            </Box>
        </section>
    )
}

export default Footer;