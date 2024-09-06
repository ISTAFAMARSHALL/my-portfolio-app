'use client'
import { redirect } from 'next/navigation'
import Image from "next/image";

import smartBuyImg from '@/public/images/SmartBuy Screenshot .jpeg'
import stimsimg from '@/public/images/S.T.I.M.S Screenshot .jpeg'
import maybellineImg from '@/public/images/Maybelline Catelog Screenshot.jpeg'
import reservationappImg from '@/public/images/Reservation App Screenshot.jpeg'
import moreThanJustaLunchappImg1 from '@/public/images/More than Just a Lunch IMG 1.png'

export default function ImageClientView () {

    return (
        <div
            className="group justify-center gap-1 " 
            style={{display: 'flex' , flexFlow: 'wrap' , flexDirection: 'row'}}
        >
            <a style={{display: 'block'}} href={'/projects/more-than-just-a-lunch-app'}>
                <Image
                    className="rounded-xl odd:rotate-2 even:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                    src={moreThanJustaLunchappImg1}
                    width={180}
                    height={180}
                    alt="More Than Just a Lunch App"
                    priority
                />
            </a>

            <a style={{display: 'block'}} href={'/projects/smart-buy'}>
                <Image
                    className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                    src={smartBuyImg}
                    width={180}
                    height={180}
                    alt="Smart Buy"
                    priority
                />
            </a>
            
            <a style={{display: 'block'}} href={'/projects/stims'}>
                <Image
                    className="rounded-xl odd:rotate-2 even:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                    src={stimsimg}
                    width={180}
                    height={180}
                    alt="S.T.I.M.S"
                    priority
                />
            </a>

            {/* <a style={{display: 'block'}} href={'/projects/maybelline-catelog-collection'}>
                <Image
                    className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                    src={maybellineImg}
                    width={180}
                    height={180}
                    alt="Maybelline Catelog"
                    priority
                /> 
            </a> */}

            {/* <a style={{display: 'block'}} href={'/projects/reservation-app'}>
                <Image
                    className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
                    src={reservationappImg}
                    width={180}
                    height={180}
                    alt="Reservation App"
                    priority
                />
            </a> */}
      </div>
    )
}