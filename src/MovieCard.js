import {Component} from 'react';

class MovieCard extends Component{
    
    
    render(){
        const{movies, addStar,removeStar,addFavorite,handlecart}= this.props;
        const {title,plot,price,rating,star,fav,cart}= this.props.movies;
        return(
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                    <img src={process.env.PUBLIC_URL + '/Avengers.jpg'} alt='Poster' />

                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'> {plot}</div>
                        <div className='price'>Rs. {price}</div>
                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img alt="decrease" className='str-btn' src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={()=>removeStar(movies)}></img>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="Star" className='stars'></img>
                                <img alt="Increase" className='str-btn' src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" onClick={()=>addStar(movies)}></img>
                                <span className='starCount'>{star}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>addFavorite(movies)}>{fav?"Favorites":"Un-Favorite"}</button>
                            <button className={cart?"cart-btn-rem":"cart-btn"} onClick={()=>handlecart(movies)}>{cart?"Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>

                </div>
            </div>
        ) 
    }
}

export default MovieCard;