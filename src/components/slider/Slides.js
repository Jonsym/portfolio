import React from 'react';
import "./Slider.css"

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_960_720.jpg",
        alt: "Proyect 1",
        desc: "Proyect 1"
    },
    {
        src: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
        alt: "Proyect 2",
        desc: "Proyect 2"
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",
        alt: "Project 3",
        desc: "Project 3"
    }
]

const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <img src={slide.src} alt={slide.alt} />
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;

