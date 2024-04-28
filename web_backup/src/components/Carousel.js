import React, { useState, useEffect } from 'react'

import '../assets/css/carousel.scss';

function Carousel() {

    let slideIndex = 1;

    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    function showSlides(n) {

        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            // console.log(n);
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = 1;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function moveSlides(n) {
        slideIndex = n;
        showSlides(n);
    }

    return (
        <section>
            <div className={"slideshow-container"}>

                <div className={"mySlides"}>
                    <div className={"numbertext"}>1 / 3</div>
                    <img src={require('../carousel1.jpg')} width={'100%'} className='rounded' />
                    <div className={"text"}>Caption Text</div>
                </div>

                <div className={"mySlides"}>
                    <div className={"numbertext"}>2 / 3</div>
                    <img src={require('../carousel1.jpg')} width={'100%'} />
                    <div className={"text"}>Caption Text</div>
                </div>

                <a
                    className={"prev"}
                    onClick={() => {
                        moveSlides(slideIndex - 1)
                    }}
                >
                    ❮
                </a>

                <a
                    className={"next"}
                    onClick={() => {
                        moveSlides(slideIndex + 1)
                    }}
                >
                    ❯
                </a>

            </div>

            <div className='text-center'>
                <span
                    className={"dot d-none"}
                    onClick={() => {
                        moveSlides(1)
                    }}>
                </span>

                <span
                    className={"dot d-none"}
                    onClick={() => {
                        moveSlides(2)
                    }}>
                </span>
            </div>
        </section >
    )
}

export default Carousel