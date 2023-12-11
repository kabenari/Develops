import { Avatar, Flex, Text } from "@chakra-ui/react"

function SuggestedHeader() {
  return (
    <Flex>
        <Flex>
            <Avatar name="swarup" size={"lg"} src="public/profilepic.png"/>
            <Text>
                Im A Programmer
            </Text>
        </Flex>
    </Flex>
  )
}

export default SuggestedHeader
