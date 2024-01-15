import React, { useState } from "react";
import UserInput from "./UserInput";
import ShowData from "./ShowData";
const UserData=()=>{
    const [data, setData] = useState([]);
    const  DataHandler= (newData) => {
        const updatedData = [...data, { ...newData, id: Math.random().toString() }];
        setData(updatedData);
    };
    return(

        <div>
            <UserInput onAddData={DataHandler}/>
            <ShowData items={data}/>
        </div>
    )
}
export default UserData;