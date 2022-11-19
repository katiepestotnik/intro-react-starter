import React from "react";
import Card from './components/Card'
import cardsArr from './cardData'
const cards = cardsArr.map((ele, idx) => {
  return <Card title={ele.title} text={ele.text} img={ele.img} url={ele.url} key={idx} />
})
export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}
