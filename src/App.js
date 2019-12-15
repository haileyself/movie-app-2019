import React from 'react';
import PropTypes from 'prop-types';

const FoodIlike = [
  {
    id: 1,
    name: "pizza",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1614&q=80",
    rating: 3.5
  },
  {
    id: 2,
    name: "chicken",
    img: "https://images.unsplash.com/photo-1575932444877-5106bee2a599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    rating: 4.5
  },
  {
    id: 3,
    name: "ice-cream",
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 4
   }
]

function Food({name, img, rating}) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>rating: {rating}/5</h4>
      <img src={img} alt={name} style={{width: 320}}/>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
  <div>
    {FoodIlike.map( el => 
      <Food key={el.id} name={el.name} img={el.img} rating={el.rating}/>
    )}
  </div> 
  );
};

export default App;
