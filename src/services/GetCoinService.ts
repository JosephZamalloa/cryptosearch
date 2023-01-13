export const getCoinService = async ()=>{
    try
    {const request=await fetch("https://api.coingecko.com/api/v3/coins/list")
    const data = await request.json()
    
    return data;
}catch{
    console.log("error we")
}
}