import { Avatar, Box, Flex,Text } from "@chakra-ui/react"

function PostHeader({username,img,avatar}) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2} avatar={avatar}>
            <Avatar src={img} size={"sm"} alt="user profile pic"/>
            <Flex fontSize={12} fontWeight={"bold"} gap="2">
                {username}
            </Flex>
            <Box color={"gray.500"}>
                . 1w
            </Box>
        </Flex>
        <Box cursor={"pointer"}>
            <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{
                color:"white"
            }}
            transition={"0.2s ease-in-out"}>
                Unfollow
            </Text>
        </Box>
    </Flex>
  )
}

export default PostHeader
