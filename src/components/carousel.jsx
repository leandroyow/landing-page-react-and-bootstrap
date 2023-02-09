import { useState, useEffect } from "react";
import Gallery from "./gallery";
import { useMediaQuery } from "react-responsive";

export default function Carousel() {

  let [count, setCount] = useState(1)
  const [width, setWindowWidth] = useState(0)



  useEffect(() => {

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);

  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  const is900pxOrSmaller = useMediaQuery({ query: "max-width:900px" });
  const imgCarouselStyle = { width: is900pxOrSmaller ? 420 : "100%", height: 406 };
  const imgCarouselClass = width <= 900 ? "d-block" : "d-block rounded";
  const wrapperCarouselStyle = { height: width <= 900 ? 506 : "100%" };

  return (

    <div style={wrapperCarouselStyle} id="carousel-wrapper">

      <div id="carouselGallery" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={imgCarouselStyle} src="src\assets\images\image-product-1.jpg" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setCount(count = 1)} className={imgCarouselClass} alt="shoes from the side" />
          </div>
          <div className="carousel-item">
            <img style={imgCarouselStyle} src="src\assets\images\image-product-2.jpg" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setCount(count = 2)} className={imgCarouselClass} alt="shoes front and back" />
          </div>
          <div className="carousel-item">
            <img style={imgCarouselStyle} src="src\assets\images\image-product-3.jpg" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setCount(count = 3)} className={imgCarouselClass} alt="single shoe in semi-side angle" />
          </div>
          <div className="carousel-item">
            <img style={imgCarouselStyle} src="src\assets\images\image-product-4.jpg" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setCount(count = 4)} className={imgCarouselClass} alt="single shoe in semi-side angle" />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
          <img className="icon-carousel" src="src\assets\images\icon-previous.svg" alt="previous image" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
          <img className="icon-carousel" src="src\assets\images\icon-next.svg" alt="next image" />
        </button>
      </div>

      {<Gallery count={count} setCount={setCount} />}

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content position-relative">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <button onClick={() => {
              let imageModal = document.querySelector("#image-inside-modal");
              if (count >= 2) { imageModal.src = `src/assets/images/image-product-${setCount(count - 1)}.jpg` }
            }} style={{ height: 46, width: 40, position: "absolute", top: "42%", marginLeft: 11 }} className="carousel-control-prev" type="button">
              <img className="icon-carousel-modal" src="src\assets\images\icon-previous.svg" alt="previous image" />
            </button>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} id="modal-product" >

              <img id="image-inside-modal" className="w-100 rounded" src={"src/assets/images/image-product-" + count + ".jpg"} alt="image inside modal" />
              {width > 900 &&

                <div style={{ width: "90%", }} className=" text-center d-flex flex-row justify-content-evenly mt-3">
                  <img src="src\assets\images\image-product-1-thumbnail.jpg" onClick={() => {
                    if (count !== 1) {
                      let imageModal = document.querySelector("#image-inside-modal");
                      imageModal.src = `src/assets/images/image-product-${setCount(count = 1)}.jpg`
                    }
                  }} className="rounded galleryImg" style={{ width: 80, height: 80 }} />

                  <img src="src\assets\images\image-product-2-thumbnail.jpg" onClick={() => {
                    if (count !== 2) {
                      let imageModal = document.querySelector("#image-inside-modal");
                      imageModal.src = `src/assets/images/image-product-${setCount(count = 2)}.jpg`
                    }
                  }} className="rounded galleryImg" style={{ width: 80, height: 80 }} />

                  <img src="src\assets\images\image-product-3-thumbnail.jpg" onClick={() => {
                    if (count !== 3) {
                      let imageModal = document.querySelector("#image-inside-modal");
                      imageModal.src = `src/assets/images/image-product-${setCount(count = 3)}.jpg`
                    }
                  }} className="rounded galleryImg" style={{ width: 80, height: 80 }} />

                  <img src="src\assets\images\image-product-4-thumbnail.jpg" onClick={() => {
                    if (count !== 4) {
                      let imageModal = document.querySelector("#image-inside-modal");
                      imageModal.src = `src/assets/images/image-product-${setCount(count = 4)}.jpg`
                    }
                  }} className="rounded galleryImg" style={{ width: 80, height: 80 }} />
                </div>
              }
            </div>

            <button onClick={() => {
              let imageModal = document.querySelector("#image-inside-modal");
              if (count <= 3) { imageModal.src = `src/assets/images/image-product-${setCount(count + 1)}.jpg` }
            }} style={{ height: 46, width: 40, position: "absolute", top: "42%", marginRight: 11 }} className="carousel-control-next" type="button" >
              <img className="icon-carousel" src="src\assets\images\icon-next.svg" alt="next image" />
            </button>



          </div>
        </div>
      </div>
    </div>
  )


}