import React from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Main.css';


import ghazleh from './nasim.mp4';
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
  const [autoplayVideo, setAutoplayVideo] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };





  return (<>

    <div className='body-header'>
      <body class="mybody">



  <div class="main-banner">
      
          <img src="7499800.jpg" className='video'
           >
          </img>




          <p className='head-text'>
            مرکز تخصصی  آموزش زبان پردیسان</p>
          <div class=" second">










            ما با بهترین آموزش ها  و بهره گیری از اساتید مجرب
            شما را در یادگیری  مهارت مهم امروزه یعنی زبان انگلیسی یاری میکنیم !

            ما با بهترین آموزش ها  و بهره گیری از اساتید مجرب
            شما را در یادگیری  مهارت مهم امروزه یعنی زبان انگلیسی یاری میکنیم !
            <bottun className="button-one" onClick={() => {
              navigate('/فروشگاه')
            }}>
              خرید
            </bottun>

          

<Link   className="button-tow" to={`https://mohammadbaghani.github.io/musicplayer/`}> آهنگ </Link>
           
        
          </div>





        </div>



        <a href="#" className='headlist-first'>



          چرا
          پردیسان



          بهترین


          آموزشگاه است؟


        </a>

        <div className='slider-container'>



          <Slider />
     





        </div>








        <img className=' scroll-button' onClick={scrollToTop} src="next.png">
        </img>









        <h class="slider-details-doreha">



          چه دوره هایی در پردیسان





          تدریس می شود  ؟
        </h>

        <h class="slider-details-description">



          دوره های مختلف ما هر کدام دارای ویژگی های منحصر به فردی می باشند
          دوره های مختلف ما هر کدام دارای ویژگی های منحصر به فردی می باشند
          دوره های مختلف ما هر کدام دارای ویژگی های منحصر به فردی می باشند
          دوره های مختلف ما هر کدام دارای ویژگی های منحصر به فردی می باشند
        </h>






        <div className='valed-parent-all-texts'>

          <div className='parent-all-texts'>


            <h class="all-texts-title">

              ما

              متفاوت هستیم , زیرا ....
            </h>
            <div className='text-containerlist-one flex-three'>حرفه ای  ترین  مجموعه آموزشی  زبان در کشور


              <img className='  hat' >
              </img>



            </div>

            <div className='text-containerlist-tow flex-tow'>15 سال سابقه درخشان در  آموزش زبان  انگلیسی

              <img className=' experience' >
              </img>

            </div>

            <div className='text-containerlist-three flex-three'  >
              به کار گیری برترین متد های آموزشی روز  دنیا



              <img className=' book'>
              </img>




            </div>
          </div>

        </div>












        <div class="parent-valed-containerlis">
          <p class="list-text-one">
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پردیسان با پانزده سال سابقه

            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پردیسان با پانزده سال سابقه
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پردیسان با پانزده سال سابقه
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پردیسان با پانزده سال سابقه
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پردیسان با پانزده سال سابقه

            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پردیسان با پانزده سال سابقه
          </p>

          <p class="list-text-tow">
            با پردیسان زبان را  به راحتی  یاد بگیر !
          </p>

          <ul class="list-one list-product">

            <Link className='my-li content-one' to={`/e/${5}`} >

              <img className='circle img-departmans ' src="images/courses of english/fem1.jpg">


              </img>

              <Link className='link-hover dep-link' to={`/e/${5}`} >دپارتمان زبان بزرگسالان</Link>
            </Link>

            <Link className='my-li content-tow' to={`/e/${6}`}>
              <img className='circle img-departmans' src="images/courses of english/malee.jpg">



              </img>
              <Link className='link-hover dep-link' to={`/e/${6}`} >دپارتمان زبان نوجوانان</Link>

            </Link>
            <Link className='my-li content-three' to={`/e/${4}`}>
              <img className='circle img-departmans kids' src="images/courses of english/male2.jpg">



              </img>
              <Link className='link-hover dep-link' to={`/e/${5}`} >دپارتمان زبان کودکان</Link>
            </Link>









          </ul>

          <ul class="list-tow   list-product">


            <Link className='my-li content-four' to={`/e/${1}`}



            >




              <img className='circle' src="images/courses of english/fem.jpg">
              </img>

              <Link className='link-hover dep-link' to={`/e/${1}`} >آمادگی آزمون تافل</Link>
            </Link>




            <Link className='my-li content-five' to={`/e/${3}`}











            >





              <img className='circle' src="images/courses of english/male11.png">


              </img>

              <Link className='link-hover dep-link' to={`/e/${3}`} > آموزش مکالمه </Link>
            </Link>



            <Link className='my-li content-six' to={`/e/${2}`} >

              <img className='circle' src="images/courses of english/fem2.jpg">

              </img>





              <Link className='link-hover dep-link' to={`/e/${2}`} >(TTC) تربیت مدرس </Link>


            </Link>

          </ul>


        </div>








        <div className='valed-paraent-border'>




          <h class="slider-details-shop">
  چگونه زبان خود را تقویت کنیم؟


<br>



</br>



<h class="slider-details-shop-sub">

تقویت اسپیکینگ  :  برای این کار فیلم های انگلیسی زبان را مشاهده نمایید
<br>
</br>


تقویت رایتینگ  : از مسائل روزمره یاد داشت برداری کنید و  سعی کنید   مقاله هم بنویسید 
<br>
</br>
تقویت لیسنینگ : 
     
     یادگیری از طریق گوش دادن به آهنگ از رایج ترین راه های کسب مهارت لیسنینگ است
<br>
</br>




          </h>

          </h>



          <li class="slider-details-video">
     با اساتید خوب ما آشنا شوید . . . 

<br>

</br>
 
  <li class="slider-details-videosub">

  استاد نمونه سال قبل  پردیسان : سر کار خانم غزاله رادفرد


  <br>
  </br>



برای مشاهده روش تدریس هر استاد , نشانگر  موس را روی ویدیوی مربوط به او ببرید

<br>
  </br>

  برای مشاهده روش تدریس هر استاد , نشانگر  موس را روی ویدیوی مربوط به او ببرید

<br>
  </br>


 
  برای مشاهده روش تدریس هر استاد , نشانگر  موس را روی ویدیوی مربوط به او ببرید

<br>
  </br>
  برای مشاهده روش تدریس هر استاد , نشانگر  موس را روی ویدیوی مربوط به او ببرید

<br>
  </br>
  برای مشاهده روش تدریس هر استاد , نشانگر  موس را روی ویدیوی مربوط به او ببرید

<br>
  </br>
  برای مشاهده روش تدریس هر استاد , نشانگر  موس را روی ویدیوی مربوط به او ببرید

<br>
  </br>

  برای مشاهده روش تدریس هر استاد , نشانگر  موس را روی ویدیوی مربوط به او ببرید


</li>




          </li>


          <div className='paraent-border'>

            <div className='paraent-border-child' >




              <div className=' parent-video parent-video-one'>
                <div className='i'>

                </div>

                <div className='here here-tow'>
                  مشاهده ویدیو های  آمورزشی بیشتر   <Link className='lin' to="/آموزشی"> اینجا</Link>

                </div>


                <p className='backgroundimage ' height="300" onMouseEnter={() => setMutedVideo(!mutedVideo)}
                  onMouseLeave={() => setMutedVideo(!mutedVideo)} >

                  <video src={ghazleh} height="300" className='sheikhi'
                    loop muted={mutedVideo} autoPlay>
                  </video>

                </p>

              </div>














              <div class="english-register">

                <div class="cards ">
                  <p className='register-text-tow '>
                    ثبت نام  آنلاین در سایت


                  </p>



                  <a onClick={() => { navigate('/ثبت نام') }} className='register-text'>
                    <img src="reg.avif" className='icon-image register-icon '>
                    </img>
                    ثبت نام</a>

                </div>


              </div>












              <div class="english-store">

                <div class="cards ">
                  <p className='store-text-tow'>
                    فیلم انگلیسی با زیر نویس
                    <br>
                    </br>

                  </p>


                  <a onClick={() => { navigate('/فروشگاه') }} className='store-text' >

                    <img src="shop.jpg" className='icon-image store-icon'>
                    </img>

                    فروشگاه</a>
                </div>


              </div>











              <div class="english-music">

                <div class="cards ">
                  <p className='english-text-tow '>


                    در یک موزیک پلیر حرفه ای

                  </p>
                  <a href="https://mohammadbaghani.github.io/musicplayer/" className='english-text '>


                    <img src="listen6.avif" className='icon-image music-icon'>
                    </img>
                    آهنگ انگلیسی</a>



                </div>


              </div>











            </div>

          </div>



        </div>
        <div className='all-countrySelect'>

          <Ticket />
        </div>



     <h class="slider-details-soalha">
   
           
     ما یک آموزشگاه شگفت انگیز هستیم!





        </h>

        <h    class="slider-details-soalha-sub   ">

هر آنچه که در مورد پردیسان باید بدانید      ...


<br>
</br>
آیا سوالی براتون در مورد ما پیش اومده ؟

<br>
</br>

آیا برای شما مهم است که ما آموزش آنلاین داریم ؟ 


<br>
</br>
در ستون های زیر 
به سوالات شما   پاسخ داده ایم

</h>


        <section class="acordian">
          <div >





















            <div class="acordian-items">



              <img class="question-images" src="qu2.jpg">




              </img>
              <div class="acordian__item">


                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} class="acordian__img">
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography class="font">
                      1.

                      آیا آکادمی دوره های آنلاین  دارد   ؟              </Typography>
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



      </body>
      <Footer />
    </div>

  </>


  );
}

export default Main;
