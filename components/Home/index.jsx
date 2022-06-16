import {Box, Button, Container, Flex, HStack, Image, Link, SimpleGrid, Spacer, Stack, Text, VStack} from "@chakra-ui/react"

const Home = () => {
    return ( 
        <Box pb='152px' id="Home">
            <Container maxW='5xl'>
                <Flex mt={{base:'40px',md:'0px'}} direction={{base:'column',md:'row'}} alignItems={{base:'center',md:'left'}} textAlign={{base:'center',md:'left'}}>
                    <Box my='auto'>
                        <Text fontSize={'48px'} fontWeight='700' color='#fff'>
                            Ahmad Muyassar
                        </Text>
                        <Text fontSize={'20px'} fontWeight='400' color='#7F8087'>Front End Developer & Designer UI/UX Makassar, Indonesia</Text>
                        <Stack mt='50px' direction={'row'} spacing='247px'>
                            <Stack direction={{base:'row',md:'row'}} spacing={{base:'8px',md:'16px'}}>
                                <Link ml='-14px'>
                                 <Button
                                        rightIcon={<svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="white"/>
                                        </svg>}
                                        textAlign='left'
                                        iconSpacing={{base:'8px',md:'16px'}}
                                        fontSize={{base:'16px',md:'24px'}}
                                        size='md'
                                        height='31px'
                                        width={{base:'160px',md:'191px'}}
                                        bgColor={'transparent'}
                                        color='#fff'
                                        _hover={{ bg: 'transparent' }}
                                        _active={{
                                            bg: 'transparent',
                                            transform: 'scale(0.98)',
                                            borderColor: 'transparent',
                                        }}
                                        >
                                        Contact
                                        </Button>
                                </Link>
                                <Link>
                                 <Button
                                        rightIcon={<svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="white"/>
                                        </svg>}
                                        textAlign='left'
                                        iconSpacing={{base:'8px',md:'16px'}}
                                        fontSize={{base:'16px',md:'24px'}}
                                        size='md'
                                        pl='0px'
                                        height='31px'
                                        width={{base:'160px',md:'191px'}}
                                        bgColor={'transparent'}
                                        color='#fff'
                                        _hover={{ bg: 'transparent' }}
                                        _active={{
                                            bg: 'transparent',
                                            transform: 'scale(0.98)',
                                            borderColor: 'transparent',
                                        }}
                                        >
                                        My Portfolio
                                        </Button>                                    
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box>
                        <Image w='100%' h={{base:'345px',md:'545px',lg:'890px',xl:'890px'}} src='/hero.png' alt='' />
                    </Box>
                </Flex>

                <Flex direction='column' mt='120px' gap='124px'>
                    <Stack direction={{base:'column',md:'row'}} spacing={{base:'40px',md:'200px'}}>
                        <Box>
                            <Text color='#fff' fontSize={'24px'} fontWeight='500'>ABOUT</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'20px'} fontWeight='400' color='#7F8087'>Hey! Im Leonardo, a UI/UX Designer, creating brand new, thoughtful and exceptionally detailed user interfaces.</Text>
                        </Box>
                    </Stack>
                    

                    {/* Skills */}
                    <Stack direction={{base:'column',md:'row'}} spacing={{base:'40px',md:'200px'}}>
                        <Box>
                            <Text color='#fff' fontSize={'24px'} fontWeight='500'>SKILLS</Text>
                        </Box>
                        <SimpleGrid columns={{base:1,md:2}} spacing='40px'>
                            <Box>
                                <Text fontSize={'24px'} color='#fff'><u>Figma</u></Text>
                                <Box mt='24px' spacing='4px'>
                                    <HStack spacing='16px'>
                                        <Stack>
                                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="#7F8087"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'20px'} color='#7F8087'>
                                            Wireframing
                                        </Text>
                                    </HStack>
                                    <HStack spacing='16px'>
                                        <Stack>
                                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="#7F8087"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'20px'} color='#7F8087'>
                                            UI Designing
                                        </Text>
                                    </HStack>
                                </Box>
                            </Box>

                            <Box>
                                <Text fontSize={'24px'} color='#fff'><u>Photoshop</u></Text>
                                <Box mt='24px' spacing='4px'>
                                    <HStack spacing='16px'>
                                        <Stack>
                                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="#7F8087"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'20px'} color='#7F8087'>
                                            Photo Manipulating
                                        </Text>
                                    </HStack>
                                    <HStack spacing='16px'>
                                        <Stack>
                                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="#7F8087"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'20px'} color='#7F8087'>
                                            Color Grading & Effect
                                        </Text>
                                    </HStack>
                                </Box>
                            </Box>

                            <Box>
                                <Text fontSize={'24px'} color='#fff'><u>After Effects</u></Text>
                                <Box mt='24px' spacing='4px'>
                                    <HStack spacing='16px'>
                                        <Stack>
                                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="#7F8087"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'20px'} color='#7F8087'>
                                            UI Animation
                                        </Text>
                                    </HStack>
                                    <HStack spacing='16px'>
                                        <Stack>
                                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="#7F8087"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'20px'} color='#7F8087'>
                                            Motion Graphics
                                        </Text>
                                    </HStack>
                                </Box>
                            </Box>
                        </SimpleGrid>
                    </Stack>
                    
                    {/* Works */}
                    <Stack direction={{base:'column',md:'row'}} spacing={{base:'40px',md:'200px'}}>
                        <Box>
                            <Text color='#fff' fontSize={'24px'} fontWeight='500'>WORKS</Text>
                        </Box>
                        <Flex direction={'column'} gap='48px'>
                            <Stack direction={{base:'column',md:'row'}} spacing='48px'>
                                <Image w='153px' h='153px' src='/works.png' borderRadius={'100%'} alt='' />
                                <Box>
                                    <Text fontSize={'24px'} color='#fff'>Mediana.co</Text>
                                    <Text fontSize={'20px'} color='#7F8087'>Webflow Template crafted for SaaS Startups and Companies.</Text>
                                    <Link>
                                        <HStack spacing={'16px'}>
                                            <Text fontSize={'20px'} color='#fff'><u>See it live</u></Text>
                                            <Stack>
                                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="white"/>
                                                </svg>
                                            </Stack>
                                        </HStack>
                                    </Link>
                                </Box>
                            </Stack>
                            <Stack direction={{base:'column',md:'row'}} spacing='48px'>
                                <Image w='153px' h='153px' src='/works.png' borderRadius={'100%'} alt='' />
                                <Box>
                                    <Text fontSize={'24px'} color='#fff'>Mediana.co</Text>
                                    <Text fontSize={'20px'} color='#7F8087'>Webflow Template crafted for SaaS Startups and Companies.</Text>
                                    <Link>
                                        <HStack spacing={'16px'}>
                                            <Text fontSize={'20px'} color='#fff'><u>See it live</u></Text>
                                            <Stack>
                                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="white"/>
                                                </svg>
                                            </Stack>
                                        </HStack>
                                    </Link>
                                </Box>
                            </Stack>
                            <Stack direction={{base:'column',md:'row'}} spacing='48px'>
                                <Image w='153px' h='153px' src='/works.png' borderRadius={'100%'} alt='' />
                                <Box>
                                    <Text fontSize={'24px'} color='#fff'>Mediana.co</Text>
                                    <Text fontSize={'20px'} color='#7F8087'>Webflow Template crafted for SaaS Startups and Companies.</Text>
                                    <Link>
                                        <HStack spacing={'16px'}>
                                            <Text fontSize={'20px'} color='#fff'><u>See it live</u></Text>
                                            <Stack>
                                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="white"/>
                                                </svg>
                                            </Stack>
                                        </HStack>
                                    </Link>
                                </Box>
                            </Stack>
                            <Stack direction={{base:'column',md:'row'}} spacing='48px'>
                                <Image w='153px' h='153px' src='/works.png' borderRadius={'100%'} alt='' />
                                <Box>
                                    <Text fontSize={'24px'} color='#fff'>Mediana.co</Text>
                                    <Text fontSize={'20px'} color='#7F8087'>Webflow Template crafted for SaaS Startups and Companies.</Text>
                                    <Link>
                                        <HStack spacing={'16px'}>
                                            <Text fontSize={'20px'} color='#fff'><u>See it live</u></Text>
                                            <Stack>
                                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="white"/>
                                                </svg>
                                            </Stack>
                                        </HStack>
                                    </Link>
                                </Box>
                            </Stack>
                            <Stack direction={{base:'column',md:'row'}} spacing='48px'>
                                <Image w='153px' h='153px' src='/works.png' borderRadius={'100%'} alt='' />
                                <Box>
                                    <Text fontSize={'24px'} color='#fff'>Mediana.co</Text>
                                    <Text fontSize={'20px'} color='#7F8087'>Webflow Template crafted for SaaS Startups and Companies.</Text>
                                    <Link>
                                        <HStack spacing={'16px'}>
                                            <Text fontSize={'20px'} color='#fff'><u>See it live</u></Text>
                                            <Stack>
                                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="white"/>
                                                </svg>
                                            </Stack>
                                        </HStack>
                                    </Link>
                                </Box>
                            </Stack>
                        </Flex>
                    </Stack>
                    
                    {/* I've Work For */}
                    <Stack direction={{base:'column',md:'row'}} spacing={{base:'40px',md:'200px'}}>
                        <Box>
                            <Text color='#fff' fontSize={'24px'} fontWeight='500'>I’VE WORK FOR</Text>
                        </Box>
                        <Flex direction={'column'} gap='24px'>
                            <Box>
                                <Text fontSize={'24px'} fontWeight='700' color='#fff'><u>Mediana Co, Ltd.</u></Text>
                                <Text  fontSize={'20px'} fontWeight='400' color='#7F8087'>UI Designer – Apr 23, 2022 to May 21, 2022</Text>
                            </Box>
                            <Box>
                                <Text fontSize={'24px'} fontWeight='700' color='#fff'><u>Themeforest.</u></Text>
                                <Text  fontSize={'20px'} fontWeight='400' color='#7F8087'>Freelance – Jan 14, 2022 to now</Text>
                            </Box>
                            <Box>
                                <Text fontSize={'24px'} fontWeight='700' color='#fff'><u>Mediana Co, Ltd.</u></Text>
                                <Text  fontSize={'20px'} fontWeight='400' color='#7F8087'>UI Designer</Text>
                            </Box>
                        </Flex>
                    </Stack>
                    
                    {/* Contack */}
                    <Stack direction={{base:'column',md:'row'}} spacing={{base:'40px',md:'200px'}}>
                        <Box>
                            <Text color='#fff' fontSize={'24px'} fontWeight='500'>CONTACT</Text>
                        </Box>
                        <Box>
                            <Text  mt='-20px' fontSize={'48px'} fontWeight='300' color='#fff'>work@yassar.it</Text>
                            <Text  mt='24px' fontSize={'20px'} fontWeight='400' color='#7F8087'>*only send email for working purpose</Text>
                        </Box>
                    </Stack>
                </Flex>
            </Container>
            
        </Box>
    )
}

export default Home