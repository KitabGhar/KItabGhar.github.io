function renderCart(items) {
  const $cart = document.querySelector(".cart")
  const $total = document.querySelector(".total")
  $cart.innerHTML = items.map((item) => `
          <tr>
              <td>#${item.id}</td>
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td style="width: 60px;">	
                  <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                      onClick="cartLS.quantity(${item.id},1)">+</button>
              </td>
              <td style="width: 60px;">	
                  <button type="button" class="btn btn-block btn-sm btn-outline-primary"
                      onClick="cartLS.quantity(${item.id},-1)">-</button>
              </td>
              <td class="text-right">₹${item.price}</td>
              <td class="text-right"><Button class="btn btn-primary" onClick="cartLS.remove(${item.id})">Delete</Button></td>
          </tr>`).join("")
          console.log(cartLS.total()+30)

          if(cartLS.total()>200){
              $total.innerHTML = "₹" + cartLS.total()+"Free Delivery"}
          else{
              var total1= parseInt(cartLS.total())+30
              console.log(total1)
              
            $total.innerHTML = `₹${total1}  Including Delivery`
          }  

}
renderCart(cartLS.list())
cartLS.onChange(renderCart)

function checkout(){
   var checkTotal=document.getElementById("checkTotal").innerHTML
   if (checkTotal[1]=="0"){
       alert("Cart cannot be empty")
   }
    else{
           location.replace("../ContactFrom_v17/index.html")
       }
   }
