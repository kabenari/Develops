import { Avatar, Flex, Link, Text, textDecoration } from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name="swarup" size={"lg"} src="public/profilepic.png"/>
            <Text fontSize={12} fontWeight={"bold"}>
                Im A Programmer
            </Text>
        </Flex>
        <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        color={"blue.400"}
        cursor={"pointer"}
        style={{textDecoration:"none"}}>
            Log Out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader
