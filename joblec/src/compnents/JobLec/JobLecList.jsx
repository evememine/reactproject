import React, { useEffect, useState } from 'react'
import classes from './JobLecList.module.css'
import JobLec from './JobLec';


const JOBLECS = [

    {
        id: "A1",
        date: "2022-03-14 5시",
        headcount: 24,
        image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_1118_095847.jpg",
        lecture: "AI 업계 취업을 위한 현실적인 방법",
        mentor: "김영숙"
    },
    {
        id: "A2",
        date: "2022-03-22 5시",
        headcount: 0,
        image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_1206_104328.jpg",
        lecture: "문과생도 이해하는 머신러닝 강의",
        mentor: "박찬형"
    },
    {
        id: "A3",
        date: "2022-03-22 6시",
        headcount: 32,
        image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_0215_102317.jpg",
        lecture: "머신러닝과 파이썬",
        mentor: "박찬휘"
    },
    {
        id: "A4",
        date: "2022-03-23 5시",
        headcount: 29,
        image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_0308_104200.jpg",
        lecture: "인공지능 공부 코스",
        mentor: "조승하"
    }
]

const JobLecList = () => {
    const [joblecs, setJoblecs] = useState(JOBLECS);
    // console.log(books);

    // 1. DUMMY BOOKS 확인용
    // const JobLecList = joblecs.map(joblec =>
    //     <li key={joblec.id}>
    //         <h3>{joblec.lecture}</h3>
    //         <div>{joblec.headcount}</div>
    //         <div>{joblec.mentor}</div>
    //     </li>
    // );
  

    // 2. 별도의 <li> 컴포넌트로 분리
    const jobLecList = joblecs.map(joblec =>
        <JobLec
            key = {joblec.id}
            id = {joblec.id}
            author={joblec.author}
            date = {joblec.date}
            lecture = {joblec.lecture}
            mentor = {joblec.mentor}
            headcount = {joblec.headcount}
        />
    );
    // console.log(booksList);

    // // 3. firebase를 활용한 DUMMY Data GET.
    // useEffect(() => {
    //   const fetchBooks = async() => {
    //     const response = await fetch('./job-lecture-default-rtdb-export-total.json');
    //     console.log(response.ok);

    //     const responseData = await response.json();
    //     console.log(responseData);

    //     const booksData = [];
    //     for(const key in responseData) {
    //       booksData.push({
    //         id: key,
    //         name: responseData[key].name,
    //         description: responseData[key].description,
    //         author: responseData[key].author,
    //         price: responseData[key].price,
    //       });
    //     }
    //     // console.log(booksData);
    //     setBooks(booksData);
    //   };

    //   fetchBooks().catch(error => console.log(error));
    // }, []);

    return (
        <section className={classes.joblecs}>
                <ul>
                    {jobLecList}
                </ul>
        </section>
    )
}

export default JobLecList