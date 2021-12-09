import React from 'react'
import { Col } from 'react-bootstrap'

const Listimgaitem = ({item}) => {
    return (
        <div >
           <Col> <img src={item.src} alt="" width="250px" height="200px"/></Col>
        </div>
    )
}

export default Listimgaitem
