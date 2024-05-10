import React , { useEffect} from 'react';
import './forms.css';
import { useNavigate } from 'react-router-dom';

function Forms() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to handle mousemove event
    const handleMousemove = (e) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    // Attach mousemove event listener to each form option
    const formOptions = document.querySelectorAll('.form-option');
    formOptions.forEach((box) => {
      box.addEventListener('mousemove', handleMousemove);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      formOptions.forEach((box) => {
        box.removeEventListener('mousemove', handleMousemove);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const handleFormSelection = (formType) => {
    // Handle form selection logic, e.g., navigate to the selected form
    console.log(`Selected form type: ${formType}`);
    navigate(`/${formType}`);
  };
  
  return (
    <div className='outer'>
    <h2 className='head form-head'>Submit Page</h2>
    <div className='underline underline-head'></div>

    
      <div className='forms'>
      <div className='form-selection'>
        <div className='form-option' onClick={() => handleFormSelection('FormA')}>
          <h3>Rating <br/>Form</h3>
          {/* <p>Description of Form A</p> */}
        </div>
        <div className='form-option' onClick={() => handleFormSelection('FormB')}>
          <h3>Application <br/>Form</h3>
          {/* <p>Description of Form B</p> */}
        </div>
        <div className='form-option' onClick={() => handleFormSelection('FormC')}>
          <h3>FeedBack <br/>Form</h3>
          {/* <p>Description of Form C</p> */}
        </div>
        <div className='form-option' onClick={() => handleFormSelection('FormD')}>
          <h3>Survey<br/> Form</h3>
          {/* <p>Description of Form D</p> */}
        </div>
      </div>
    
    </div>
    </div>
  );
}

export default Forms;
