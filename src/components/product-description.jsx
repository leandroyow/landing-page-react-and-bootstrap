import { useContext } from "react"
import { generalContext } from "../context/context"
import { useMediaQuery } from "react-responsive"

export default function ProductDescription() {

    let { count, setCount, quantity, setQuantity, price, setPrice, productTitle, setTitle } = useContext(generalContext)

    const is900pxOrSmaller = useMediaQuery({ query: '(max-width: 900px)' });

    const wrapperStyle = { maxWidth: is900pxOrSmaller ? "100%" : 506, height: 411 }

    return (
        <div style={wrapperStyle} id="product-description-wrapper" className="w-100 ps-4 pe-1 d-flex row pb-5">
            <h3 className="bs-orange product-company mb-3">SNEAKER COMPANY</h3>
            <h1 className="fw-bold fs-2 mb-4" id="title">Fall Limited Edition Sneakers</h1>
            <p className="medium-gray mb-4">These low-profile sneakers are your perfect
                casual wear companion. Featuring a durable
                rubber outer sole. they-II withstand everything
                the weather can offer.</p>

            <div style={{ height: 50 }} className="d-flex gap-3 justify-content-between mb-2">
                <section className="align-items-center price d-flex gap-3 position-relative align-middle" style={{ height: 30 }}>
                    <p style={{ fontSize: 25 }} className="fw-bold">$
                        <span id="price" className="fw-bold">{125}</span>.00</p>
                    <p className="fw-bold rounded bs-orange promotion">50%</p>
                </section>


                <div>
                    <h1 className="text-muted text-decoration-line-through" style={{ fontSize: 25 }}> $250</h1>
                </div>

            </div>
            <div className="clearfix text-center position-relative ">
                <img src="src\assets\images\icon-minus.svg" onClick={() => { if (count > 0) { setCount(count - 1) } }} className="position-absolute minus-icon" />
                <img src="src\assets\images\icon-plus.svg" onClick={() => setCount(count + 1)} className="position-absolute plus-icon" />
                <input readOnly={true} type="number" min={0} value={count} className="w-100 input-quantity light-gray fw-bold rounded" />
                <button style={{ height: 41 }} onClick={() => {
                    let currentPrice = document.querySelector("#price").innerHTML;
                    let currentTitle = document.querySelector("#title").innerHTML;
                    setQuantity(quantity = quantity + count);
                    if (quantity > 0) { setPrice(price = quantity * Number(currentPrice)) };
                    setCount(count * 0);
                    if (count > 0) { setTitle(productTitle = currentTitle) }
                    if (quantity == 0) { setTitle(title = "title") }

                }
                } className="btn btn-cart bg-orange main-white w-100 text-center d-flex
                     align-items-center mb-3 justify-content-center gap-3">
                    <img style={{ height: 20, marginRight: -9 }} src="src\assets\images\shoping-cart.png" alt="cart icon" />
                    Add to cart
                </button>
            </div>

        </div>
    )
}