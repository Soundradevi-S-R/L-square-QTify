import React from "react";
import styles from "./Search.module.css";
//import ReactComponent from "react";
//import { ReactComponent as SearchIcon } from "../../assets/Search-icon.png";
import SearchIcon from "../../assets/Search-icon.png";

function Search({placeholder}){


    const onSubmit =(e)=>{

        e.preventDefault();

        // submission search login goes here

    }
    return (
    
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input required className={styles.searcharea} placeholder={placeholder}/>
            <button className={styles.searchButton}>
              <img src={SearchIcon} alt="search"  type="submit" className={styles.searchicon}/>
            </button>        
        </form>
    );
}
export default Search ;