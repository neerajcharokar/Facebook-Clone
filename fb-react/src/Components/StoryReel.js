import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
            image='https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            profileSrc='my_avatar.JPG'
            title='Neeraj Charokar' />
            <Story
            image='https://media.istockphoto.com/photos/abstract-handpainted-art-background-on-canvas-picture-id1134512518?k=6&m=1134512518&s=612x612&w=0&h=1vNz_YllCoCo7dkznt2aZYHOv8Z_aKFAFNofFfX9Xy8='
            profileSrc='avatar1.png'
            title='User 2' />
            <Story
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyXaws7ypugH6tVkHX5eM23rGBUGampHCR4A&usqp=CAU'
            profileSrc='avatar2.png'
            title='User 3' />
        </div>
        
    )
}

export default StoryReel
