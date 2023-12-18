import React from 'react'
import {Flex,Container, Box,Image, VStack} from "@chakra-ui/react"
import AuthForm from '../../components/AuthForm/AuthForm'

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} gap={10} alignItems={"center"}>
                            {/* left */}
            {/* <Box display={{base:"none",md:"block"}}>
                <Image src="public\auth.png" h={650} alt={"pic"}/>
            </Box> */}
            {/* right */}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm/>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src='public\playstore.png' h={"10"} alt='Playsptre' />
                    <Image src='public\microsoft.png' h={"10"} alt='Play' />
                </Flex>
            </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
