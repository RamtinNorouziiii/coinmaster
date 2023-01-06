import { useEffect, useState } from "react";
import { PriceTable } from "../../components/priceTable"
import { TrendCoins } from "../../components/trends"
import { MainLayout } from "../../layout/main"

export const LandingPage = () => {
  const [bids, setBids] = useState(["BTC","ETH","BNB"]);

//    const ws = new WebSocket("wss://ws-api-spot.kucoin.com/?token=2neAiuYvAU61ZDXANAGAsiL4-iAExhsBXZxftpOeh_55i3Ysy2q2LEsEWU64mdzUOPusi34M_wGoSf7iNyEWJ5uU4UURfwgS9jKtqkdWoFYuie3h_onUyNiYB9J6i9GjsxUuhPw3BlrzazF6ghq4L_Cn00gn7BsjXsb1g6ChgeQ=.VMIF22W8gJKwOf4J9Hmjvg==");
//     const apiCall = {
      
      
//         "id": 1545910660739,                          //The id should be an unique value
//         "type": "subscribe",
//       //  "topic": `/market/ticker:${bids.map((res,index)=>{return res+`-USDT`})}`,  //Topic needs to be subscribed. Some topics support to divisional subscribe the informations of multiple trading pairs through ",".
//       "topic": "/quicksilver/symbol-market:ETH",
//         "privateChannel": false,                      //Adopted the private channel or not. Set as false by default.
//         "response": true                              //Whether the server needs to return the receipt information of this subscription or not. Set as false by default.
    
//   };
 
//    ws.onopen=function(e){
//     ws.send(JSON.stringify(apiCall));
// console.log("E",e)
//    }
// ws.onmessage=function(event){
// console.log("EVE",JSON.parse(event.data))
// }
//   // const apiCall = {
//   //   event: "bts:subscribe",
//   //   data: { channel: "live_orders_btcusd" },
//   // };

//   // ws.onopen = (event) => {
//   //   ws.send(JSON.stringify(apiCall));
//   // };

//   // ws.onmessage = function (event) {
//   //   const json = JSON.parse(event.data);
//   //   console.log(json.data)
//   //   try {
//   //     if ((json.event = "data")) {
//   //       setBids(json.data.price);
//   //     }
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };
//   //map the first 5 bids
//   // const firstBids = bids.map((item) => {
//   //   return (
//   //     <div>
//   //       <p> {item}</p>
//   //     </div>
//   //   );
//   // });



const ws = new WebSocket("wss://ws.coinapi.io/v1/")

const apiCall={
  
//   "type": "book",
//   "apikey": "20441B27-55A2-40E2-921D-5689BD050A47",

//  // "subscribe_data_type": ["quote"],
//   "subscribe_filter_asset_id": ["BTC/USD"]
"type": "exrate",
  "asset_id_base": "BTC",
  "asset_id_quote": "USD",  
  "time": "2019-06-11T15:26:00.0000000Z",
  "rate": 10065.0319541
  
}
   ws.onopen=function(e){
    ws.send(JSON.stringify(apiCall));
console.log("E",e)
   }
ws.onmessage=function(event){
console.log("EVE",JSON.parse(event.data))
}















  return (
   <> {bids}</>
//     <MainLayout>
//       <div className="my-3 p-5" >

//         <p className="text-xl" > Today's Cryptocurrency Prices by Market Cap</p>
//         <div className="mr-5 grid grid-cols-1 lg:grid-cols-3   ">
//         <ul className="bg-white rounded-lg w-96 text-gray-900 border border-sky-500 my-3">
//     <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg  font-semibold"><img alt="TrendingIcon" width="20px" className="inline" src="/assets/TrendingIcon.png" /> Trending </li>
//      <TrendCoins />
//     </ul>
         
//     <ul className="bg-white rounded-lg w-96 text-gray-900 border border-sky-500 my-3">
//     <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg font-bold "><img alt="TrendingIcon" width="20px" className="inline" src="/assets/AddIcon.png" /> Recently Added </li>
//      <TrendCoins />
//     </ul>
//     <ul className="bg-white rounded-lg w-96 text-gray-900 border border-sky-500 my-3">
//     <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg "><img alt="TrendingIcon" width="20px" className="inline" src="/assets/TrendingIcon.png" /> An Item </li>
//      <TrendCoins />
//     </ul>
//         </div>

// <PriceTable />
//       </div>
//     </MainLayout>
    
    )
}