import Benefits from "../components/Benefits/Benefits";
import Cards from "../components/Cards/Cards";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SlideCollab from "../components/Slides/SlideCollab";
import SlideMain from "../components/Slides/SlideMain";

function MainPage() {
  return (
    <>
      <Header />
      <SlideMain />
      <Cards />
      <Benefits />
      <SlideCollab />
      <Contacts />
      <Footer />
    </>
  );
}

export default MainPage;
