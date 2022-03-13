import React, { useEffect, useState } from 'react'
import SlideCard from './SlideCard';

const SlideLists = (props) => {
    const [slides, setSlide] = useState([]);
  
    const slideList = slides.map(slide =>
        <li>
            <h3>{slide.mentor}</h3>
            <div>{slide.lecture}</div>
            <div>{slide.date}</div>
            <img src={slide.image} />
            <div>{slide.headcount}</div>
        </li>
    );

    useEffect(() => {
        const fetchLectures = async() => {
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
        <section>
            <SlideCard Slide = {slideList}>
            </SlideCard>
        </section>
    )
}

export default SlideLists