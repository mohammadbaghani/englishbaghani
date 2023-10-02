import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CoursesData from './../CoursesData';
import './Maincourse.css';

export default function MainCourse() {

    let params = useParams()

    let mainCouseData = CoursesData.find(course => course.id == params.courseID)


    const mystyle = {
        width: `${mainCouseData.percent}` + '%',

    };
    return (



        <Container className="mt-5 mainy">

            <div className=" hover-parent">

                <div className="parent-image-course">
                    <img src={mainCouseData.img} className="image-course" style={{ width: '80%', height: '300px' }} />


                    <div className=" hover-left" style={{ width: '80%', height: '300px' }} >


                        میزان سختی :
                        <div class="progress">
                            <div class="progress-bar " role="progressbar"

                                style={mystyle}




                                aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">{mainCouseData.percent}%</div>
                        </div>



                        <h className="hover-left-child-price">
                            هزینه:<h className="hover-left-child-price-adad">
                                {mainCouseData.price}
                            </h>
                            هزارتومان
                        </h>


                        <h className="hover-left-child-sath">
                            سطح:
                            {mainCouseData.sath}
                        </h>

                        <h className="hover-left-child-online">
                            تدریس آنلاین :
                            {mainCouseData.online}
                        </h>

                    </div>
                </div>
            </div>




            <h2 className="p-course" >{mainCouseData.title}</h2>


            <p className="h-course">{mainCouseData.description}</p>


        </Container>
    )
}
