import React, { useEffect } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import Filters from "../Filters/Filters";

export default function Section({title,data,filterSource,type}){

    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters,setFilters] = useState([{key:"all" , label :"All"}]);
    const [selectedFilterIndex, setselectedFilterIndex] = useState(0);

    useEffect(() =>{

        if(filterSource){

            filterSource().then((response) =>{
                const {data} = response;
                setFilters([...filters, ...data]);
            })
        }

    },[]);

    const showFilters = filters.length >1 ;

    const cardsToRender = data.filter((card) =>
        showFilters && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key : card
    );


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
            {  console.log("showfilters ", showFilters,filters.length)}
               
             { showFilters && (
                <div className={styles.filterWrapper}>
                <Filters 
                filters ={filters}
                selectedFilterIndex ={selectedFilterIndex}
                setselectedFilterIndex ={setselectedFilterIndex} />
                </div>)
            }
            
            { //card grid section either as flex or carousel
            data.length ===0 ? (<CircularProgress/>
            ) : (
                 <div className={styles.cardWrapper}>
                    {/*!carouselToggle ? ("show expanded view - flex"):(collapsed  -carousel view) */}
                    {!carouselToggle ? (
                        <div className={styles.flexwrapper}>
                            {
                              cardsToRender.map((item) => 
                                ( <Card data={item} type={type} />))
                            }

                        </div>) :
                       
                        (<Carousel data={cardsToRender} renderComponent={(data) => <Card data={data} type={type} />} /> )//calling carousel component with data 
                    } 
                 </div>
                 )                  
             }            
        </div>
 
    
    );   


}