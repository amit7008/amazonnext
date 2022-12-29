import React from "react";
import Link from "next/link";
const Service =(props) =>{
    return(
        <>
<div className="serviceWrapper">
    <div className="serviceInner">
        <div className="serviceIcon">
        {props.icon}
        </div>
        <div className="serviceContent">
            <h3 className="serviceHeading">{props.heading}</h3>
            <p className="serviceDescription">{props.description}</p>
            <Link href={props.sericeLink} className="srmore" >Learn More</Link>
        </div>
    </div>
</div>
</>
    )
}

export default Service;