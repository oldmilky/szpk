import { useEffect } from "react";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Products from "../components/Product/Products";
import SlideProduct from "../components/Slides/SlideProduct";

function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <Header />
      <SlideProduct />
      <Products />
      <Contacts />
      <Footer />
    </>
  );
}

export default ProductPage;
