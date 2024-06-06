import React, { useState, useEffect } from "react";

const Stories = () => {
    let isLoading =true;
    const API = "http://hn.algolia.com/api/v1/search?query=HTML";

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const Data= await res.json();
            console.log(Data)
           
        }   catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchApiData(API);
    }, []);
     if(isLoading){
        <>
      <h1>Loading...</h1>
     </>
     }
    return (
        <>
            <h2>Welcome to my page</h2>
            
        </>
    );
};

export default Stories;

