// this for nevugation between pages

var signpage = document.getElementById("createAccount");
var loginpage = document.getElementById("login");
var admindiv = document.getElementById("adminPage");
var operationsdiv = document.getElementById("operationsPage");
var salesdiv = document.getElementById("salesPage");



function showSignupForm(){
 
    signpage.classList.toggle('form-hidden'); 
    loginpage.classList.toggle('form-hidden');
   // preventDefault();
}

function showLoginForm(){

 
 signpage.classList.toggle('form-hidden'); 
 loginpage.classList.toggle('form-hidden');
//preventDefault();
}



//form validation for register-form
function validatesignup(){
    // get values of your input fields into a javascript object.
    var signupuname = document.getElementById("uname");
    var email = document.getElementById("email");
    var firstname = document.getElementById("fname");
    var lastname = document.getElementById("lname");
    var signuppassword = document.getElementById("pwd");
    var confirmpassword = document.getElementById("cpwd");
    // var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

        if(signupuname.value.length<3){
        alert("Please Enter correct username!");
                return (false);
                preventDefault();
    }else

    if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)))
        {
            alert("You have entered an invalid email address!");
                return (false);
                preventDefault();
            }else
     if(firstname.value.length<3 || lastname.value.length<3){
            alert("Please enter correct First-Name and Last-Name!");
                return(false);
                preventDefault();
            }else
     if(roles.value.length==null){
            alert("You Have to Chose atleast one Role!");
                return (false);
                preventDefault();
            }else
     // if(password.value.length<5 ){
     //    alert("Please Make Strong Password( must be greater then 5 digit)!");
     //    return (false);
     //    preventDefault();
     // }else
     if(signuppassword.value !== confirmpassword.value) {
        alert("Confirm Password dose not matches with Password!");
        return (false);
        preventDefault();
    }else
        if(signuppassword.value!=confirmpassword.value){
            alert("Confirm password does not matches password!");
            return (false);
    }else{
        signpage.classList.toggle('form-hidden');
        loginpage.classList.toggle('form-hidden');
         }
}
//Storing values of signup form to local storage

 const signUp = e => {

            let formData = {
                // get values of your input fields into a javascript object.
            	uname: document.getElementById('uname').value,
                email: document.getElementById('email').value,
                fname: document.getElementById('fname').value,
				lname: document.getElementById('lname').value,
                roles: document.getElementById('roles').value,
                pwd: document.getElementById('pwd').value,
                cpwd:document.getElementById('cpwd').value

            }
            localStorage.setItem('formData', JSON.stringify(formData));
          console.log(localStorage.getItem('formData'));
             //dispData();

            e.preventDefault();
        }
 
//validating login datiles
function validatelogin(){

let {uname,email,fname, lname,roles,pwd,cpwd} = JSON.parse(localStorage.getItem('formData'));//destructuring
console.log(localStorage.getItem('formData'));
    // stored data from the register-form

     var dt = localStorage.getItem('formData');
            //console.log(dt,"dt");
            var data = JSON.parse(dt);
            //console.log(data,"data");


    var storedUname =data["uname"];
    var storedPassword = data["pwd"];
    var storedRoles = data["roles"];

//to see data is actully coming or not
        //console.log(data["uname"]);
        //console.log(data["pwd"]);
        console.log(data["roles"]);

    var username = document.getElementById("loginUname");
    var password = document.getElementById("loginPwd");

    if(username.value.trim() == "" || password.value.trim() == ""){
        alert("No blank value allowed");
        return false;
        preventDefault();
    }else
    if(username.value != storedUname && password.value !== storedPassword){
        alert("Please Enter Valid Username and Password!")
        return false;
        preventDefault();
    }else{
        alert("Hurry!! You are logged in");
         
        
            if(storedRoles=="admin"){
                    loginpage.classList.toggle('form-hidden');
                     admindiv.classList.toggle('form-hidden');
                     dispAdminData();

                    //preventDefault();
             }else
             if(storedRoles=="operations"){
                 loginpage.classList.toggle('form-hidden');
                     operationsdiv.classList.toggle('form-hidden');
                     dispOperationsData();
                    dispAdminData();
                 //preventDefault();
             }else
             if(storedRoles=="sales"){
                 loginpage.classList.toggle('form-hidden');
                 salesdiv.classList.toggle('form-hidden');
                 dispSalesData();
                 dispAdminData();
                dispOperationsData();
                 //preventDefault();
             } 

    }
}


