import React from "react";
import { hot } from "react-hot-loader";
import Anchor from "./Anchor.js";

function Menu(props)
{
    return (
        <nav>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Anchor 
                        type = "routerLink"
                        linkTo = "/register"
                        content = { "Register" }
                        classes = "nav-link"
                        onClickCallback = {
                            (e) => 
                            {

                            }
                        }
                    />
                </li>
                <li className="nav-item">
                    <Anchor 
                        type = "routerLink"
                        linkTo = "/Employees"
                        content = { "Employees" }
                        classes = "nav-link"
                        onClickCallback = {
                            (e) => 
                            {
                                
                            }
                        }
                    />
                </li>
            </ul>
        </nav>
    );
}

export default hot(module)(Menu);