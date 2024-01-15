import React, { useState } from "react";
import './UserInput.css';
const UserInput=(props)=>{
    const [enteredUserName,setUserName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const UsernameHandler=(event)=>{
        
        setUserName(event.target.value);
    }
    const AgeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
    const FormHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0){
            window.alert("please enter the username and age");
            return;
        }
        if(enteredAge<0){
            window.alert("please enter the valid age");
        }
        const UserData={
            Username:enteredUserName,
            Age:enteredAge
        }
        props.onAddData(UserData);
        setUserName('');
        setEnteredAge('');
    }
    return (
        <div className="Container1">
            <form className="InputForm" onSubmit={FormHandler}>
                <label>UserName: </label><br></br>
                <input type="text" onChange={UsernameHandler}/><br></br>
                <label>Age(Years)</label><br></br>
                <input type="number" onChange={AgeHandler}/><br></br>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}
export default UserInput;