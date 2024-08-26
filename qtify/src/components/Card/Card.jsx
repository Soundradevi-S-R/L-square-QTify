import styles from "./Card.module.css";
import React from "react";
import {Tooltip,Chip} from "@mui/material";
import { Link } from "react-router-dom";


const Card=({data,type})=>{

   

    const getCard = (type) => {        

        switch (type){
            case  'album' : {

                console.log("ALBUM TYPE",type);
                   const {image,title,follows,slug,songs} = data; // removing slug

                    return(

                    <Tooltip title={`${songs.length} Songs`} placement="top" arrow>
                        {/* <Link to={`/album/${slug}`} > */}
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" />
                                    <div className={styles.banner}>
                                    <Chip
                                        label={`${follows} Follows`}
                                        size="small"
                                        className={styles.chip}
                                        style={{ backgroundColor: 'var(--color-black)', color: 'white' }}
                                    />
                                    </div>
                                </div>
                                <div className={styles.titlewrap}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        {/* </Link> */}
                    </Tooltip>
                        
                    );

            }
            case "song" :{
                console.log("SONG TYPE",type);
                const {image,likes,title} = data;
                return(                
                       
                    <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="album" loading='lazy' />
                        <div className={styles.banner}>
                            <div className={styles.pill}>
                                <p>{likes} Likes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.titlewrap}>
                        <p>{title}</p>
                    </div>

                </div>       
                   );
            }
            default :
                return null;

        }// end of swtich
    } //end of the getcard function

    //since the return statement for component are wrapped inside function and switch case. we return explicitly by returning the function call

   return getCard(type);
           

} // end of Card component 
 

 export default Card;

