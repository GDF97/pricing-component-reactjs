function Card({ itens }) {
  return (
    <>
      {itens.map((item, index) => (
        <div className="card">
          <p key={index}>{item.name}</p>
          <h1 key={index}>{item.price}</h1>
          <ul className="benefits" key={index}>
            <li>{item.benefits[0]}</li>
            <li>{item.benefits[1]}</li>
            <li>{item.benefits[2]}</li>
          </ul>
          <button className="btnLearn">Learn More</button>
        </div>
      ))}
    </>
  );
}

export default Card;
