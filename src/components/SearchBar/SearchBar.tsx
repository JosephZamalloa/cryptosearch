import React, { useState } from "react";
import { getCoinService } from "../../services/GetCoinService";
import { useEffect } from "react";
const searchBar = () => {

 const [getList,setGetList]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
      const res = await getCoinService();
       setGetList(res)
        
      } catch (error) {
        console.log("mal");
      }
    };
    fetchData();
    
    
  }, []);
  const listCoins = getList.map((coin: any,index:number) => (
    <li key={index}>{coin.id}</li>
  ));
  return (
    <div>
      <input type="text" placeholder="Put the cryptoname" />
      <ul>{listCoins}</ul>
    </div>
  );
};

export default searchBar;
