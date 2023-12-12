import {Box, Grid, Skeleton, VStack} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from "../../components/Profile/ProfilePost"

function ProfilePosts() {

  const [isLoading,setIsLoading] = useState(true)
  

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[]);


  return (
    <Grid
    templateColumns={{sm:"repeat(1,1fr)",md:"repeat(3,1fr)"}}
    gap={1}
    columnGap={1}>
      {isLoading && 
      [0,1,2,3].map((_,idx)=>(
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
            <Box h="200px" >Contents Wrapped</Box>
          </Skeleton>
        </VStack>
      
      ))}

      {!isLoading && (
        <>
        <ProfilePost img="public/img1.jpeg"/>
        <ProfilePost img="public/img5.jpg"/>
        <ProfilePost img="public/img3.jpg"/>
        <ProfilePost img="public/img4.png"/>
        </>
      )}


    </Grid>
  )
}

export default ProfilePosts
