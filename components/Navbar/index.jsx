import { Box, Flex, Link, Text,Stack, HStack } from "@chakra-ui/react"
const Navbar = () => {
    return ( 
        <Box px={{base:'20px',md:'40px',lg:'60px',xl:'120px'}} pt='54px' pb='20px'>
            <Flex direction={'row'} justifyContent='space-between'>
                <Box>
                    <Link>
                        <Text fontSize={'24px'} fontWeight='700' color='#fff'>Ahmad Muyassar</Text>
                    </Link>
                </Box>
                <Box>
                    <HStack spacing={'28px'}>
                        <Stack>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.502 1L18.0593 4.55725H24.4428V10.9401L28 14.4973L24.4428 18.06V24.4428H18.06L14.5027 28L10.9401 24.4428H4.55725V18.06L1 14.498L4.55725 10.9407V4.55725H10.9401L14.502 1Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.5249 9.77502C16.5249 15.175 13.1499 15.85 9.7749 15.85C9.7749 18.55 14.1624 21.25 17.8749 18.55C21.5874 15.85 19.2249 9.77502 16.5249 9.77502Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Stack>
                            <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="-1.31134e-07" y1="1.5" x2="32" y2="1.5" stroke="white" strokeWidth="3"/>
                                <line x1="-1.31134e-07" y1="13.5" x2="32" y2="13.5" stroke="white" strokeWidth="3"/>
                            </svg>
                        </Stack>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar