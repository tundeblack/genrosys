import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import Button from "./Button.js";
import { registerCompany } from "../service/Register.js";
import { isAnyEmpty } from "../helpers/Functions.js";

function RegisterCompany(props)
{
    const [ companyName, setCompanyName ] = useState("");
    const [ companyAddress, setCompanyAddress ] = useState("");
    const [ submitting, setSubmitting ] = useState(false);
    const [ errorMsg, setErrMsg ] = useState("");
    const [ successMsg, setSuccessMsg ] = useState("");

    function _submit() 
    {
        try 
        {
            isAnyEmpty(
                [
                    companyName,
                    companyAddress
                ]
            );
            
            setErrMsg("");
            setSuccessMsg("");
            setSubmitting(true);
            registerCompany(
                companyName,
                companyAddress,
                (resp) => 
                {
                    setSubmitting(false);
                    setCompanyName("");
                    setCompanyAddress("");
                    setSuccessMsg("Company registered successfully.");
                    props.setReloadCompanies(true);
                },
                (err) => 
                {
                    setSubmitting(false);
                    setErrMsg(err.message);
                }
            );

        } catch(error)
        {
            setErrMsg(error.message);
        }
    }

    return (
        <section className="p-3 border border-top-0 rounded-bottom">
            <h6>Regsiter Company</h6>
            <hr className="my-2" />

            <form className="w-75">
                <div className="form-group">
                    <div className="form-control-label">Name</div>
                    <input 
                        type = "text"
                        placeholder = "Enter company name"
                        className="form-control form-control-sm"
                        value = { companyName }
                        onChange = {
                            (e) => 
                            {
                                setCompanyName(e.currentTarget.value);
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <div className="form-control-label">Address</div>
                    <input 
                        type = "text"
                        placeholder = "Enter company address"
                        className="form-control form-control-sm"
                        value = { companyAddress }
                        onChange = {
                            (e) => 
                            {
                                setCompanyAddress(e.currentTarget.value);
                            }
                        }
                    />
                </div>
                <div className="form-group text-right">
                    <Button 
                        classes = "btn-primary"
                        content = "Submit"
                        busy = { submitting }
                        onClickCallback = { _submit }
                    />
                </div>  
                {
                    (errorMsg)?
                        <div className="alert alert-danger mt-2">
                            { errorMsg }
                        </div>
                    :
                        (successMsg)?
                            <div className="alert alert-success mt-2">
                                { successMsg }
                            </div>
                        :
                            null
                }
            </form>

        </section>
    );
}

export default hot(module)(RegisterCompany);