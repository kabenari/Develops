import { Input,Box,VStack,Image,Button, Flex,Text } from "@chakra-ui/react"
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function AuthForm() {

    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({
        email:'',
        password:'',
        confirmpassword:''
    })
    
    const handleAuth = ()=>{
        if (!inputs.email || !inputs.password) {
            alert("Fill Everything");
            return;
        }

        navigate("/");

    }

  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
        <Image src='public\logo.png' h={24} cursor={"pointer"} alt='Instagram' />
        <Input
        placeholder="email"
        fontSize={14}
        type="email"
        value={inputs.email}
        onChange={(e)=>setInputs({...inputs,email:e.target.value})}/>
        <Input
        placeholder="password"
        fontSize={14}
        type="password"
        value={inputs.password}
        onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>

        {!isLogin ?<Input
        placeholder="confirm password"
        fontSize={14}
        type="password"
        value={inputs.confirmpassword}
        onChange={(e)=>setInputs({...inputs,confirmpassword:e.target.value})}/> : null}

        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
        {!isLogin ? "log In" : "Sign Up"}
        </Button>

        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
                OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>

        <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
            <Image src="public\google.png" w={5} alt="gog"/>
            <Text mx={2} color={"blue.500"}>
                Log In With Google
            </Text>
        </Flex>
    </VStack>
</Box>

    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ? "Sign up" : "Log in"}
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default AuthForm
