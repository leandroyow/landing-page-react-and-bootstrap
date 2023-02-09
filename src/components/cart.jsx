import { useContext } from "react"
import { generalContext } from "../context/context"

export default function Cart() {

  let { quantity, setQuantity, price, setPrice, productTitle } = useContext(generalContext)

  return (
    price > 0 ?

      <div style={{ height: 121 }} className="d-flex flex-column cart-inside justify-content-center gap-2 align-items-center ">
        <div className="d-flex flex-row align-items-center gap-3">
          <img style={{ height: 55 }} className="rounded" src="src\assets\images\image-product-1-thumbnail.jpg" />
          <h5 className="fs-6 title-gray" id="product-name">{productTitle} <span>x {quantity}</span> <span className="fw-bolder bs-black">${price}</span></h5>
          <img style={{ height: 18 }} onClick={() => {
            if (quantity > 0) {
              let currentPrice = document.querySelector("#price").innerHTML;
              setQuantity(quantity - 1);
              setPrice(price - Number(currentPrice));
            }
          }} src="src\assets\images\icon-delete.svg" />
        </div>
        <button style={{ height: 43 }} className="w-100 bg-orange border-0 main-white rounded">Checkout</button>
      </div>

      :

      <div style={{ height: 121 }} className="d-flex flex-column cart-inside justify-content-center gap-2 align-items-center">
        <div className="d-flex flex-row align-items-center gap-3">

          <h6 style={{ color: "#626468" }} className="fw-bold">Your cart is empty</h6>

        </div>
      </div>
  )
}

