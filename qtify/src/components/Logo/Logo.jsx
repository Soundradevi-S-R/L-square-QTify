import React from "react";


import logo from "../../assets/qtify.png";
import styles from "./Logo.module.css"

function Logo(){

    return <img src={logo} alt="qtify"  className={styles.logo}/>    
}
export default Logo;