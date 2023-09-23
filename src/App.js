import React from 'react';
import MovieList from './MovieList';
import Navbar from './Navbar';
import {movies} from './moviesData';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount:0        
    }
}
handleaddStar=(movie)=>{
    const {movies}= this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].star<5){
        movies[mid].star+=0.5;
    }
    this.setState({
        movies
    })  
}
handleDecStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].star > 0){
        movies[movieId].star -= 0.5;
    }

    this.setState({
        movies
    })
 
  }
  handleAddFavorite=(movie)=>{
    const {movies,cartCount} = this.state;
    const mid= movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav;
    this.setState({
        movies,
        cartCount
    })
    
  }
  handleAddCart=(movie)=>{
    let {movies,cartCount} = this.state;
    const mid= movies.indexOf(movie);
    console.log(movies[mid].cart);
    movies[mid].cart= !movies[mid].cart;
    if(movies[mid].cart){
      cartCount=cartCount+1;
    }else{
      cartCount=cartCount-1;
    }
    this.setState({
        movies,
        cartCount,
    })
  }
  render(){
    const {movies,cartCount}= this.state;
    return (
      <>
        <Navbar cartCount={cartCount}></Navbar>
        <MovieList movies = {movies}   
                    addStar = {this.handleaddStar}
                    removeStar= {this.handleDecStars}
                    addFavorite={this.handleAddFavorite}
                    handlecart={ this.handleAddCart} />    
      </>
    )
  }
}

export default App;
