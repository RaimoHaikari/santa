import { useState } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Printter from "./components/Printter";
import Footer from "./components/Footer";

import "./App.css";


const options = [
  {
    name: 'Baseline',
    src: 'https://raw.githubusercontent.com/RaimoHaikari/tahtisadetta/main/Misc/9_9_baseline.csv',
    url: 'https://www.kaggle.com/code/ryanholbrook/getting-started-with-santa-2022',
    title: 'Baseline Santa 2022'
  },
  {
    name: 'CRODOC',
    src: 'https://raw.githubusercontent.com/RaimoHaikari/tahtisadetta/main/Misc/submissionCRODOC.csv',
    url: 'https://www.kaggle.com/code/crodoc/82409-improved-baseline-santa-2022',
    title: 'Improved Baseline Santa 2022'
  }
]


/*
const options = [
  {
    name: 'Baseline',
    src: 'https://raw.githubusercontent.com/RaimoHaikari/tahtisadetta/main/Misc/33_33_baseline.csv'
  }
]
*/

const App = () => {

  const [index, setIndex] = useState(0);

  const handleChange = (e) => {

    let val = -1;

    for(let i = 0; i < options.length; i++) {
      if(options[i].src === e.target.value)
        val = i
    }

    setIndex(val)
  }

  return (
    <>
      <Header />

      <main>

        <section>
          <Menu 
            index = { index }
            options = { options }
            changeHandler = { handleChange }
          />
        </section>

        <section className="padding-block-200">
          <Printter 
            moves={options[index].src}
          />
        </section>
      </main>

      <Footer />
    </>
  );

};


export default App;
