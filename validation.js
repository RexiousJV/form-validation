function vali ()
    {
        let uname = document.forms["valid"]["uname"].value;
        if (uname === "" )
        {
            alert("Username must be filled out");
            return false;
        }

        let pass = document.forms["valid"]["pass"].value;
        if (pass === "" )
        {
            alert("Password must be filled out");
            return false;
        }

        let email = document.forms["valid"]["email"].value;
        if (email === "" )
        {
            alert("Email must be filled out");
            return false;
        }
    }
