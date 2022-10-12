//Assignemt 02: Create a HTML Form
//1.firstname,2.Middlename,3.lastname,4.email,5.password
//Deploy it in Netlify
//Already The elements are there in HTML ,How to use them for accessing
//1.document.getElementById();
//This method is used to extract the unique element using id attribute
//it returns the Single HTML element

function foo(){

   

    var res01=document.getElementById("fname").value;
    var res02=document.getElementById("mname").value;
    var res03=document.getElementById("lname").value;
    var res04=document.getElementById("email").value;
    var res05=document.getElementById("pass").value;
     console.log(res01,res02,res03,res04,res05);
}