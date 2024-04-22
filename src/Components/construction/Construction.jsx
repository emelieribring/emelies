import React from 'react';
import './construction.css';
import 'animate.css';
import workpic from '../../images/work-98936_1280.png';


export default function Construction() {
  return (
    <div className='construction'>
        <div className='big-cloud animate__animated animate__fadeInDownBig'>
            <div className='line'></div>
            <img className='workpic' src={workpic} alt="" />
        <p className='text'>Under construction</p>
            <div className="cloudball-one"></div>
            <div className='cloud'>
            <div className="cloud-box">
                    <div className='clouds-top'></div>
                    <div className='clouds-top'></div>
                    <div className='clouds-top'></div>
                </div>
                <div className="cloud-box">
                    <div className='clouds'></div>
                    <div className='clouds'></div>
                    <div className='clouds'></div>
                </div>
            </div>
            <div className="cloudball-two"></div>
        </div>
    </div>
  )
}
