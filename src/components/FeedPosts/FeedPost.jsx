import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

function FeedPost() {
  return (
    <>
      <PostHeader/>
      <Box>
        <Image src='public\img1.png' alt='pic' />
      </Box>
      <PostFooter/>
    </>
  )
}

export default FeedPost
