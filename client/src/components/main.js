// // import React from 'react';
// // import './main.css';

// // function Main() {
// //   return (
// //     <div className='main'>
// //       <div className='title'>Dashboard</div>
// //       <div className='userno user'>No. of users
// //         <div className='no'>1</div>
// //       </div>
// //       <div className='activeusers user'>No. of active users
// //         <div className='no'>1</div>
// //       </div>
// //       <div className='graph'>Graph to show form submission activity</div>
// //     </div>
// //   );
// // }

// // export default Main;

// import React, { useEffect , useState } from 'react';
// import './main.css';
// import axios from 'axios';

// function Main() {
//   const [showSettings, setShowSettings] = useState(false);
//   const [activities , setActivities] = useState([]);
//   const [notifications , setnotifications] = useState([]);
//   // const handleSettingsClick = () => {
//   //   setShowSettings(!showSettings);
//   // };
//   useEffect(  () => {
//     const getNotifications = async () => {
//       try {
//         const res = await axios.get('http://localhost:3001/getHistory' , {
//           params: { type: 'notification' }
//         })
//           console.log("hhh" , res.data);
//           setnotifications(res.data);
//           console.log("note" , notifications)
        
        
//       }catch (e){
//         console.log(e);
//       }
//     }
//     getNotifications();
//   } , [])

//   useEffect(  () => {
//     const getActivities = async () => {
//       try {
//         const res = await axios.get('http://localhost:3001/getHistory' , {
//           params: { type: 'activity' }
//         })        // console.log(res.data);
//         setActivities(res.data);
//       }catch (e){
//         console.log(e);
//       }
//     }
//     getActivities(); 
//   } , [])
//   return (
//     <div className='main'>
//       <div className='title'>Dashboard</div>
//       <div className='userno user'>
//         No. of users
//         <div className='no'>1</div>
//       </div>
//       <div className='activeusers user'>
//         No. of active users
//         <div className='no'>1</div>
//       </div>
//       <div className='recent-activities'>
//         <div className='section-title'>Recent Activities</div>
//         <ul>
//           {activities.map((activity , index) => (
//             <li key={index} >{activity.message}</li>
//           ))}
          
//         </ul>
//       </div>
//       <div className='notifications'>
//         <div className='section-title'>Notifications</div>
//         <ul>
//           {notifications.map((note , index)=> {
//             <li key={index}>{note.message}</li>
//           })
//           }
//         </ul>
//       </div>
//       {/* <div className='profile-summary'>
//         <div className='section-title'>Profile Summary</div>
//         <div className='profile-details'>
//           <p>Name: John Doe</p>
//           <p>Email: john.doe@example.com</p>
//         </div>
//       </div> */}
//       {/* <div className='settings-shortcut'>
//         <button className='settings-button' onClick={handleSettingsClick}>
//           {showSettings ? 'Hide Settings' : 'Go to Settings'}
//         </button>
//         {showSettings && (
//           <div className='settings-form'>
//             <div className='section-title'>Change Username and Password</div>
//             <form>
//               <div className='form-group'>
//                 <label htmlFor='username'>New Username</label>
//                 <input type='text' id='username' name='username' />
//               </div>
//               <div className='form-group'>
//                 <label htmlFor='password'>New Password</label>
//                 <input type='password' id='password' name='password' />
//               </div>
//               <button type='submit' className='save-button'>Save Changes</button>
//             </form>
//           </div>
//         )}
//       </div> */}
//     </div>
//   );
// }

// export default Main;


import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';
import Sidebar from './sidebar';

function Main() {
  const [Users, setUsers] = useState(false);
  const [activities, setActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const res = await axios.get('http://localhost:3001/getHistory', {
          params: { type: 'notification' }
        });
        setNotifications(res.data);
      } catch (e) {
        console.log("Error fetching notifications:", e);
      }
    };
    getNotifications();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try{
        const res = await axios.get('http://localhost:3001/getUser');
        setUsers(res.data)
      }catch(e){
        console.log(e);
      }
    }
    getUsers();
  }, [])

  useEffect(() => {
    const getActivities = async () => {
      try {
        const res = await axios.get('http://localhost:3001/getHistory', {
          params: { type: 'activity' }
        });
        setActivities(res.data);
      } catch (e) {
        console.log("Error fetching activities:", e);
      }
    };
    getActivities();
  }, []);

  return (
    <>
    <Sidebar />
    <div className='main'>
      <div className='title'>Dashboard</div>
      <div className='userno user'>
        No. of users
        <div className='no'>{Users}</div>
      </div>
      
      <div className='recent-activities'>
        <div className='section-title'>Recent Activities</div>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity.message} <div className='date'> {Date(activity.createdAt)}</div></li>
          ))}
        </ul>
      </div>
      <div className='notifications'>
        <div className='section-title'>Notifications</div>
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note.message} <div className='date'> {Date(note.createdAt)}</div></li>
          ))}
        </ul>
      </div>
      {/* Other code */}
    </div>
    </>
    
  );
}

export default Main;
