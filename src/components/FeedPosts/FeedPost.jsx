import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

function FeedPost({img,username,avatar}) {
  return (
    <>
      <PostHeader username={username} img={img}/>
      <Box>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter avatar={avatar} />
    </>
  )
}

export default FeedPost
