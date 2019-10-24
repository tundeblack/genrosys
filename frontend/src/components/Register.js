import React, { useState } from "react";
import { hot } from "react-hot-loader";
import RegisterEmployee from "./RegisterEmployee";
import RegisterCompany from "./RegisterCompany.js";
import Anchor from "./Anchor.js";

function Register(props)
{
    const [ reloadCompanies, setReloadCompanies ] = useState(true);

    return (
        <section className="my-3">
            <ul className = "nav nav-tabs">
                <li className="nav-item">
                    <Anchor 
                        linkTo = "#company"
                        classes = "nav-link active"
                        content = "Company"
                        data-toggle = "tab"
                    />
                </li>
                <li className="nav-item">
                    <Anchor 
                        linkTo = "#employee"
                        classes = "nav-link"
                        content = "Employee"
                        data-toggle = "tab"
                    />
                </li>
            </ul>

            <div className="tab-content">
                <div id="company" className="tab-pane active show fade in">
                    <RegisterCompany 
                        setReloadCompanies = { setReloadCompanies }
                    />
                </div>
                <div id="employee" className="tab-pane">
                    <RegisterEmployee
                        reloadCompanies = { reloadCompanies }
                        setReloadCompanies = { setReloadCompanies }
                    />
                </div>
            </div>
        </section>
    );
}

export default hot(module)(Register);