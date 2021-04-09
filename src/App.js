//terminal에 npm start 제일 먼저 하기
//component is a function that returns HTML

//import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{
  state={
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false})
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
        ) : (
          <div className = "movies">
            {movies.map(movie => (   //map()을 쓰면 꼭 return해줘야됨
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} />
            ))}
            </div>
        )}
      </section>);
  }
}

/*
class App extends React.Component{
  state = {   // 변하는 데이터를 넣을 obj
    count: 0
  };

  add = () => {
    //setState 할때마다 render()를 state와 함꼐 부름
    this.setState(current => ({count:current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count:this.state.count-1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  render(){   //react는 자동으로 class component의 render method를 실행함
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>Minus</button>
     </div>
    );
  }

}*/

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