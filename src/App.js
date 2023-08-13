import "./App.css";
import bgBottom from "./assets/images/bg-bottom.svg";
import bgTop from "./assets/images/bg-top.svg";
import Card from "./components/Card.js";
import { useState } from "react";

function App() {
  const [button, setButton] = useState();

  const planAnnualy = [
    {
      id: 1,
      name: "Basic",
      price: "$199.99",
      benefits: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      id: 2,
      name: "Professional",
      price: "$249.99",
      benefits: ["1TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      id: 3,
      name: "Master",
      price: "$399.99",
      benefits: ["2TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  const planMonthly = [
    {
      id: 1,
      name: "Basic",
      price: "$19.99",
      benefits: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      id: 2,
      name: "Professional",
      price: "$24.99",
      benefits: ["1TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      id: 3,
      name: "Master",
      price: "$39.99",
      benefits: ["2TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <div className="App">
      <img src={bgBottom} alt="bgBottom" className="bgBottom" />
      <img src={bgTop} alt="bgTop" className="bgTop" />
      <h1> Our Pricing</h1>
      <div className="button-wrapper">
        <p>Annualy</p>
        <div
          className="button-toggle"
          onClick={(e) => setButton(e.target.classList.toggle("active"))}
        >
          <label className="toggle-label"></label>
        </div>
        <p>Monthly</p>
      </div>
      <div className="card-wrapper">
        {button && <Card itens={planMonthly} />}
        {!button && <Card itens={planAnnualy} />}
      </div>
    </div>
  );
}

export default App;
