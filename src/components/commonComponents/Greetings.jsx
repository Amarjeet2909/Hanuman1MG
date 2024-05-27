import React from 'react'
import { ambulanceImage } from '../../assets'

const Greetings = () => {
    return (
            <div className="map-view common-border d-flex ">
                <div>
                    <h2 className="common-heading greeting-color mb-0 pt-4">Greetings</h2>
                    <h3 className="common-heading ">Sandeep Krishna</h3>
                    <p className="greeting-information">Lorem ipsum dolor sit amet consectetur. Mi tristique quis faucibus nulla iaculis sed molestie. Nulla dui in eget non fusce tortor pellentesque. Est posuere cursus eleifend purus nibh ac. Amet aliquet sapien senectus tempor vulputate urna et mus.</p>
                </div>
                <img src={ambulanceImage} alt="image"></img>
            </div>
            
       
    )
}

export default Greetings