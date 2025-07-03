'use client'
import TodayDate from "./components/TodayDate";

import Link from 'next/link'

import { useState, useEffect } from "react";

import { FacebookShareButton , TwitterShareButton } from 'react-share';
  const ShareUrl = 'https://quotes.com';
  const title = 'Check out todays quote!';


export default function Home_Page(){
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      const res = await fetch('https://api.quotable.io/random')
      const data = await res.json();
      console.log("Fetched quote:", data);
      setQuote(data.content);
      setAuthor(data.author);
    }
    fetchQuote();
  },[]);

  return(
      
    <div>

      <div className="bg-[#f2f2f2]"> 
        <div className="text-[#52ab98] font-bold font-sans align-center justify-center flex-row flex p-2 pt-4 text-4xl ">
          Basic Quotes
        </div>
        <div className="text-[#2b6777] font-sans align-center justify-center flex text-2xl pb-2">
          Inspirational for Basic People
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#f2f2f2] to-white h-20 items-baseline"></div>
    
      <div>
        <div className="flex flex-row mx-30 h-10 mt-20 items-center justify-between">
          <button onClick={() => window.location.reload()} className="w-1/5 bg-[#f2f2f2] border-2 border-[#2b6777] items-center flex justify-center text-[#2b6777] hover:border-[#52ab98] hover:text-[#52ab98]">Generate Another</button>
          <div className="pr-5 flex text-[#2b6777]"><TodayDate /></div>
        </div>
        <div className="mx-30 h-60 items-center justify-center flex px-15 border-2 border-[#2b6777] bg-[#f2f2f2] flex-col">
              <div className="flex font-sans text-[#2b6777] text-2xl">
                "{quote}"
              </div>
            <div className="w-1/2 py-5 font-sans text-[#52ab98] text-2xl text-right">- {author}</div>
        </div>
      </div>

      <div className="justify-between flex flex-row mx-30 my-2">
          <div className="w-1/5 bg-[#f2f2f2] border-2 border-[#2b6777] items-center flex justify-center text-[#2b6777] hover:border-[#52ab98] hover:text-[#52ab98]">
            <FacebookShareButton className="w-full" url={ShareUrl} quote={title}>Share on Facebook</FacebookShareButton>
          </div>
          <div className="w-1/5 bg-[#f2f2f2] border-2 border-[#2b6777] items-center flex justify-center text-[#2b6777] hover:border-[#52ab98] hover:text-[#52ab98]">
            <TwitterShareButton className="w-full" url={ShareUrl} quote={title}>Share on X</TwitterShareButton>
          </div>
      </div>

    </div>
  );
}