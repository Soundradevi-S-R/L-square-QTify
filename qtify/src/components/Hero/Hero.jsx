import React from "react";
import styles from "./Hero.module.css";
import  HeroIcon from "../../assets/vibrating-headphone.png"

function Hero(){

return (
    <div className={styles.herosection} >

        <div className={styles.herodiv}>
            <div>
                <p className={styles.herotext}>100 Thousand Songs, ad-free</p>
                <p className={styles.herotext}>Over thousands podcast episodes</p>
            </div>
            
            <div>    
              <img src={HeroIcon} alt="hero" className={styles.heroimg} />                
            </div>
        </div> 
    </div>
);

}
export default Hero;