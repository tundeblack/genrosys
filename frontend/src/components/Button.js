import React from "react";
import { hot } from "react-hot-loader";

function Button(props)
{
    let { btnTitle, classes, onClickCallback, busy, content, btnDisabled, ...otherProps } = props;

    return (
        <button 
            type = "button"
            title = { (btnTitle)? btnTitle : "" }
            className = {"btn" + ((classes)? " " + classes : "")}
            onClick = { 
                (typeof onClickCallback == "function")? 
                    onClickCallback 
                : 
                    () => {} 
            }
            disabled = { busy || btnDisabled }
            { ...otherProps }
        >
            { content }&nbsp;
            { 
                (busy)?
                    <span className="fas fa-spinner fa-pulse text-white"></span>
                :
                    null
            }
        </button>
    );
}

export default hot(module)(Button);