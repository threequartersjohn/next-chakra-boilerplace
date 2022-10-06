import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Link,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';

export const DebugMenu = () => (
    <Box position="absolute" width="100vw" height="100vh" pointerEvents="none">
        <Box position="absolute" bottom="0" pointerEvents="auto">
            <Text>Debug</Text>

            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            Documentation
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <UnorderedList>
                            <ListItem>
                                <Link href="https://chakra-ui.com/getting-started" isExternal>Chakra UI</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://nextjs.org/learn/foundations/about-nextjs" isExternal>Next JS</Link>
                            </ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    </Box>
);
