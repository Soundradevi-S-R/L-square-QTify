import React from "react";
import './App.css';
import Navbar from "../src/components/Navbar/Navbar";

import { Outlet } from "react-router-dom";  
import { useState,useEffect } from 'react';
import {fetchTopAlbums,fetchNewAlbums,fetchSongs} from "./api/api";
import { StyledEngineProvider } from "@mui/material";

function App() {

  const [data,setData] = useState({});

  const generateData=(key,source)=>{
    source().then((data) =>{
      console.log("printing data from generateData >>>", data);
      setData((prevState) => {
        return {...prevState, [key]: data};
      });
    });

  }

  useEffect(()=>{ 

   generateData("topAlbums",fetchTopAlbums);
   generateData("newAlbums",fetchNewAlbums);
   generateData("songs",fetchSongs);

   console.log("complete  useEffect >>>");
  },[]);


  const { topAlbums = [], newAlbums = [], songs =[] } = data; //setting default values to the data inputs to avoid undefined error

  return (

     <StyledEngineProvider> 
      <Navbar/>
      <Outlet context={ {data: {topAlbums, newAlbums, songs} } }/> 
     
      </StyledEngineProvider>
                                             
  );

     
  
}

export default App;
//This outlet children will replace the pages as per the path- default will be homepage 
//this usecontext hook used to share the data across the childrens. 