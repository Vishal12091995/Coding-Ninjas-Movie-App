import { Component } from "react";
import styles from './Navbar.module.css';

class Navbar extends Component{
    
    render(){
        const {cartCount}=this.props;
        return(

            <>
            <div className={styles.Navbar}>
                <div className={styles.leftNav}>
                    Movie-App
                </div>
                <div className={styles.RightNav}>
                    <div className={styles.RightDivChild}>Profile</div>
                    <div className={styles.RightDivChild}>Favorite</div>
                    <div className="cart">
                        <span className="cart_image"><img alt="cart" src="https://cdn-icons-png.flaticon.com/128/9795/9795301.png"></img></span>
                        <span className={styles.CartCount}>{cartCount}</span>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Navbar;

