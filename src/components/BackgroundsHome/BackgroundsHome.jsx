import React from 'react'
import './BackgroundsHome.css'
import { useEffect, useState } from 'react'
import fondo_home_2 from '../../assets/images/fondo_home_2.jpeg'
import fondo_home_3 from '../../assets/images/fondo_home_3.jpeg'

export default function BackgroundsHome() {
    const images_background = [fondo_home_2, fondo_home_3,];
    let [indexImage, setIndexImage] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexImage((prevState) => (prevState + 1) % images_background.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);


    const renderImage = (index) => (
        <img
            id="image_background_active"
            src={images_background[index]}
            alt=""
            className="blur-image animation:blur-image 1s ease-in-out"
        />
    );

    return (
        <div id='containerPrincipal-BackgroundsHome'>
            {renderImage(indexImage)}
        </div>
    )
}
