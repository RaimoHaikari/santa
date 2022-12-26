import Header from "./components/Header";
import Printter from "./components/Printter";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {

  return (
    <>
      <Header />

      <main>
        <section className="padding-block-200">
          <Printter />
        </section>
      </main>

      <Footer />
    </>
  );

};

export default App;
