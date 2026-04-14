function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var link = document.getElementById("valid");
    if(email=="123@gmail.com" && password=="12345")
    {
        
       window.location.href ="/page2.html";
       
    }
    
    else
    {
       // alert("Wrong Id or password");
        return;
    }
}
