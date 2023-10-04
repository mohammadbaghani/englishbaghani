import React from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Main.css';

import { useLocation } from "react-router-dom";

import five from './nasim5.mp4';
import Slider from "./Slider";

import { useState } from "react";

import { styled } from '@mui/material/styles';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,

} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Accordian.css';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate, } from 'react-router-dom';
import Footer from './Footer';

import Ticket from './components/Ticket/Ticket';

const Accordion = styled((props: AccordionProps) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowBackIosNewIcon sx={{ fontSize: '2rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    color: '#c4c5c7',

    transform: 'rotate(270deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),

}));
function Main() {
  let navigate = useNavigate()
  const [expanded, setExpanded] = React.useState('false');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [mutedVideo, setMutedVideo] = useState(true);
  const [autoplayVideo, setAutoplayVideo] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);




  const [timer, setTimer] = React.useState('');

  useEffect(() => {

    setInterval(function () {

      let myDate = new Date()

      let nowHour = myDate.getHours()
      let nowMinute = myDate.getMinutes()
      let nowSecond = myDate.getSeconds()

      if (nowHour < 10) {
        nowHour = '0' + nowHour
      }
      if (nowMinute < 10) {
        nowMinute = '0' + nowMinute
      }
      if (nowSecond < 10) {
        nowSecond = '0' + nowSecond
      }

      const currentTime = nowHour + ' : ' + nowMinute + ' : ' + nowSecond
      setTimer(currentTime)
    }, 1000);
  }, [])
  return (<>

    <div className='body-header'>
      <body class="mybody">



       

        <bottun>

        </bottun>


        <ul class="list-unstyled list-inline">
          <li class="list-inline-item" title="  لینکدین">
            <a href="https://www.linkedin.com/in/mohammad-baghani-7065ba242/" class="text-decoration-none"
            >

              <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-twitter svgtop"
                viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>

            </a>
          </li>



          <li class="list-inline-item" title=" توئیتر ">
            <a href="#" class="text-decoration-none"
            >
              <svg
                class="bi bi-twitter svgtop"
                xmlns="http://www.w3.org/2000/svg"


                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                ></path></svg
              ></a>
          </li>
          <li class="list-inline-item" title="  اینستاگرام">
            <a href="#" class="text-decoration-none"
            ><svg
              class="bi bi-instagram svgtop"
              xmlns="http://www.w3.org/2000/svg"


              viewBox="0 0 16 16"
            >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  آموزشی               ></path></svg
              ></a>
          </li>



        </ul>




        <div class="main-banner">
          <p className='head-text'>
            مرکز تخصصی زبان پردیسان</p>
          <div class=" second">










            ارائه گواهینامه های معتبر بین المللی






          </div>
          <div class="first">







            امکان استخدام بعد از دوره TTC







          </div>

          <div class="third">






            بهره مندی از برترین اساتید زبان


          </div>

        </div>



        <img src='Untitled design (2).png' className='image-ccourse-first-sign' />

        <div className='slider-container'>

          <a href="#" className='headlist-first'>

            <img src='courses-icon-15339.png' className='image-ccourse-first' />

            چرا
            <h className="pardisan-vote">پردیسان</h>



            بهترین


            آموزشگاه است؟


          </a>

          <Slider />
          <li class="slider-details">



            دانشجویان سابق    <h className="pardisan">پردیسان</h>   چه می گویند ؟
          </li>

          <img src='english-lessons-concept_118813-3787.jpg' class="slider-details-image">
          </img>



        </div>








        <img className=' scroll-button' onClick={scrollToTop} src="up-arrow-svgrepo-com (1).png">
        </img>




        <a href="#" className='headlist-second  '>



          <img src='laws_and_regulations.png' className='image-ccourse image-ccourse-second' />

          <img src='Untitled design (2).png' className='image-ccourse-second-sign' />



          دپارتمان ها </a>





        <h class="slider-details-doreha">



          چه دوره هایی در <h className="pardisan-doreha">پردیسان






          </h> تدریس می شود  ؟
        </h>



        <div className='valed-parent-all-texts'>

          <div className='parent-all-texts'>

            <h class="all-texts-title">

              ما

              متفاوت هستیم , زیرا ....
            </h>

            <div className='text-containerlist-one'>حرفه ای  ترین  مجموعه آموزشی  زبان در کشور


              <img className=' givahinameh-image  hat' >
              </img>



            </div>

            <div className='text-containerlist-tow'>15 سال سابقه درخشان در  آموزش زبان  انگلیسی

              <img className=' givahinameh-image experience' >
              </img>

            </div>

            <div className='text-containerlist-three'  >
              به کار گیری برترین متد های آموزشی روز  دنیا



              <img className=' givahinameh-image book'>
              </img>




            </div>
          </div>

        </div>



        <div class="valed-containerlis">


        </div>



        <div class="valed-parent-valed-containerlis">





          <div class="parent-valed-containerlis">
            <ul class="containerlis departmans">
              <hr className='hd'></hr>


              <li class="my-li"><img className='circle img-departmans ' src="images/coueses of english/fem1.jpg">


              </img><Link className='link-hover dep-link' to={`/e/${5}`} >دپارتمان زبان بزرگسالان</Link> </li>
              <li class="my-li"><img className='circle img-departmans' src="images/coueses of english/malee.jpg">



              </img><Link className='link-hover dep-link' to={`/e/${6}`}>دپارتمان زبان نوجوانان</Link></li>
              <li class="my-li"><img className='circle img-departmans kids' src="images/coueses of english/male2.jpg">



              </img><Link className='link-hover dep-link' to={`/e/${4}`}>دپارتمان زبان کودکان</Link></li>









            </ul>

            <ul class="containerlis"><div className='pishrafte'>

              <hr className='hr'></hr>


              <a href="#" className='headlist'>دوره های پیشرفته</a>   </div>
              <li class="my-li    courses"><img className='circle' src="images/coueses of english/fem.jpg"></img><Link className='link-hover' to={`/e/${1}`}>آمادگی آزمون تافل</Link></li>
              <li class="my-li courses" ><img className='circle' src="images/coueses of english/male11.png"></img><Link className='link-hover' to={`/e/${3}`} >آموزش مکالمه</Link> </li>
              <li class="my-li   courses"><img className='circle' src="images/coueses of english/fem2.jpg"></img><Link className='link-hover' to={`/e/${2}`} >دورهTTC</Link> </li>

            </ul>


          </div>
        </div>







        <div className='valed-paraent-border film-border'>


          <a href="#" className='headlist-third'>
            <a className='headlist-third-text'>




              پردیسان
              مدیا
            </a>




            <img src='shop-movie.png' className='image-ccourse-third' />



          </a>

          <h class="slider-details-shop  film-border">
            فیلم,آهنگ انگلیسی,ویدیوی آموزشی



            در



            <h className="pardisan-shop "
            >

              پردیسان
              مدیا


            </h>



          </h>




          <div className='paraent-border' onMouseEnter={() => setAutoplayVideo(!autoplayVideo)}
            onMouseLeave={() => setAutoplayVideo(false)}

          >

<div className='paraent-border-child' >
  
<div className=' i move'>

</div>

<div className='here move'>
  مشاهده ویدیو های  آمورزشی بیشتر   <Link className='lin' to="/آموزشی"> اینجا</Link>

</div>




















<p className='backgroundimage move' height="300" onMouseEnter={() => setMutedVideo(!mutedVideo)}
  onMouseLeave={() => setMutedVideo(!mutedVideo)} >

  <video src={five} height="300" className='sheikhi'
   loop muted={mutedVideo} autoPlay>
  </video>

</p>

<div class="flip-card english-register">
  <div class="flip-card-inner">
    <div class="flip-card-front ">
      <p className='register-text-tow '>
        ثبت نام  آنلاین در سایت

        <br>
        </br>
        بهره مندی از تخفیفات ماهانه
        <br>
        </br>

        خرید انیمشن های جذاب زبان
      </p>

      <img className='tick-register' src="tick_good_accept_ok_complete_icon_208164.png" />
      <img className='tick-register' src="tick_good_accept_ok_complete_icon_208164.png" />
      <img className='tick-register' src="tick_good_accept_ok_complete_icon_208164.png" />

      <a onClick={() => { navigate('/ثبت نام') }} className='register-text'>
        <img src="qu6.jpg" className='icon-image register-icon '>
        </img>
        ثبت نام</a>
    </div>


    <div class="flip-card-back ">
      <p className='register-text-tow-sub'>
        !کلیک کنید
      </p>
      <a onClick={() => { navigate('/ثبت نام') }} className='register-text  '>
        <img src="assigne name2.jpg" className='icon-image register-icon-back'>
        </img>
      </a>
    </div>
  </div>
</div>

<div class="flip-card english-store">
  <div class="flip-card-inner">
    <div class="flip-card-front ">
      <p className='store-text-tow'>
        فیلم انگلیسی با زیر نویس
        <br>
        </br>
        محبوب ترین
        آثار سال 2022
        <br>
        </br>
        جهت تسلط بیشتر در زبان
      </p>

      <img className='tick-store' src="tick_good_accept_ok_complete_icon_208164.png" />
      <img className='tick-store' src="tick_good_accept_ok_complete_icon_208164.png" />
      <img className='tick-store' src="tick_good_accept_ok_complete_icon_208164.png" />
      <a onClick={() => { navigate('/فروشگاه') }} className='store-text' >

        <img src="movieshop.png" className='icon-image store-icon'>
        </img>

        فروشگاه</a>
    </div>
    <div class="flip-card-back ">
      <p className='store-text-tow-sub' >
        !کلیک کنید
      </p>
      <a onClick={() => { navigate('/فروشگاه') }} className='store-text store-text-back' >

        <img src="buy-store.png" className='icon-image  store-icon-back '>
        </img>

      </a>

    </div>
  </div>
</div>
<a href="https://mohammadbaghani.github.io/musicplayer/" className='english-music-second'>
  <img src="success.png" className='icon-image music-icon'>

  </img>

  آهنگ انگلیسی</a>

<div class="flip-card english-music">
  <div class="flip-card-inner">
    <div class="flip-card-front ">
      <p className='english-text-tow '>


        در یک موزیک پلیر حرفه ای
        <img className='tick-music' src="tick_good_accept_ok_complete_icon_208164.png" />
        <img className='tick-music' src="tick_good_accept_ok_complete_icon_208164.png" />
        <img className='tick-music' src="tick_good_accept_ok_complete_icon_208164.png" />
      </p>
      <a href="https://mohammadbaghani.github.io/musicplayer/" className='english-text '>


        <img src="listen.jpg" className='icon-image music-icon'>
        </img>
        آهنگ انگلیسی</a>



    </div>
    <div class="flip-card-back ">

      <p className='english-text-tow-sub'>
        !کلیک کنید
      </p>
      <a href="https://mohammadbaghani.github.io/musicplayer/" className='english-text '>


        <img src="listen6.png" className='icon-image music-icon music-icon-second'>
        </img>
      </a>
    </div>
  </div>
</div>

</div>

  </div>



        </div>
        <div className='all-countrySelect'>

          <Ticket />
        </div>






        <section class="acordian">
          <div >


            <a href="#" className='headlist-fourth'>

              <img src='Question_question.png' className='image-ccourse white' />



              سوالات شما</a>










            <h class="slider-details-soalha">

              در مورد


              <h className="pardisan-doreha" >پردیسان </h> سوال داری ؟ پاسخش اینجاست.



            </h>









            <div class="acordian-items">



              <img class="question-images" src="qu2.jpg">
              </img>
              <div class="acordian__item">


                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} class="acordian__img">
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography class="font">
                      1.  آیا آکادمی دوره های آنلاین  دارد   ؟              </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext">
                      بله بهترین دوره های آنلاین را می توانیداینجا داشته باشید. در دوران کرونا و غیر از آن هم  ما با بهترین  آموزش های آنلاین  در خدمت زبان آموزان هستیم.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div class="acordian__item">
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} class="acordian__img">
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography class="font">2. آیا زبان برای همه سنین مناسب است؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext ">
                      سن یادگیری زبان انگلیسی در کودکان برای شما
                      حال، هراس از آن دارید که خدایی نکرده فرزندتان در جوامع بین‌الملل موقع صحبت کردن به مشکل بر بخورد؟احتمالا با خواندن ward.',

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div class="acordian__item">

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} class="acordian__img">
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography class="font">3.آزمون تافل ( TOEFL ) چیست؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext">
                      آزمون تافل یا TOEFL مخفف عبارت Test of English as a Foreign Language می باشد، که در واقع یک آزمون بین المللی در زمینه زبان انگلیسی است که در زمره پرطرفدارترین و معتبرترین آزمونهای بین المللی قرار دارد. مرکز این آزمون در کشور آمریکا قرار دارد و از طریق شرکت ETS یا “Educationa جهت کسب اطلاعات بیشتر در خصوص TOEFL
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div class="acordian__item">
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} class="acordian__img">
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography class="font"> 4.زبان چه نقش در مهاجرت دارد؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext">
                      تافل یک آزمون استاندارد است که مهارتهای شما در زبان انگلیسی و استفاده از آن را در محیط دانشگاهـــی ارزیابــــی میکند. بنابراین می توانید مطمئن باشید که در دانشگاههایی که این مدرک اهمیت دارد شما متمایز خواهید شد. این آزمون برای اهدافی چون تحصیل در کشورهای دیگر و گذراندن دورههای کوتاه مدت مفید است. در این آزمون هر چهار مهارت سنجش خواهد شد                   </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div class="acordian__item">
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
                  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography class="font">5. دوره تربیت مدرس این آموزشگاه چگونه است؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext ">
                      در این دوره از جدید ترین متدهای روز تدریس در ددنیا استفاده میشود تا همه دانشجویان ttc بتوانند به نحوی عالی تدریس کنند
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div class="acordian__item">

                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} class="acordian__img">
                  <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography class="font">6. نقش زبان در کسب در آمد چقدر است؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext ">
                      انگلیسی زبان بین المللی و پرکاربردترین زبان گفتاری و نوشتاری در جهان است. در حال حاضر بالغ بریی کافی با این زبان است. بنابراین، اگر هنوز زبان انگلیسی بلد نیستید یا تسلط کافی بر آن ندارید قادر به برقراری ارتباط با میلیون‌ها نفر در سرتاسر جهان نخواهید بود
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

            </div>
          </div>
        </section>

        <div >




          <div class="cheklist" id="hour" onClick={() => {
            navigate('/چک لیست ')
          }}>

            <img src="qu8.avif"
              class="cheklist-image" >
            </img>
            چک لیست

            (جدید)

          </div>

        </div>

        <div >



          <span>:</span>
          <div class="clock" id="hour">

            ساعت به وقت تهران

            <br></br>
            {timer}</div>

        </div>

      </body>
      <Footer />
    </div>

  </>


  );
}

export default Main;
