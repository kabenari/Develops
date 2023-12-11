import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

function SuggestedUser({followers,name,avatar}) {

   const [isFollowed,setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src={avatar} name={name} size={"md"}/>
            <VStack spacing={2}>
                <Box fontSize={12} fontWeight={"bold"}>
                    {name}
                </Box>
                <Box fontSize={12} fontWeight={"bold"}>
                    {followers} Followers
                </Box>
            </VStack>
        </Flex>
        <Button 
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{color: "white"}}
        onClick={()=>{
            setIsFollowed(!isFollowed)
        }}
        >
            {!isFollowed ? "Follow" : "UnFollow"}
        </Button>
    </Flex>
  )
}

export default SuggestedUser
