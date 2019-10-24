import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { fetchEmployees } from "../service/Lists.js"; 
import Button from "./Button.js";

function Employees(props)
{
    const [ searchKey, setSearchKey ] = useState("");
    const [ employeesList, setEmployeesList ] = useState(null);

    useEffect(_fetch, []);
    useEffect(_fetch, [ searchKey ]);

    function _fetch()
    {
        console.log(searchKey);
        fetchEmployees(
            searchKey,
            (resp) =>
            {
                setEmployeesList(resp);
            },
            (error) =>
            {
                console.log(error.message);
            }
        );
    }

    return (
        <section className="my-3">
            <form>
                <div className="form-group">
                    <div className="input-group">
                        <input 
                            name = "searchBox"
                            type = "text"
                            className="form-control form-control-sm"
                            placeholder="Enter name of employee"
                            value = { searchKey }
                            onChange = {
                                (e) => 
                                {
                                    setSearchKey(e.currentTarget.value);
                                }
                            }
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    
                </div>
            </form>

            <div className="mt-3">
                {
                    (employeesList)?
                        <table className="table w-100">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Company</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employeesList.map(
                                        (emp, i) =>
                                        {
                                            return <tr key={i}>
                                                <td>{ emp.firstname }</td>
                                                <td>{ emp.lastname }</td>
                                                <td>{ emp.company_name }</td>
                                                <td>
                                                    <Button 
                                                        classes = "btn-light"
                                                        content="View more..."
                                                    />
                                                </td>
                                            </tr> 
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    :
                        null
                }
            </div>
        </section>
    );
}

export default hot(module)(Employees);