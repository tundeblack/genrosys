function isAnyEmpty(list)
{
    for (let val of list)
    {
        //console.log("val = " + val);
        if (!val || val.trim() === "")
        {
            throw new Error("Some required fields are still empty.");
        }
    }
}
function setCookie(name, value, path)
{
    if (typeof document == "undefined") return false;
    document.cookie = name + "=" + value + ";path=" + path;
}
function getCookie(name)
{
    if (typeof document == "undefined") return false;

    let cookieVal = "";
    let cookies = document.cookie.replace(/\s+/g, '');

    if (cookies.length > 0)
    {
        cookies = cookies.split(";");
        cookies.forEach(
            (cookie, index) =>
            {
                let c = cookie.split("=");
                if (c[0] == name)
                {
                    cookieVal = c[1];
                }
            } 
        )
    }
    return cookieVal;
}

export { 
    isAnyEmpty,
    getCookie,
    setCookie
};