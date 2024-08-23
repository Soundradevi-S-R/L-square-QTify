import React from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

export default function Section({title,data,type}){

    const [carouselToggle, setCarouselToggle] = useState(true);

    //handle toggle to toggle the album section songs collape/showall
    const handleToggle = () =>{
        setCarouselToggle((prevState) => !prevState);
    };

    return (
    
    <div  className={styles.sectiondiv}>
        
           <div className={styles.header}>
            
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse" : "Show all"}</h4>

            </div>
            
            { //card grid section either as flex or carousel
            data.length ===0 ? (<CircularProgress/>
            ) : (
                <div className={styles.cardWrapper}>
                    {/*!carouselToggle ? ("show expanded view - flex"):(collapsed  -carousel view) */}
                    {!carouselToggle ? (
                        <div className={styles.flexwrapper}>
                            {
                              data.map((item) => 
                                ( <Card data={item} type={type} />))
                            }

                        </div>) :
                       
                        (<Carousel data={data} renderComponent={(data) => <Card data={data} type={type} />} /> )//calling carousel component with data 
                    } 
                </div>
                 )                  
             }            
        </div>
 
    
    );   


}