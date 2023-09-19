import { Component } from "react";
import MovieCard from "./MovieCard";


class MovieList extends Component{
    
    render(){
        const {movies,addStar, removeStar,addFavorite,handlecart} = this.props;
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           addStar = {addStar}
                           removeStar= {removeStar}
                           addFavorite={addFavorite}
                           handlecart={handlecart} />

            ))}              
            </div>
        )
    }
}
export default MovieList;