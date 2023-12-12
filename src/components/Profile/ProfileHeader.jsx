import { Avatar, AvatarGroup, Flex, Text, VStack,Button } from "@chakra-ui/react"

function ProfileHeader() {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
      <AvatarGroup
      size={{base:"xl",md:"2xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar name="Swarup" src="public/profilepic.png" alt="nom nom"/>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={4} direction={{base:"column",sm:"row"}}
        justifyContent={{base:"center",sm:"flex-start"}}
        alignItems={"center"}
        w={"full"}>
          <Text fontSize={{base:"sm",md:"lg"}}>
            swarup
          </Text>
          
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"white"}
								color={"black"}
								_hover={{ bg: "whiteAlpha.800" }}
								size={{ base: "xs", md: "sm" }}
							>
								Edit Profile
							</Button>
						</Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{base:2,sm:4}}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}> 
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}> 
              40k
            </Text>
            Followers
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}> 
              100
            </Text>
            Following
          </Text>
        </Flex>
      </VStack>


    </Flex>
  )
}

export default ProfileHeader
