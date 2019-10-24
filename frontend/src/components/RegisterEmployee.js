import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import Button from "./Button.js";
import { fetchCompanies } from "../service/Lists.js";
import { registerEmployee } from "../service/Register.js";
import { isAnyEmpty } from "../helpers/Functions.js";

function RegisterEmployee(props)
{
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ companyId, setCompanyId ] = useState(0);
    const [ photo, setPhoto ] = useState("");
    const [ companies, setCompanies ] = useState(null);
    const [ submitting, setSubmitting ] = useState(false);
    const [ errMsg, setErrMsg ] = useState("");
    const [ successMsg, setSuccessMsg ] = useState("");

    useEffect(
        () => 
        {
            if (props.reloadCompanies)
            {
                // Fetch all companies
                fetchCompanies(
                    (resp) => 
                    {
                        setCompanies(resp);
                        props.setReloadCompanies(false);
                    },
                    (error) => 
                    {
                        console.log(error.message);
                    }
                )
            }
        }
    );

    function _submit()
    {
        try 
        {
            setErrMsg("");
            setSuccessMsg("");
            setSubmitting(true);
            
            isAnyEmpty([ companyId, firstName, lastName ]);
            registerEmployee(
                companyId,
                firstName,
                lastName,
                photo,
                (resp) => 
                {
                    setSubmitting(false);
                    setSuccessMsg("Employee registered successfully.");
                    setCompanyId("");
                    setFirstName("");
                    setLastName("");
                },
                (error) => 
                {
                    setSubmitting(false);
                    setErrMsg(error.message);
                }
            )

        } catch (error)
        {
            setSubmitting(false);
            setErrMsg(error.message);
        }
    }

    return (
        <section className="p-3 border border-top-0 rounded-bottom">
            <h6>Regsiter Employee</h6>
            <hr className="my-2" />

            <div className="row">
                <div className="col-md-8">
                    <form>
                        <div className="form-group">
                            <div className="form-control-label">Company</div>
                            <select
                                value = { companyId }
                                className = "form-control form-control-sm"
                                onChange = {
                                    (e) => 
                                    {
                                        setCompanyId(e.currentTarget.value);
                                    }
                                }
                            >
                                <option value="">Select Company</option>
                                {
                                    (companies)?
                                        companies.map(
                                            (itm, i) => 
                                            {
                                                return <option key = {i} value = {itm.id}>{ itm.name + " @ " + itm.address }</option>
                                            }
                                        )
                                    :
                                        null
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="form-control-label">First name</div>
                            <input 
                                type = "text"
                                placeholder = "Enter employee first name"
                                className="form-control form-control-sm"
                                value = { firstName }
                                onChange = {
                                    (e) => 
                                    {
                                        setFirstName(e.currentTarget.value);
                                    }
                                }
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-control-label">Last name</div>
                            <input 
                                type = "text"
                                placeholder = "Enter employee last name"
                                className="form-control form-control-sm"
                                value = { lastName }
                                onChange = {
                                    (e) => 
                                    {
                                        setLastName(e.currentTarget.value);
                                    }
                                }
                            />
                        </div> 
                    </form>    
                </div>
                <div className="col-md-4">
                
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <hr className="my-2" />
                    <div className="form-group text-right">
                        <Button 
                            classes = "btn-primary"
                            content = "Submit"
                            busy = { submitting }
                            onClickCallback = { _submit } 
                        />
                    </div>
                </div>
                <div className="col-12">
                {
                    (errMsg)?
                        <div className="alert alert-danger mt-2">
                            { errMsg }
                        </div>
                    :
                        (successMsg)?
                            <div className="alert alert-success mt-2">
                                { successMsg }
                            </div>
                        :
                            null
                }
                </div>
                
            </div>
            
        </section>
    );
}

export default hot(module)(RegisterEmployee);