import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import withShowToggle from './withShowToggle';
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import './Questions.css';
const Question = ({ img, info, title, showInfo, toggleShowInfoHandler }) => {
  return (

    < div className='body'>



      <article className='question' onClick={toggleShowInfoHandler}>

        <div className='cart'>
          <h4>  {title} </h4> <h>{info}</h><p className='answerp'>پاسخ 
          </p>
          <img className='c' src={img} style={{ width: '200px' }}>
          </img>


        </div>

      </article>


    </div>


  );
};

export default withShowToggle(Question);
