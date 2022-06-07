import React from 'react'
import Story from './story'

function StoryReel() {
  return (
    <div className='storyreel'>
        {/* <Story 
            image=""
            profileSrc="Add Story"
            title="a/A Student"
        /> */}
        <Story 
            image="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/ruby/logo.png"
            profileSrc=""
            title="Ruby"
        />
        <Story 
            image="https://cdn.hackersandslackers.com/2019/02/SQLpt1-3.jpg"
            profileSrc=""
            title="SQL/Postgresql"
        />
         <Story 
            image="https://rubyonrails.org/assets/images/opengraph.png"
            profileSrc=""
            title="Rails"
        />
         <Story 
            image="https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png"
            profileSrc=""
            title="JavaScript"
        />
         <Story 
            image="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2"
            profileSrc=""
            title="React/Redux"
        />
    </div>
  )
}

export default StoryReel;