//admin list of data
        function dispAdminData(){
             //console.log(localStorage.getItem('formData'));
             // for(let i=0; i< localStorage.length; i++){
            let {uname,email,fname, lname, roles, pwd} = JSON.parse(localStorage.getItem('formData'));//destructuring
            // var output = document.getElementById('output');
            // output.innerHTML += `
            // <table>
            //     <tbody>
            //     	<tr>
            //             <td>Username</td>
            //             <td>${uname}</td>
            //         </tr>
            //     	<tr>
            //             <td>Email</td>
            //             <td>${email}</td>
            //         </tr>
            //         <tr>
            //             <td>First Name</td>
            //             <td>${fname}</td>
            //         </tr>
            //         <tr>
            //             <td>Last Name</td>
            //             <td>${lname}</td>
            //         </tr>
            //         <tr>
            //             <td>Roles</td>
            //             <td>${roles}</td>
            //         </tr>
            //         <tr>
            //             <td>Password</td>
            //             <td>${pwd}</td>
            //         </tr>
            //     </tbody>
            // </table>`;
            var atable = document.getElementById("admintable");
            var row = atable.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();
            var cell5 = row.insertCell();
            var cell6 = row.insertCell();
            cell1.innerHTML= `${uname}`;
            cell2.innerHTML= `${email}`;
            cell3.innerHTML=`${fname}`;
            cell4.innerHTML=`${lname}`;
            cell5.innerHTML=`${roles}`;
            cell6.innerHTML=`${pwd}`;

        }
    // }
        dispAdminData();


// operation list of data

        function dispOperationsData(){
             //console.log(localStorage.getItem('formData'));
            let {uname,email,fname, lname, roles, pwd} = JSON.parse(localStorage.getItem('formData'));//destructuring
            var optable = document.getElementById("optable");
            var row = optable.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();
            var cell5 = row.insertCell();
            var cell6 = row.insertCell();
            cell1.innerHTML= `${uname}`;
            cell2.innerHTML= `${email}`;
            cell3.innerHTML=`${fname}`;
            cell4.innerHTML=`${lname}`;
            cell5.innerHTML=`${roles}`;
            cell6.innerHTML=`${pwd}`;
        }
        dispOperationsData();

//sales list of data

function dispSalesData(){
            // console.log(localStorage.getItem('formData'));
            let {uname,email,fname, lname, roles, pwd} = JSON.parse(localStorage.getItem('formData'));//destructuring
            // var salesdata = document.getElementById('salesdata');
            // salesdata.innerHTML = `
            // <table>
            //     <tbody>
            //         <tr>
            //             <td>Email</td>
            //             <td>${email}</td>
            //         </tr>
            //         <tr>
            //             <td>First Name</td>
            //             <td>${fname}</td>
            //         </tr>
            //         <tr>
            //             <td>Last Name</td>
            //             <td>${lname}</td>
            //         </tr>
            //         <tr>
            //             <td>Roles</td>
            //             <td>${roles}</td>
            //         </tr>
            //     </tbody>
            // </table>`;
             var stable = document.getElementById("salestable");
            var row = stable.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();
            var cell5 = row.insertCell();
            var cell6 = row.insertCell();
            cell1.innerHTML= `${uname}`;
            cell2.innerHTML= `${email}`;
            cell3.innerHTML=`${fname}`;
            cell4.innerHTML=`${lname}`;
            cell5.innerHTML=`${roles}`;
            cell6.innerHTML=`${pwd}`;
        }
        dispSalesData();



        function abacktologin(){
            admindiv.classList.toggle('form-hidden');
            loginpage.classList.toggle('form-hidden');
        }
        function opbacktologin(){
                     operationsdiv.classList.toggle('form-hidden');
                     loginpage.classList.toggle('form-hidden');
        }
        function sbacktologin(){
               salesdiv.classList.toggle('form-hidden');
                  loginpage.classList.toggle('form-hidden');
        }