import { GlobalStyle } from "./assets/styles/Global";
import { Accessories } from "./components/Accessories";
import { Banner } from "./components/Banner";
import { Celebrate } from "./components/Celebrate";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Accessories />
      <Celebrate />
      <Footer />
    </>
  );
}

export default App;
