import React from 'react';
import "./Header.css";
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import MessageSharpIcon from '@material-ui/icons/MessageSharp';
import { IconButton } from '@material-ui/core';

export default function Header() {
    return (
        <div className = "header">
        <IconButton>
            <PersonSharpIcon fontSize = "large" className = "header_icon" />
        </IconButton>  
        <img className = "header_logo" src  = "https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem.jpg" />  
        <IconButton>
            <MessageSharpIcon fontSize = "large" className = "header_icon"/>
        </IconButton>
        </div>
    )
}
