import { Container,VStack,Skeleton,SkeletonCircle,Flex,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {

  const[isLoading,setIsLoading] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])

  return (
    <Container maxW={"container.lg"} py={10} px={2}>
      {isLoading &&
				[0, 1, 2, 3].map((_, idx) => (
					<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
						<Flex gap='2'>
							<SkeletonCircle size='10' />
							<VStack gap={2} alignItems={"flex-start"}>
								<Skeleton height='10px' w={"200px"} />
								<Skeleton height='10px' w={"200px"} />
							</VStack>
						</Flex>
						<Skeleton w={"full"}>
							<Box h={"400px"}>contents wrapped</Box>
						</Skeleton>
					</VStack>
			))}

      {!isLoading && (
        <>
        <FeedPost img='public/img1.jpeg' username='wiola' avatar='public/img1.jpeg'/>
        <FeedPost img='public/img2.png' username='durf' avatar='public/img2.png'/>
        <FeedPost img='public/img3.jpg' username='hola' avatar='public/img3.jpg'/>
        <FeedPost img='public/img4.png' username='wiola' avatar='public/img4.png'/>
        </>
      )}

    </Container>
  )
}

export default FeedPosts
