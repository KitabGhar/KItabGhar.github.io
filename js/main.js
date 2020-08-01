function renderCart(items) {
    const $cart = document.querySelector(".cart")
    const $delivery=document.querySelector(".delivery")
    const $total = document.querySelector(".total")
    const $text = document.querySelector(".text")
    
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
              <td class="text-right">₹${item.price*item.quantity}</td>
              <td class="text-right"><Button class="btn btn-primary" onClick="cartLS.remove(${item.id})">Delete</Button></td>
          </tr>`).join("")

    if (cartLS.total() < 200 && cartLS.total() > 0) {
        $text.innerHTML="Delivery Charges"
        $delivery.innerHTML="₹30"
        var total1 = parseInt(cartLS.total()) + 30
        $total.innerHTML = `₹${total1}`
    }
    else if (cartLS.total() >= 200) {
        $text.innerHTML="Delivery Charges"
        $delivery.innerHTML="₹0"
        $total.innerHTML = "₹" + cartLS.total()
    }
    else{
        $text.innerHTML=""
        $delivery.innerHTML=""
        $total.innerHTML = "₹" + cartLS.total()
    }


}
renderCart(cartLS.list())
cartLS.onChange(renderCart)

function checkout() {
    var checkTotal = document.getElementById("checkTotal").innerHTML
    if (checkTotal[1] == "0") {
        alert("Cart cannot be empty")
    }
    else {
        location.replace("../ContactFrom_v17/index.html")
    }
}
