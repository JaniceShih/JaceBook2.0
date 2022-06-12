import React from 'react'
import { Link} from 'react-router-dom';

function SidebarItem({src, Icon, title, currentUser, linkurl, linktarget, color, classname}) {
  let show = 
            <div className='sidebarrow'>           
                {Icon && <Icon fontSize="3rem" color={color} className={classname} />}
                <h4>{title}</h4> 
            </div>  

  if(linkurl ){
    show = <Link to={linkurl}>
              <div className='sidebarrow'>           
                  {Icon && <Icon fontSize="3rem" color={color} className={classname} />}
                  <h4>{title}</h4> 
              </div>
            </Link>  
  }

  if(linkurl && linktarget){
    show = <a href={linkurl} target={linktarget}>
              <div className='sidebarrow'>           
                  {Icon && <Icon fontSize="3rem" color={color} className={classname} />}
                  <h4>{title}</h4> 
              </div>
            </a>  
  }

  return (
    <>
      {show}
    </>
  )
}

export default SidebarItem