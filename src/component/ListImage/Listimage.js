import React from 'react'
import Listimgaitem from './Listimgaitem'
import "./Listimage.css"

const Listimage = ({list}) => {
    return (
        <div className="listimage">
            
            {list.map((elt,index) => <Listimgaitem item={elt} key={index}/>)}
            
            
        </div>
    )
}

export default Listimage
