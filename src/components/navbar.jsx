import { useContext } from "react"
import { generalContext } from "../context/context";
import { useMediaQuery } from "react-responsive"
import Cart from "./cart"


export default function Navbar() {

  const is900pxOrBigger = useMediaQuery({ query: '(min-width: 900px)' });
  let {quantity} = useContext(generalContext);

  return (

    is900pxOrBigger ?

      <div>
        <nav className="navbar ps-2 position-relative" style={{ height: 80 }}>
          <div className="d-flex flex-row align-items-center ps-4">
            <img src="src\assets\images\logo.svg" style={{ height: 20, paddingBottom: 5, marginBottom: 5 }} className="ps-4 pe-5" alt="logo" />

            <div className="d-flex align-items-stretch gap-4">
              <a className="fw-bold nav-btn">Collections</a>
              <a className="fw-bold nav-btn">Men</a>
              <a className="fw-bold nav-btn">Women</a>
              <a className="fw-bold nav-btn">About</a>
              <a className="fw-bold nav-btn">Contact</a>
            </div>


          </div>
          <div className="d-flex nav-icons justify-content-center align-items-center gap-4">

            <div className="dropdown" onClick={event => event.stopPropagation()}>
              <button className="btn cart-button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-cart cart-icon position-relative">
                {quantity !== 0 &&
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    {quantity}
                  </span>
                    }
                </i>
              </button>
              <div style={{ width: 300 }} className="dropdown-menu dropdown-menu-end dropdown-content">

                <h4 className="ps-2 fs-6 fw-bold pt-2 pb-1">Cart</h4>

                <hr className="pb-2 dropdown-divider " />
                <Cart />
              </div>
            </div>

            <img className="profile-pic" src="src\assets\images\image-avatar.png" alt="user profile picture" />
          </div>
        </nav>
      </div>

      :

      <div>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="menu-offcanvas" aria-labelledby="menu-offcanvas">
          <div className="offcanvas-header d-flex flex-column align-items-start ">
            <button type="button" className="btn-close mb-5 pt-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <div className="d-flex flex-column gap-3 nav-items">

              <a className="offcanvas-title nav-link fw-bolder pe-auto fs-5" id="menu-offcanvas">Collections</a>
              <a className="offcanvas-title nav-link fw-bolder pe-auto fs-5" id="menu-offcanvas">Men</a>
              <a className="offcanvas-title nav-link fw-bolder pe-auto fs-5" id="menu-offcanvas">Women</a>
              <a className="offcanvas-title nav-link fw-bolder pe-auto fs-5" id="menu-offcanvas">About</a>
              <a className="offcanvas-title nav-link fw-bolder pe-auto fs-5" id="menu-offcanvas">Contact</a>

            </div>
          </div>
        </div>


        <nav className="navbar ps-2 position-relative" style={{ height: 80 }}>
          <div className="d-flex flex-row ">
            <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#menu-offcanvas" aria-controls="menu-offcanvas">
              <img className="position-absolute img-icon" src="src\assets\images\icon-menu.svg" />
            </button>
            <img src="src\assets\images\logo.svg" className="ps-4" alt="logo" />
          </div>
          <div className="d-flex nav-icons justify-content-center align-items-center gap-4">

            <div className="dropdown" onClick={event => event.stopPropagation()}>

              <button className="btn cart-button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-cart cart-icon position-relative">{quantity !== 0 &&
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    {quantity}
                  </span>
                    }
                </i>

              </button>
              <div style={{ width: 300 }} className="dropdown-menu dropdown-menu-end dropdown-content">

                <h4 className="ps-2 fs-6 fw-bold pt-2 pb-1">Cart</h4>

                <hr className="pb-2 dropdown-divider " />
                <Cart />
              </div>
            </div>

            <img style={{ height: 22, paddingRight: 20 }} className="pe-auto" src="src\assets\images\image-avatar.png" alt="user profile picture" />
          </div>
        </nav>
      </div>
  )
}