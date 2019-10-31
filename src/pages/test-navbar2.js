import React, { useState } from 'react'
import Default from '../components/common/Navbar.js'
import DropDown from '../components/containers/NavbarDropDown/Navbar.js'

const Test = () => {
    const [navbar] = useState('second');
    const [isManageProd] = useState(false);
    const [notification] = useState(0);
    // const [content] = useState("sklnxvkdsmsdvsdfbvsfdbfdbdbdsbdfbsd")

    return (
        <>
            {
                {
                    'default': (
                        <Default />
                    ),
                    'second': (
                        <DropDown 
                            isManageProd={isManageProd} 
                            notification={notification}
                            // content={content}
                        />
                    )
                }[navbar]
            }        
        </>
    )
}
  
export default Test