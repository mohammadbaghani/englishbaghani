import React, { Component } from 'react'
import CoursesData from './../CoursesData'
import Productcopy from './../Productcopy'
import './../App.css'
import './Courses.css'
export default class Courses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 7,
                    title: "آمادگی آزمون آیلتس", price: "Be ready for Tafel", img: '/images/coueses of english/teen.jpg', description: `دوره آموزش زبان انگلیسی ویژه نوجوانان در سطح متوسطه Got it2 در آموزشگاه زبان پردیسان برگزار می شود. تمرکز اصلی این دوره آموزشی آشنایی با اصول اولیه یادگیری زبان انگلیسی می باشد. در این دوره با توجه و تمرکز بر روی چهار مهارت اصلی گفتاری (speaking) ، شنیداری (listening) ، نوشتار (writing) و درک مطلب (Reading) جلسات آموزش انجام می شود. همچنین امکان برگزاری این دوره بصورت کلاس حضوری و کلاس آنلاین در کلیه شعب پردیسان فراهم می باشد`
                },


                {
                    id: 6,
                    title: "آموزش زبان نوجوانان", price: "  Only for teenagers", img: '/images/coueses of english/teen.jpg', description: `دوره آموزش زبان انگلیسی ویژه نوجوانان در سطح متوسطه Got it2 در آموزشگاه زبان پردیسان برگزار می شود. تمرکز اصلی این دوره آموزشی آشنایی با اصول اولیه یادگیری زبان انگلیسی می باشد. در این دوره با توجه و تمرکز بر روی چهار مهارت اصلی گفتاری (speaking) ، شنیداری (listening) ، نوشتار (writing) و درک مطلب (Reading) جلسات آموزش انجام می شود. همچنین امکان برگزاری این دوره بصورت کلاس حضوری و کلاس آنلاین در کلیه شعب پردیسان فراهم می باشد`
                },

                {
                    id: 1,
                    title: "آمادگی آزمون تافل",
                    price: "Be ready for Tafel", img: '/images/coueses of english/tofel (2).png', description: `تافل یک آزمون استاندارد است که مهارتهای شما در زبان انگلیسی و استفاده از آن را در محیط دانشگاهـــی ارزیابــــی میکند. بنابراین می توانید مطمئن باشید که در دانشگاههایی که این مدرک اهمیت دارد شما متمایز خواهید شد. این آزمون برای اهدافی چون تحصیل در کشورهای دیگر و گذراندن دورههای کوتاه مدت مفید است. در این آزمون هر چهار مهارت سنجش خواهد شد`
                },

                {
                    id: 5,
                    title: "زبان بزرگسالان", price: "American English file", img: '/images/coueses of english/bozorg1.png', description: `اگر می‌خواهید زبان انگلیسی را فراتر از مکالمات روزمره یاد بگیرید یا قصد ادامه تحصیل یا کار در محیطی انگلیسی زبان را دارید، این سطح  ۶ ترمی مناسب شماست. در این سطح از دوره آموزش زبان انگلیسی برای بزرگسالان در سفیر، مهارتتان در مکالمه به حدی می‌رسد که به سادگی با افراد بومی (native) صحبت می‌کنید و به درجه‌ای می‌رسید که توانایی درک متن‌های پیچیده کاری و تخصصی را دارید.`
                },
                {
                    id: 3,
                    title: "آموزش مکالمه", price: "Speaking", img: '/images/coueses of english/e1.png', description: ` 
                    در این دوره آموزشی، هدف اصلی یادگیری مکالمات روزمره در موقعیت های مختلف و تقویت مهارت شنیداری است.
            
            یکی از دلایلی که افراد پس از گذشت مدتی از یادگیری جدی زبان فاصله می‌گیرند، روال تکراری آموزش است. در دوره‌ آموزش زبان انگلیسی در آموزشگاه پردیسان تلاش شده است که فضایی با نشاط برای زبان‌ آموزان فراهم شود. همچنین از شیوه‌های نوین آموزشی برای آموزش استفاده شده است. زبان‌ آموزان نیز می‌توانند برای یادگیری بیشتر، در سبک‌های مطالعه خلاقیت به خرج دهند تا  یادگیری به امری روزمره و کسل کننده تبدیل نشود`
                },
                {
                    id: 4,
                    title: "آموزش زبان کودکان",
                    price: "English for kids", img: '/images/coueses of english/kids.png', description: ` 
                    برای بالا بردن بهره آموزشی در این سنین موارد مهمی وجود دارد که می‌بایست در هنگام اقدام به شروع آموزش زبان انگلیسی به کودکان، توسط والدین مورد بررسی قرار بگیرد. اولین گام‌ها در آموزش زبان کودکان، گام‌هایی هستند که باید مستحکم، درست و طبق اصول علمی و تخصصی برداشته شوند. توجه به این نکته اهمیت بالایی دارد که آموزش زبان انگلیسی برای کودکان در کنار تمام این اصول باید همراه با سرگرمی باشد، به‌نحوی که کودکان و خردسالان مشتاق به ادامه دادن این مسیر باشند و میل ادامه یادگیری در آن‌ها ایجاد شود.
                    آموزش زبان انگلیسی برای کودکان در سفیر گفتمان از سنین ۷ تا ۱۲ سال شروع می‌شود. کلاس زبان کودکان از دو بخش مبتدی (۲۰ ترم) و پیشرفته (۱۵ ترم) تشکیل شده است. در این دوره آموزشی تلاش شده است با استفاده از کتب آموزشی به‌روز و پویا ابزار لازم یادگیری زبان انگلیسی کودکان را فراهم آوریم. در ادامه به معرفی دوره‌های موسسه زبان سفیر خواهیم پرداخت
                    `
                },



            ],
            shoppingCart: [],
        }
    }


    render() {
        return (
            <div className='pruoducts-body'>

                <header class="main-header nnn">

                    <h1 class="band-name band-name-large mmm">فهرست دوره های آکادمی</h1>
                </header>

                <div class="shop-items">

                    {this.state.products.map(product => (
                        <Productcopy {...product} />
                    ))}
                </div>
            </div>


        )
    }
}