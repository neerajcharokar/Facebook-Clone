import React from 'react'

const Widget = () => {
    return (
        <div className='widgets'>
            <iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcarlzeissphotographyy&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=369099597607013'
            width='340'
            height='1500'
            style={{border:"none",overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            allowTransparency='true'
            allow='encrypted-media'
            />
        </div>
    )
}

export default Widget
