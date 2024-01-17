"use client";

import BottomNavbar from "@/component/BottomNavbar";
import Navbar from "@/component/Navbar";
import perkotaan from "@/../public/image/perkotaan.jpg";
import hill from "@/../public/image/hill.jpg";
import pantai from "@/../public/image/beach.jpg";
import villa from "@/../public/image/villa.jpg";
import pedesaan from "@/../public/image/village.jpg";
import airTerjun from "@/../public/image/waterfall.jpg";
import papua from "@/../public/image/papua.jpg";
import papuaGunung from "@/../public/image/papuapegunungan.jpg";
import sulawesi from "@/../public/image/sulawesi.jpg";
import bali from "@/../public/image/bali.jpg";

import awan from "@/../public/image/awan.jpg";
import React, { useEffect, useState } from "react";
import CardHome from "@/component/CardHome";
import CardCategories from "@/component/CardCategories";
import Form from "@/component/Form";
import ButtonHome from "@/component/ButtonHome";
import Image from "next/image";
import bgWelcome from "@/../public/image/bg-welcome.svg";
import { getDestination } from "@/axios/admin";
import Footer from "@/component/Footer";

export default function Home() {
    // const [destinations, setDestinations] = useState([]);
    // useEffect(() => {
    //     getDestination().then((res) => {
    //         // console.log(res.data);
    //         setDestinations(res.data);
    //     });
    // }, []);

    // console.log(destinations);
    return (
        <div className='bg-[#DDF2FD '>
            <Navbar />
            {/* welcome start */}
            <section className='flex flex-col gap-y-6 bg-welcome bg-no-repeat px-5 pb-14 pt-[120px] md:flex-row md:items-center md:justify-between md:gap-y-0 xl:justify-center'>
                {/* left start */}
                <div className='flex w-full flex-col gap-y-4 text-white md:w-[50%]'>
                    <h1 className='text-[27px] font-bold md:text-[30px] xl:text-[50px]'>Welcome to NusaGO</h1>
                    <p className='md:text-[14px] xl:text-[16px]'>Purchase tickets for your favorite tourist attractions</p>
                    <div className='flex w-full flex-col gap-y-3'>
                        <input
                            type='text'
                            placeholder='Search for destination'
                            className='box-border w-full rounded-md p-3 text-black outline-none md:w-[80%] md:text-[14px] xl:w-[60%] xl:text-[16px]'
                        />
                        <div className='flex gap-x-4'>
                            <ButtonHome>Search</ButtonHome>
                            <ButtonHome>Explore</ButtonHome>
                        </div>
                    </div>
                </div>
                {/* left end  */}
                {/* right start  */}
                <div>
                    <div className='h-[200px] w-full  md:h-[210px] md:w-[360px] xl:h-[400px] xl:w-[520px]'>
                        <Image src={papuaGunung} alt='' className='h-full w-full rounded-md' />
                    </div>
                </div>
                {/* right end  */}
            </section>
            {/* welcome end  */}

            {/* recommendation start */}
            <section className='flex flex-col gap-y-9 px-5 pb-14 pt-28 text-black xl:px-14'>
                <h1 className='text-center text-[27px] font-bold md:text-[30px] xl:text-[32px] '>Recommendation Destination</h1>
                <div className='flex flex-col items-center justify-center gap-y-8 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-0 xl:gap-x-9'>
                    {/* {destinations
                        ? destinations.map((item) => <CardHome key={item.name} text={item.name} src={item.image} />)
                        : "Loading..."} */}
                    <CardHome text={"Papua"} src={papua} />
                    <CardHome text={"Sulawesi"} src={sulawesi} />
                    <CardHome text={"Bali"} src={bali} />
                </div>
            </section>
            {/* recommendation end  */}
            {/* destination categories start */}
            <section className='flex flex-col gap-y-7 px-5 pb-14 pt-12 text-black xl:px-14'>
                <div className='flex flex-col items-center gap-y-3'>
                    <h1 className='text-center text-[27px] font-bold md:text-[30px] xl:text-[32px] '>Destination Categories</h1>
                    <p className='text-base font-semibold'>Check out our top tourist destination</p>
                </div>
                {/* container card start */}
                <div className='flex w-full flex-col gap-y-9 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-6 md:gap-y-12 xl:gap-x-9'>
                    <CardCategories src={perkotaan} categories={"Perkotaan"} />
                    <CardCategories src={pedesaan} categories={"Pedesaan"} />
                    <CardCategories src={villa} categories={"Villa"} />
                    <CardCategories src={hill} categories={"Pegunungan"} />
                    <CardCategories src={pantai} categories={"Pantai"} />
                    <CardCategories src={airTerjun} categories={"Air Terjun"} />
                </div>
                {/* container card end  */}
            </section>
            {/* destination categories end  */}
            {/* footer start */}
            <section className={"px-5 pb-14 pt-12 md:pb-20 xl:px-14"}>
                <div className='mb-7 flex flex-col items-center gap-y-6'>
                    <h1 className='text-center text-[27px] font-bold md:text-[30px] xl:text-[32px]'>Contact Us</h1>
                    <p className='text-base font-semibold'>Send us your inqueries</p>
                </div>
                {/* container form and image start */}
                <div className='md:mx-auto md:w-[70%] xl:flex xl:w-full xl:items-center xl:justify-evenly'>
                    {/* form start */}
                    <div className='xl:w-[520px]'>
                        <Form />
                    </div>
                    {/* form end  */}
                    {/* image start */}
                    <div>
                        <div className='relative hidden h-96 w-[520px] xl:block '>
                            <Image src={bgWelcome} alt='BG' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                    {/* image end */}
                </div>
                {/* container form and image end */}
            </section>
            {/* footer end  */}
            <BottomNavbar />
            <Footer />
        </div>
    );
}
