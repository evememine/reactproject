import React, { useEffect, useState } from 'react'
import LectureInRow from './LectureInRow';
// import classes from './Row.module.css'
import classes from './LectureLists.module.css'


const LectureLists = (props) => {
    console.log('Row renderd');
    
    const [lectures,setLectures] = useState([]);
    
    const lecturesList = lectures.map(lecture =>
        <LectureInRow
                key={lecture.id}
                id={lecture.id}
                lecture={lecture.lecture}
                mentor={lecture.mentor}
                date={lecture.date}
                image={lecture.image}
                headcount={lecture.headcount}
        />    
    )
    console.log('렌더링' + lecturesList);
        
    
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
            setLectures(lecturesData);
        }
        fetchLectures().catch(error => console.log(error));
    }, []);

  
    return (
    <div className={classes.lectures}>
        {lecturesList}
    </div>
  )
}

export default LectureLists