import React from "react";
import './ShowData.css'
const ShowData=(props)=>{
    console.log("show data is",props);
    // if(props.items.Username.length===0){
    //     console.log("please enter the name");
    // }
    return(
        <div className="Container2">
                {props.items.map((item) => (
                    <div className="ShowUserData" key={item.id}>
                        {item.Username} ({item.Age} years old)
                    </div>
                ))}

        </div>
    )
}
export default ShowData;