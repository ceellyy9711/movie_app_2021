//terminal에 npm start 제일 먼저 하기
//component is a function that returns HTML

import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  state = {   // 변하는 데이터를 넣을 obj
    count: 0
  };

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

  render(){   //react는 자동으로 class component의 render method를 실행함
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>Minus</button>
     </div>
    );
  }

}

/*const foodILike = [
  {
    id:1,
    name: "gongcha",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.y9Au5C9QL-hlHcVxQ9QalAHaIt%26pid%3DApi&f=1",
    rating:5
  },
  {
    id:2,
    name: "ddeokbokki",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9WwOlUScbbraJhbwex2xzwHaHa%26pid%3DApi&f=1",
    rating:5
  },
  {
    id:3,
    name: "jjajangmyeon",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.e4pD8fMRBMX02wqC8GXUEgHaEK%26pid%3DApi&f=1",
    rating:5
  },
  {
    id:4,
    name: "dakglbi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3JSJ9UbBUS48Ld3tA1_7gHaFj%26pid%3DApi&f=1",
    rating:5
  },
]

function Food({name, picture, rating}){   //object를 열어서 거기서 fav를 꺼내기. props.fav랑 같은 거임. {fav}==props
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {    //예상되는 결과과 실제 결과를 체크해서 오류를 알려줌!
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {    
  return (
  <div>
    {foodILike.map(dish => (    //dish는 obj
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}/>
      ))}
  </div>
  );
}*/

export default App;