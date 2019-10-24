import "./Setup.js";
import { callApiEndpoint } from "./Setup.js";

function fetchEmployees(name, successCallback, errCallback, alwaysCallback)
{
    callApiEndpoint(
        "http://lightupsoftware.com.ng/test-env/genrosys/genrosys/backend/index.php/api/getEmployees",
        //"http://localhost/webprojects/practices/genrosys/backend/index.php/api/getEmployees",
        "POST",
        {
            name
        },
        successCallback,
        errCallback,
        alwaysCallback
    );
}

function fetchCompanies(successCallback, errCallback, alwaysCallback)
{
    callApiEndpoint(
        "http://lightupsoftware.com.ng/test-env/genrosys/genrosys/backend/index.php/api/getCompanies",
        //"http://localhost/webprojects/practices/genrosys/backend/index.php/api/getCompanies",
        "POST",
        {},
        successCallback,
        errCallback,
        alwaysCallback
    );
}

export {
    fetchCompanies,
    fetchEmployees
}