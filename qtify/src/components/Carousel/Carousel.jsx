import React, { useEffect } from 'react';

import {Navigation} from "swiper";
import {Swiper,SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import styles from "./Carousal.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";




export default function Carousel({data,renderComponent}){

    //control component to control the carousel , it will take in  data 


    const Controls = ({data}) =>{
        const swiper = useSwiper(); // to control the swiper, useSwiper hooks is used through an object
       
        useEffect(()=>{

            swiper.slideTo(0,1);  //slide the swiper to intial state 

        },[data,swiper]);  // this useEffect loads when data changes

        return <></>  // returns nothing
        };


    return(
            <div className={styles.carouselwrapper}>
                    <Swiper style={{padding :"0px 20px"}}
                            initialSlide={0}
                            modules={[Navigation]}
                            slidesPerView={"auto"}
                            spaceBetween={40}
                            allowTouchMove >
                                <Controls data={data}/> 
                               <CarouselLeftNavigation/>
                               <CarouselRightNavigation/>

                               {
                                data.map((ele,index) => (
                                    <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
                                ))
                               }
                    </Swiper>
            </div>
    );

}