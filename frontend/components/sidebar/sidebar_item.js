
import React from 'react'
import { Link} from 'react-router-dom';

function SidebarItem({src, Icon, title, currentUser, linkurl, color, classname}) {
  let show = <h4>{title}</h4>   

  if(linkurl){
    show = <a href={linkurl} target="_blank"><h4 className='sidebarrow-title'>{title}</h4></a>  
  }

  return (
    <div className='sidebarrow'>           
        {Icon && <Icon fontSize="3rem" color={color} className={classname} />}
        {show}
    </div>
  )
}

export default SidebarItem