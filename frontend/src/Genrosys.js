import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import Menu from "./components/Menu.js";
import { Switch, Route } from "react-router-dom";
import Employees from "./components/Employees.js";
import Register from "./components/Register.js";

function Genrosys(props)
{
    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <Menu />
                </div>
                <div className="col-md-7 border rounded">
                    <Switch>
                        <Route 
                            path = "/employees"
                            render = {
                                (props) => 
                                {
                                    return <Employees />
                                }
                            }
                        />
                        <Route 
                            path = "/register"
                            render = {
                                (props) => 
                                {
                                    return <Register 
                                        {...props}
                                    />
                                }
                            }
                        />

                    </Switch>
                </div>
            </div>
            
        </section>
    );
}

export default hot(module)(Genrosys);