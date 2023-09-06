import {Component} from 'react';

class MovieCard extends Component{
    constructor(){
        super();
        this.state={
            title:"The Avengers",
            plot:"Supernatural Powers shown in the movie",
            price:199,
            rating:8.9,
            star:0,
            fav:false,
            cart:false
        }
    }
    handlecart = ()=>{
        this.setState({
            cart:!this.state.cart
        })
    }
    removeStar=()=>{
        if(this.state.star <=0){
            return
        }
        this.setState((prevState)=>{
            return {
                star: prevState.star-0.5
            }
        })
    }
    addStar=()=>{
        if(this.state.star>=5){
            return
        }
        this.setState((prevState)=>{
            return{
                star: prevState.star+0.5

            }
        })
    }
    addFavorite=()=>{
        this.setState({
            fav:!this.state.fav
        })
    }
    render(){
        const {title,plot,price,rating,star,fav,cart}= this.state;
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
                                <img alt="decrease" className='str-btn' src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={this.removeStar}></img>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="Star" className='stars'></img>
                                <img alt="Increase" className='str-btn' src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" onClick={this.addStar}></img>
                                <span className='starCount'>{star}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.addFavorite}>{fav?"Favorites":"Un-Favorite"}</button>
                            <button className={cart?"cart-btn-rem":"cart-btn"} onClick={this.handlecart}>{cart?"Remove from cart":"Add to cart"}</button>
                        </div>

                    </div>

                </div>
            </div>
        ) 
    }
}

export default MovieCard;