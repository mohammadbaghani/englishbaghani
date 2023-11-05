import React from "react";
import "./Ticket.css";

import Headercopy from '../../Headercopy'
export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: [" تقویت مکالمه", "دوره فشرده جتینو", " دوره آنلاین", " دوره حضوری"],
                Turkey: ["ویژه نوجوانان", "ویژه کودکان", " دوره آنلاین", " دوره حضوری"],
                US: ["آمادگی آزمون تافل", "TTC دوره", "آمادگی آزمون آیلتس", " زبان برای مهاجرت"],
            },
            mainCountryCities: []
        }

        this.selectHandler = this.selectHandler.bind(this)
    }

    selectHandler(event) {
        let mainCountry = event.target.value

        if (mainCountry === '-1') {
            this.setState({
                mainCountryCities: []
            })
        } else {
            let mainCountryCities = this.state.countriesData[mainCountry]

            this.setState({
                mainCountryCities: mainCountryCities
            })
        }

    }
    render() {
        return (
            <>

                <div className="container-select">
                    <div className="container-select-child">
                        <header class="course-header">

                            <Headercopy class="course-header" />
                        </header>

                        <div className="container">

                            <div className="col-md-6 box">



                                <img
                                    src='ticket-image (2).png' className="ticket-image">
                                </img>
                                <select className="countrySelect" onChange={this.selectHandler}>
                                    <option   className="option" value="-1">انتخاب گروه آموزشی </option>
                                    <option className="option" value="Iran">بزرگسالان</option>
                                    <option className="option" value="Turkey">کودکان</option>
                                    <option className="option" value="US">پیشرفته</option>
                                </select>
                            </div>
                            <div className="col-md-6 box">   <img
                                src='ticket-image (2).png' className="ticket-image-tow">
                            </img>
                                <select className="citySelect move-select">
                                    {this.state.mainCountryCities.length ? this.state.mainCountryCities.map(city => (
                                        <option value={city} key={city}   className="option">{city}</option>
                                    )) : (
                                        <option value="-1" className="citySelect  option">لیست دوره ها</option>
                                    )}
                                </select>
                            </div>

                        </div>

                        </div>
                    </div>
                </>
                )
    }
}

