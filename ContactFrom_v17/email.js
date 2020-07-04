var final=""
var clientEmail="matharooamrit0098@gmail.com"
var clientFinal=""
var orderPlaced="Order Placed"
var newOrder="New Order"

  var first_name= "x";
  var last_name= "x";
  var email= "x";
  var phone= "x";
  var address= "x";
  var state = "x";
  var city= "x";
  var pincode= "x";

  function validator(){
    console.log("inside validator");
    first_name= String(document.getElementById("first-name").value);
    last_name= String(document.getElementById("last-name").value);
    email= String(document.getElementById("email").value);
    phone= String(document.getElementById("phone").value);
    address= String(document.getElementById("address").value);
    state = String(document.getElementById("state").value);
    city= String(document.getElementById("city").value);
    pincode= String(document.getElementById("pincode").value);
    console.log("variable=" ,email);
    if((first_name==="")&&(email==="")&&(phone==="")&&(address==="")&&(state==="")&&(city==="")&&(pincode==="")){
      alert("insufficient details");
    }
    else{
      myFunction(first_name,last_name,email,phone,address,state,city,pincode);
    }
    
  }
function myFunction(first_name,last_name,email,phone,address,state,city,pincode) {

  var order= JSON.parse(localStorage.getItem("__cart"));
    var product="";
  var productIncart="";
  var total=0;
    for( let i=0;i<order.length;i+=1){
    total=total+(order[i].price*order[i].quantity)
        product= "<h2>Name : "+String(order[i].name)+"</h2><h2>Quantity : "+String(order[i].quantity)+"</h2><h2>Price : "+String(order[i].price)+"</h2>";
        productIncart=productIncart+product+"<br></br>";
  }
  productIncart=productIncart+"<h2>Total : "+String(total)+"</h2>"
final="<html><h2>Name : "+first_name+" "+last_name+"</h2><h2>Email : "+email+"</h2><h2>Phone : "+phone+"</h2><h2>Address : "+address+"</h2><h2>State : "+state+"</h2><h2>City : "+city+"</h2><h2>Pin Code : "+pincode+"</h2><br></br><h1>Order Details</h1>"+productIncart+"</html>"
console.log(email);
  clientFinal="<html><h1>Your Order has been placed</h1><h1>Order Details</h1>"+productIncart+"</html>"
  sendEmail(clientEmail,final,newOrder);
  sendEmail(email,final,orderPlaced);
  localStorage.clear()
  // window.location ="https://www.youtube.com/watch?v=XW98nx85FyU";

}

  function sendEmail(x,y,z) {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "matharooamrit0098@gmail.com",
    Password : "grandmax#2846",
    To : x,
    From : "matharooamrit0098@gmail.com",
    Subject : z,
    Body : y,
    }).then(
        message => alert("mail sent successfully")
    );
}
