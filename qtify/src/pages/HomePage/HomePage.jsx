
import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css";


function HomePage(){

  const{data} = useOutletContext();
  console.log("INSIDE HOME PAGE");
  
  const{ newAlbums,topAlbums} = data;

    return (<>
      <Hero/>
      <div className={styles.wrapper}>
        
       {/* <Section title="Top Albums" data={[]} type="album" />
       <Section title="New Albums" data={[]} type="album" />  */}

      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />

      </div>

    </>);
}
export default HomePage;