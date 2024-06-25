
'use client';

import classes from './image-slideshow.module.css';

import { useEffect, useState } from 'react';

import Image from 'next/image'

import maybellineImg1 from '@/public/images/Maybelline Catelog Screenshot.jpeg'
import maybellineImg2 from '@/public/images/Maybelline Catelog Screenshot 2.png'
import maybellineImg3 from '@/public/images/Maybelline Catelog Screenshot 3.png'
import maybellineImg4 from '@/public/images/Maybelline Catelog Screenshot 4.png'
import maybellineImg5 from '@/public/images/Maybelline Catelog Screenshot 5.png'

import reservationImg1 from '@/public/images/Reservation App Screenshot.jpeg'
import reservationImg2 from '@/public/images/Reservation App Screenshot 2.jpeg'
import reservationImg3 from '@/public/images/Reservation App Screenshot 3.png'
import reservationImg4 from '@/public/images/Reservation App Screenshot 4.png'
import reservationImg5 from '@/public/images/Reservation App Screenshot 5.png'

import stimsImg1 from '@/public/images/S.T.I.M.S Screenshot .jpeg'
import stimsImg2 from '@/public/images/S.T.I.M.S Screenshot 2.png'
import stimsImg3 from '@/public/images/S.T.I.M.S Screenshot 3.png'
import stimsImg4 from '@/public/images/S.T.I.M.S Screenshot 4.png'
import stimsImg5 from '@/public/images/S.T.I.M.S Screenshot 5.png'

import smartbuyImg1 from '@/public/images/SmartBuy Screenshot .jpeg'
import smartbuyImg2 from '@/public/images/SmartBuy Screenshot 2.jpeg'
import smartbuyImg3 from '@/public/images/SmartBuy Screenshot 3.jpeg'
import smartbuyImg4 from '@/public/images/SmartBuy Screenshot 4.png'
import smartbuyImg5 from '@/public/images/SmartBuy Screenshot 5.png'

let allImgs = [
    {image: smartbuyImg1, alt:'smartbuyImg1'},
    {image: smartbuyImg2, alt:'smartbuyImg2'},
    {image: smartbuyImg3, alt:'smartbuyImg3'},
    {image: smartbuyImg4, alt:'smartbuyImg4'},
    {image: smartbuyImg5, alt:'smartbuyImg5'},

]

export default function ImageSlideShow (props) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < allImgs.length - 1 ? prevIndex + 1 : 0
        );
        }, 5000);

        return () => clearInterval(interval);
    }, []);



    let selectedProjectsImgs = allImgs.filter((item) => item.alt.includes(props.slug));

    return (
        <div >
            {allImgs.map((image, index) => (
            <Image
                key={index}
                src={image.image}
                className={index === currentImageIndex ? classes.active : ''}
                alt={image.alt}
            />
            ))}
      </div>
    )
}