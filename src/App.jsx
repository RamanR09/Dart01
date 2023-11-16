import {
  Loader,
  Services,
  Footer,
  Transection,
  Welcome,
  Navbar,
} from "./Componenets";

import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => setCounter(() => count * 2), [count]);
  const handleClick = () => {
    setCount(() => count + 1);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="  bg-gradient-to-r from-orange-600 via-red-500 to-red-600 ...   hover:bg-gradient-to-l">
        {/* <Header /> */}
        <Navbar />
        {/* <Welcome /> */}
      </div>
      <div className="bg-[#0b0212]">
        <Welcome />
        {/* <Welcome />
        <Welcome /> */}
        <Services />
        <Transection />
        <Footer />
      </div>
      <h1> {count}</h1>
      <button onClick={handleClick}> + </button>
      <h1> {counter}</h1>
    </div>
  );
};

export default App;
