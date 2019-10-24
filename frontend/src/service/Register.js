import "./Setup.js";
import { callApiEndpoint } from "./Setup.js";

function registerCompany(name, address, successCallback, errCallback, alwaysCallback)
{
    callApiEndpoint(
        "http://lightupsoftware.com.ng/test-env/genrosys/genrosys/backend/index.php/api/registerCompany",
        //"http://localhost/webprojects/practices/genrosys/backend/index.php/api/registerCompany",
        "POST",
        {
            name,
            address
        },
        successCallback,
        errCallback,
        alwaysCallback
    );
}

function registerEmployee(companyId, firstname, lastname, photo, successCallback, errCallback, alwaysCallback)
{
    callApiEndpoint(
        "http://lightupsoftware.com.ng/test-env/genrosys/genrosys/backend/index.php/api/registerEmployee",
        //"http://localhost/webprojects/practices/genrosys/backend/index.php/api/registerEmployee",
        "POST",
        {
            companyId,
            firstName: firstname,
            lastName: lastname,
            photo
        },
        successCallback,
        errCallback,
        alwaysCallback
    );
}


export {
    registerCompany,
    registerEmployee
}