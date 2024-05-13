
import Products from "./components/Products";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-wrap gap-5">
      <Header input={input} setInput={setInput}/>
      <Products input={input} />
    </div>
  );
};

export default App;
