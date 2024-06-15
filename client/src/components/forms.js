import React from 'react';
import './forms.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';


export default function Forms() {
    const navigate = useNavigate();

    const Redirect = (name) => {
        navigate(`./${name}`)
    }
  return (
    <>
    <Sidebar/>
    <div className='forms'>
        <div className='title'>
            Forms
        </div>
        <div className='form A' name='rating' onClick={() => {
            navigate('rating')
            }}>Ratings Form</div>
        <div className='form B' name='application' onClick={() => {
            navigate(`application`)
            }}>Application Form</div>
        <div className='form C' name='feedback' onClick={() => {
            navigate(`feedback`)
            }}>FeedBack Form</div>
        <div className='form D' name='survey' onClick={() => {
            navigate(`survey`)
            }}>Survey Form</div>

    </div>
    </>
    
  )
}
