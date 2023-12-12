import {Avatar, Flex, Text} from "@chakra-ui/react"

function Comment({createdAt,text,profilepic,username}) {
  return (
    <Flex gap={4}>
        <Avatar src={profilepic} name={username} size={"sm"}/>
        <Flex direction={"column"}>
            <Flex gap={2}>
                <Text fontWeight={"bold"} fontSize={12}>
                    {username}
                </Text>
                <Text fontSize={14}>
                    {text}
                </Text>
                <Text fontSize={14}>
                    {createdAt}
                </Text>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Comment
