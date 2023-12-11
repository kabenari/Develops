import {Box, Flex, Link, Text, VStack} from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested Forums
            </Text>
            <Text fontSize={12} flexWrap={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                View All
            </Text>
        </Flex>

        <SuggestedUser name='Dan Abrahmov' followers={1392} avatar='public/img1.png'/>
        <SuggestedUser name='Dan Abrahmov' followers={1392} avatar='public/img1.png'/>
        <SuggestedUser name='Dan Abrahmov' followers={1392} avatar='public/img1.png'/>

        <Box 
        fontSize={12}
        color={"gray.500"}
        mt={5}>
            @built by swarup
            <Link href='https://portfoliofixed-3nuk-72funfsch-swarups-projects.vercel.app/' target='_blank' color={"blue.500"} fontSize={15}>
             {""}{""} Swarup
            </Link>
        </Box>

    </VStack>
  )
}

export default SuggestedUsers
