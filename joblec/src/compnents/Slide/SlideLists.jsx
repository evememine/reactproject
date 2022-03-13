import React, { useEffect, useState } from 'react'
import SlideCard from './SlideCard';
import classes from './SlideLists.module.css'

const SlideLists = (props) => {
    const [slides, setSlide] = useState([]);

    const slideList = slides.map(slide =>
        <section className={classes.slide} style={{
            backgroundImage :`url(${slide.image})`,
            backgroundSize : `cover`,
            backgroundPosition: "center center"
        }}>

            {/* <img className={classes.imagestlye} src={slide.image} /> */}
            <div className={classes.box}>
                <h2 className={classes.headtext}>{slide.lecture}</h2>
                <div className={classes.text}>{slide.mentor} | {slide.date}</div>
    
            </div>
            <br />
        </section>
    );

    useEffect(() => {
        const fetchLectures = async () => {
            const response = await fetch(props.fetchUrl);
            console.log(response.ok);

            const responseData = await response.json();
            console.log(responseData);

            const lecturesData = [];
            for (const key in responseData) {
                lecturesData.push({
                    id: key,
                    lecture: responseData[key].lecture,
                    mentor: responseData[key].mentor,
                    date: responseData[key].date,
                    image: responseData[key].image,
                    headcount: responseData[key].headcount,
                });
            }
            setSlide(lecturesData);
        }
        fetchLectures().catch(error => console.log(error));
    }, []);


    return (
        <section className={classes.containSlide}>
            <SlideCard Slide={slideList}>
            </SlideCard>
        </section>
    )
}

export default SlideLists