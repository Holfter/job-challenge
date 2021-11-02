import React from "react";
import "./Cards.css";

const Cards = ({ data }) => {
  //Get the average for each item in the array
  const cards = [];
  const options = ["tensao_V", "corrente_A", "potencia_kW", "temperatura_C"];
  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    const list = data.map((item) => item[opt], this);
    const average = list.reduce((a, b) => a + b, 0) / list.length;
    const item = { name: opt, average: average.toFixed(2) };
    cards.push(item);
  }

  return (
    <div className="cards-average">
      <h2 className="cardsTitle">Média do dia</h2>
      <div className="cards">
        {cards.map((item, key) => (
          <div className="average-card" key={key}>
            <img
              className="cardImage"
              src={`${process.env.PUBLIC_URL}/${item.name}.PNG`}
              alt="img"
            />
            <div>
              <p className="cardName">{item.name.toUpperCase()}</p>
              <span className="cardValue">{item.average}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
