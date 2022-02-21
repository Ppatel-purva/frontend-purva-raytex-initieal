function form(){  
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
    const auth = {user:"Purva",pass:"Purva"};

    if (auth.user==username && auth.pass==password)
    {
        console.log("Authentication True");
    }
    else{
        console.log("Authentication Fail");
    }
    }  