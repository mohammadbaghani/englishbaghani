
import './Slider.css'

import React, { useState } from 'react';

import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import selena from './';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-elastic-carousel'
import { Score } from '@mui/icons-material';
let coursesData = [
  {
    english: 'بهترین آموزشگاهی که تا حالا تجربه کردم.اساتید عالی و محیطی دلپذیر داشت!', sound: '/images/sounds/boat.mp3',
    farsi: 'سمانه پورخادم',
    src: 'Newfolder/5.jpg'
  },
  {
    english: "به نظرم پردیسان برای همیشه به نیکی در ذهنم خواهد ماند !", sound: '/images/sounds/Twilight.mp3',

    farsi: 'زهرا باقری',


    src: 'Newfolder/12.jpg'
  },



  {
    english: "متد های به روز آموزشی در کنار پیگیری مستمراساتید هر دانشجویی رو راضی و خشنود میکنه. ", price: "Speaking", sound: '/images/sounds/river.mp3',
    farsi: 'پرنیا طاهریان',

    src: 'Newfolder/10.jpg'
  },
  {
    english: "من  سخت گیر رو فقط اینجا تونست  پایبند کنه که سر کلاس هاش بشینم. چون واقعا درجه یک هستن!", price: "Speaking", sound: '/images/sounds/mountain.mp3',
    farsi: "صدف  شیرازیان",

    src: 'Newfolder/14.jpg'
  },



]



function Slider() {

  const [show, setShow] = useState(0);

  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(0);
  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  function decresereState() {
    setShow(show + 1)
    if (
      show > 4
    ) {
      setShow(0)
    }





  }


  function reduceState() {
    setShow(show - 1)

    if (
      show < 0
    ) {
      setShow(0)
    }




  }


  function addsecond() {
    setSecond(second + 1)
  }








  return (

    <body className='con'>


      <Carousel onPrevEnd={(currentItem, pageIndex) =>

        reduceState()

      }

        enableAutoPlay autoPlaySpeed={8000}

        onNextEnd={(currentItem, pageIndex) =>
          decresereState()
        }
        psToShow={3}
        className='carusal'>


        <div className='parent-image-slider' >



          <li className='hhh v'>
            {coursesData[show].english}
            <h className='score' >
              {coursesData[show].farsi}
            </h>
            <Badge >


              {score}

            </Badge>



          </li>

          <h1 className=' v'>
            {coursesData[show].farsi}

          </h1>


          <img className='image-slider' src={coursesData[show].src}



          >
          </img >
        </div>


        <div className='parent-image-slider' >
          <h1 className='hhh v'>
            {coursesData[show].english}
            <h className='score' >
              {coursesData[show].farsi}
            </h>


            <Badge >


              {score}



            </Badge>


          </h1>



          <h1 className=' v'>
            {coursesData[show].farsi}

          </h1>


          <img className='image-slider' src={coursesData[show].src}



          >
          </img >
        </div>

        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[show].english}
            <h className='score' >
              {coursesData[show].farsi}
            </h>


            <Badge >

              {score}


            </Badge>

          </h1>

          <h1 className=' v'>
            {coursesData[show].farsi}

          </h1>

          <img className='image-slider' src={coursesData[show].src}

          >
          </img >
        </div>
        <div className='parent-image-slider' >
          <h1 className='hhh v'>
            {coursesData[show].english}
            <h className='score' >
              {coursesData[show].farsi}
            </h>


            <Badge >


              <hr>
              </hr>
              {score}


            </Badge>


          </h1>

          <h1 className=' v'>
            {coursesData[show].farsi}

          </h1>


          <img className='image-slider' src={coursesData[show].src}

          >
          </img >
        </div>

      </Carousel>

    </body>

  );
}


export default Slider;