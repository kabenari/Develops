import { useState } from "react"
import { Input,Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword"


const SignUp = () => {


  const [inputs,setInputs] = useState({
    fullname:'',
    username:'',
    email:' ',
    password:''
  })

  const [showpw,setShowPw] = useState(false)

  const {loading,signup,error} =useSignUpWithEmailAndPassword()


  return (
    <>
      <Input
        placeholder="email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e)=>setInputs({...inputs,email:e.target.value})}/>
        <Input
        placeholder="username"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.username}
        onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
        <Input
        placeholder="fullname"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.fullname}
        onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}/>
        <InputGroup>
        <Input
        placeholder="password"
        fontSize={14}
        type={showpw ? "text" : "password"}
        value={inputs.password}
        size={"sm"}
        onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>

        <InputRightElement>
        <Button variant={"ghost"} size={"sm"} onClick={()=> setShowPw(!showpw)}>
            {showpw ? <ViewIcon/> : <ViewOffIcon/>}
        </Button>
        </InputRightElement>
        <Button variant={"ghost"} size={"sm"} onClick={()=> signup(inputs)}>
            sign up
        </Button>
        </InputGroup>
    </>
  )
}

export default SignUp
