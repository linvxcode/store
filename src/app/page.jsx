"use client";

import FetcData from "@/common/lib/FetchData";
import About from "@/common/module/About/About";
import Hero from "@/common/module/Hero/Hero";
import { useQuery } from "react-query";



export default function Home() {
  // const { data, error, isLoading } = useQuery('products', () => FetcData('https://fakestoreapi.com/products'));

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
// console.log(data)
  return (
  <div className="w-full flex flex-col justify-center relative ">
    <Hero />
    <About />
  </div>
  );
}
