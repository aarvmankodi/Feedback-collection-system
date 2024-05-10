import React , { useEffect} from 'react';
import './selector.css';
import { useNavigate } from 'react-router-dom';


export default function Forms() {
  return (
    <div className='outer'>
    <h2 className='head form-head'>Submit Page</h2>
    <div className='underline underline-head'></div>

    
      <div className='forms'>
      <div className='form-selection'>
        <div className='form-option' >
          <h3>Rating <br/>Form</h3>
          {/* <p>Description of Form A</p> */}
        </div>
        <div className='form-option' >
          <h3>Application <br/>Form</h3>
          {/* <p>Description of Form B</p> */}
        </div>
        <div className='form-option' >
          <h3>FeedBack <br/>Form</h3>
          {/* <p>Description of Form C</p> */}
        </div>
        <div className='form-option' >
          <h3>Survey<br/> Form</h3>
          {/* <p>Description of Form D</p> */}
        </div>
      </div>
    
    </div>
    </div>
  )
}
