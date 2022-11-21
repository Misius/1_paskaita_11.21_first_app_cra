import './App.css';

import house5 from './house5.jpg';

const card = <h3>Hello</h3>

const card1 = (
  <div className='card'>
        <h4 className='cardTitle'>House 2</h4>
        <img className='cardImg' src='/img/house2.jpg' alt="antras namas" />
      </div>
);

const card2 = (
  <div className='card'>
        <h4 className='cardTitle'>House 5</h4>
        <img className='cardImg' src={house5} alt="penktas namas" />
      </div>
);

function houseGrid = {
  return (
  <div className="grid1">
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
  </div>
  );
  };

function App() {
  const name = 'James';
  return (
    <div className="card">
      <h1 className="">Hello {name} {150 * 30}</h1>
      <h2>{card}</h2>
      <houseGrid />

      <div className="temItem">
        <img src="" alt="" />
      </div>
      
    </div>
  );
}

export default App;
