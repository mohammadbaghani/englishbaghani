import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CoursesData from './../CoursesData';
import './Maincourse.css';

export default function MainCourse() {

    const [show, setShow] = useState(false);

    const showinfo = () => {

        setShow(current => !current);


    }
    let params = useParams()

    let mainCouseData = CoursesData.find(course => course.id == params.courseID)


    const mystyle = {
        width: `${mainCouseData.percent}` + '%',

    };
    return (



        <body className="main-course-body">







            <h2 className="p-course" >{mainCouseData.title}




            </h2>
            <div className="hover-parent">

                <div className="parent-image-course">
                    <img src={mainCouseData.img} className="image-course" style={{ width: '80%', height: '300px' }} />


                    <div className={show ? 'showlup' : 'hidden'} style={{ width: '80%', height: '300px' }} >


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
                  

                        <h className="hover-left-child-online">
                            تدریس آنلاین :
                            {mainCouseData.online}
                        </h>
                
                        <h className="hover-left-child-sath">
                            سطح:
                            {mainCouseData.sath}
                        </h>



                    </div>
                </div>
            </div>

            <p className="h-course">
                <p className="h-course-info">
                    (جهت دریافت اطلاعات بیشتر در مورد این دوره لطفا بر روی دکمه زیر کلیک نمایید)
                </p>


                <button onClick={showinfo} className="info-button" >

                    اطلاعات بیشتر


                </button>

                {mainCouseData.description}



            </p>
        </body>


    )
}
