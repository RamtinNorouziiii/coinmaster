import { useEffect, useRef, useState } from "react";
import { PriceTable } from "../../components/priceTable";
import { TrendCoins } from "../../components/trends";
import { MainLayout } from "../../layout/main";

export const LandingPage = () => {
  const [bids, setBids] = useState(["BTC", "ETH", "BNB"]);
	

  const webSocket = useRef(null);

    useEffect(() => {
      //@ts-ignore
     webSocket.current = new WebSocket("wss://ws-api-spot.kucoin.com/?token=2neAiuYvAU61ZDXANAGAsiL4-iAExhsBXZxftpOeh_55i3Ysy2q2LEsEWU64mdzUOPusi34M_wGoSf7iNyEWJ8GbMfTgRv-BhEJEKHLcJvl5YIe01O9cttiYB9J6i9GjsxUuhPw3BlrzazF6ghq4Lzl2Q96eQ55kIhvujtljcwk=.QPvoScDR4ISyBpSrQc4xVQ==");
         //@ts-ignore
        webSocket.current.onmessage = (message:any) => {
           console.log("MESS,message",message)
        };
         //@ts-ignore
        return () => webSocket.current.close();
    }, []);
   






  // const ws = new WebSocket(
  //   "wss://ws-api-spot.kucoin.com/?token=2neAiuYvAU61ZDXANAGAsiL4-iAExhsBXZxftpOeh_55i3Ysy2q2LEsEWU64mdzUOPusi34M_wGoSf7iNyEWJ6XWmIxX_pB4U9PNHfuk59ES1Hof_giLvNiYB9J6i9GjsxUuhPw3BlrzazF6ghq4L5FZGk2OV58gn0Qhv8PONKs=.tgbXKiXv0xm8yw1stBKp2Q=="
  // );

  //   const apiCall ={
  //     "id": 1545910660739,
  //     "type": "subscribe",
  //     "topic": "/market/ticker:BTC-USDT",  //Topic needs to be subscribed. Some topics support to divisional subscribe the informations of multiple trading pairs through ",".
  //     "privateChannel": false,                      //Adopted the private channel or not. Set as false by default.
  //     "response": true                              //Whether the server needs to return the receipt information of this subscription or not. Set as false by default.
  // }

  //   ws.onopen = function (e) {
  //     ws.send(JSON.stringify(apiCall));
  //     console.log("E", e);
  //   };
  //   ws.onmessage = function (event) {
  //     console.log("EVE", JSON.parse(event.data));
  //   };
  //   ws.onclose = function (event) {
  //     console.log("CLOSEEEEEEEEEEEEEEEEEEEE", event);
  //   };

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
  );
};
