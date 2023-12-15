import { useState } from "react"
import { Input,Button } from "@chakra-ui/react"

const Login = () => {


  const [inputs,setInputs] = useState({
    email:'',
    password:'',
    confirmpassword:''
  })

  return (
    <>
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
        <Input
        placeholder="Confirm password"
        fontSize={14}
        type="password"
        value={inputs.confirmpasswordpassword}
        onChange={(e)=>setInputs({...inputs,confirmpassword:e.target.value})}/>

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log In
      </Button>
    </>
  )
}

export default Login
