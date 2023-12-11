import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"

import { UnlikeLogo , NotificationsLogo, CommentLogo} from "../../assets/contants";

function PostFooter({username}) {

  const [liked,setLiked] = useState(false);
  const [likes,setLikes] = useState(100);

  const handleLike = ()=>{
    if(liked){
      setLiked(false);
      setLikes(likes - 1);
    }else{
      setLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2} username={username}>
      <Box onClick={handleLike} cursor={"pointer"} fontSize={17}>
        {!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
      </Box>
      <Box cursor={"pointer"} fontSize={17}>
        <CommentLogo/>
      </Box>
    </Flex>
    <Text fontSize='sm' color={"gray"}>
      {likes} Likes
    </Text>
    <Text fontSize='sm' fontWeight={700}>
      {username}{" "}
      <Text as='span' fontWeight={400}>
      Lokkin Hot
    </Text>
    </Text>
    <Text fontSize='sm' color={"gray"}>
      View All 1,000 comments
    </Text>

    <Flex alignItems={"center"} gap={2} justifyContent={"space-between"}
    w={"full"}>
      <InputGroup>
      <Input variant={"flushed"} placeholder={"Add a Comment ..."} fontSize={14} />
      <InputRightElement>
      <Button
      fontSize={14}
      color={"blue.500"}
      cursor={"pointer"}
      _hover={{color:"white"}}
      bg={"transparent"}>
        Post
      </Button>
      </InputRightElement>
      </InputGroup>
    </Flex>

    </>
  )
}

export default PostFooter
