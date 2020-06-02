

function validate()
{
  var jname =document.getElementById("fname").value;
  var jlname =document.getElementById("lname").value;
  var jage =document.getElementById("age").value;
  var jemail =document.getElementById("email").value;
  var jcontactno =document.getElementById("contactno").value;
  var jaddress =document.getElementById("address").value;
  var jproject =document.getElementById("project").value;
   var jphoto =document.getElementById("photo").file;
  // var jphotopath=fileInput.value;
  var allowextention=/(\.jpg|\.jpeg)$/i;
  // var jcetificate =document.getElementById("certificate").value;

  if(jname=="" || jname==null )
  {
    document.getElementById("nameError").innerHTML="please enter name";
    return false;
  }
  else
  {
    document.getElementById("nameError").innerHTML="";
  }

  if(jlname=="" || jlname==null )
  {
    document.getElementById("lnameError").innerHTML="please enter last name";
    return false;
  }
  else
  {
    document.getElementById("lnameError").innerHTML="";
  }
  if(jage=="" || jage==null )
  {
    document.getElementById("ageError").innerHTML="please enter age";
    return false;
  }
  else
  {
    document.getElementById("ageError").innerHTML="";
  }

  if(jemail=="" || jemail==null )
  {
    document.getElementById("emailError").innerHTML="please enter email";
    return false;
  }
  else
  {
    document.getElementById("emailError").innerHTML="";
  }

  if(jcontactno=="" || jcontactno==null )
  {
    document.getElementById("contactnoError").innerHTML="please enter contact no";
    return false;
  }
  else
  {
    document.getElementById("contactnoError").innerHTML="";
  }

  if(jaddress=="" || jaddress==null )
  {
    document.getElementById("addressError").innerHTML="please enter address";
    return false;
  }
  else
  {
    document.getElementById("addressError").innerHTML="";
  }

  if(jproject=="" || jproject==null )
  {
    document.getElementById("projectError").innerHTML="please enter something about project";
    return false;
  }
  else
  {
    document.getElementById("projectError").innerHTML="";
  }

  if(jphoto != null)
  {
    if(jphoto == allowextention)
    {

    }
    else
    {
        document.getElementById('photoError').innerHTML="upload photo with jpg,jpeg,png extention";
    }

  }
  else
  {
    document.getElementById('photoError').innerHTML="please upload photo";
    return false;
  }
  // if(jcetificate!=null )
  // {
  //   document.getElementById('certificateError').innerHTML="please upload cetificate";
  //   return false;
  // }
  // else
  // {
  //   document.getElementById('certificateError').innerHTML="";
  // }

return true;
}
