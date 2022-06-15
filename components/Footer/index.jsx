import { Flex, Text, Link, Stack, Button } from "@chakra-ui/react"

const Footer = () => {
    return ( 
        <Flex px={{base:'20px',md:'40px',lg:'60px',xl:'120px'}} pb='20px' direction='row' justifyContent={'space-between'}>
            <Text fontSize={'20px'} color='#7F8087'>
                Ahmad Muyassar © 2022. All Rights Reserved.
            </Text>
            <Link>
                                 <Button
                                        leftIcon={<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989592 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM6.75 15L6.75 1L5.25 1L5.25 15L6.75 15Z" fill="white"/>
                                        </svg>
                                        }
                                        textAlign='left'
                                        iconSpacing='16px'
                                        fontSize='16px'
                                        size='md'
                                        height='31px'
                                        width='191px'
                                        bgColor={'transparent'}
                                        color='#fff'
                                        _hover={{ bg: 'transparent' }}
                                        _active={{
                                            bg: 'transparent',
                                            transform: 'scale(0.98)',
                                            borderColor: 'transparent',
                                        }}
                                        >
                                        Back to top
                                        </Button>
                                    {/* <Text fontSize={'24px'} fontWeight='400' color='#fff'>
                                        Contact
                                    </Text>
                                    <Stack>
                                        <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="white"/>
                                        </svg>
                                    </Stack> */}
                                </Link>
        </Flex>
    )
}

export default Footer