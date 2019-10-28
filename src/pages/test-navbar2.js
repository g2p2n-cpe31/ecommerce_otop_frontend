import React, { useState } from 'react'
import Default from '../components/common/Navbar.js'
import DropDown from '../components/containers/NavbarDropDown/Navbar.js'

const Test = () => {
    const [navbar] = useState('second');
    const [isManageProd] = useState(false);
    const [notification] = useState(0);

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
                        />
                    )
                }[navbar]
            }        
        </>
    )
}
  
export default Test