import React from 'react';
import './main.css'

function Main() {
  return (
    <div className='main'>
        <div className='title'>Dashboard</div>
        <div className='userno user'>No. of users
        <div className='no'>1</div></div>
        <div className='activeusers user'>No. of active users <div className='no'>1</div></div>
        <div className='graph'>Graph to show form submission activity</div>
    </div>
  )
}

export default Main;
