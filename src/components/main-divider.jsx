import Carousel from "./carousel";
import ProductDescription from "./product-description";
import { useMediaQuery } from "react-responsive";

export default function Main() {

    const is900pxOrBigger = useMediaQuery({ query: '(min-width: 900px)'});

    return (
        is900pxOrBigger
        ?
        <main style={{height: "100vh"}} className="d-flex justify-content-evenly">
            <Carousel/>
            <ProductDescription />
        </main>
        : 
        <main>
            <Carousel/>
            <ProductDescription />
        </main>

    )
}