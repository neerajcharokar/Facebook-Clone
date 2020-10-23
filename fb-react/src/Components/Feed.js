import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
            profilePic='my_avatar.jpg'
            message='This is the message'
            timestamp='1603445102628'
            imgName='imgName'
            username='Neeraj'
            />
        </div>
    )
}

export default Feed
