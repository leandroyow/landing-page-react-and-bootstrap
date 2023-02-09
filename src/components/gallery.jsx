import { useMediaQuery } from "react-responsive";

export default function Gallery({ count, setCount }) {
  const is900pxOrBigger = useMediaQuery({ query: "(min-width: 900px)" });

  if (is900pxOrBigger) {
    return (
      <div className="d-flex flex-row justify-content-between mt-3">
        <img
          src="src\assets\images\image-product-1-thumbnail.jpg"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => setCount((count = 1))}
          className="rounded galleryImg"
          style={{ width: 80, height: 80 }}
        />
        <img
          src="src\assets\images\image-product-2-thumbnail.jpg"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => setCount((count = 2))}
          className="rounded galleryImg"
          style={{ width: 80, height: 80 }}
        />
        <img
          src="src\assets\images\image-product-3-thumbnail.jpg"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => setCount((count = 3))}
          className="rounded galleryImg"
          style={{ width: 80, height: 80 }}
        />
        <img
          src="src\assets\images\image-product-4-thumbnail.jpg"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => setCount((count = 4))}
          className="rounded galleryImg"
          style={{ width: 80, height: 80 }}
        />
      </div>
    );
  }
}
