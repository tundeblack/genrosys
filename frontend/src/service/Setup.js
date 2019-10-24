import axios from "axios";

const axiosInstance = axios.create();
const cancelTokenSource = axios.CancelToken.source();

function callApiEndpoint(endpoint, method, data, successCallback, failedCallback, alwaysCallback)
{
    axiosInstance({
        url: `${endpoint}`,
        method: method,
        data: (data)? data : {},
        responseType: "json",
        cancelToken: cancelTokenSource.token
    })
    .then( 
        (resp) => 
        {
            console.log("Response: ");
            console.log(resp);
            if (resp.data)
            {
                if (resp.data.status == "failed")
                {
                    throw new Error(resp.data.data.message);
                }
               successCallback(resp.data.data);
            }
        }
    )
    .catch(
        (error) =>
        {
            console.log("Error: ");
            console.log(error);

            let errMsg = "";
            if (error) 
            {
                if (axios.isCancel(error))
                {
                    console.log("Request Cancelled. " + error.message);

                } else if (error.response && error.response.data)
                {
                    errMsg = (error.response.data.data != undefined)? 
                                error.response.data.data.message
                                :
                                error.response.data;
                } else 
                {
                    errMsg = error.message;
                }
            }
            if (errMsg != "" && (errMsg.toLowerCase() == "invalid auth token." 
                                    || errMsg.toLocaleLowerCase() == "authentication token has expired.")
            )
            {
                document.write("Authentication token has expired or is invalid.");
                // Logout user and redirect to login page
                //setCookie("i", "", "/");
                //setCookie("t", "", "/");
                //window.location.href = "/";
            }

            failedCallback(new Error(errMsg));
        }
    )
    .then(
        () => {
            if (alwaysCallback) 
            {
                alwaysCallback();
            }
        }
    );
}

function login(authId, password, successCallback, errorCallback, alwaysCallback)
{
    callApiEndpoint(
        "login",
        "post",
        {
            "authId": authId,
            "password": password
        }, 
        successCallback,
        errorCallback, 
        alwaysCallback
    );
}

export { callApiEndpoint, login }