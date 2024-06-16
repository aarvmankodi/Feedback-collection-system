
import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';
import Sidebar from './sidebar';

export default function Main() {
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
            <li key={index}>{activity.message} <div className='date'> {new Date(activity.createdAt).toLocaleString()}</div></li>
          ))}
        </ul>
      </div>
      <div className='notifications'>
        <div className='section-title'>Notifications</div>
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note.message} <div className='date'> {new Date(note.createdAt).toLocaleString()}</div></li>
          ))}
        </ul>
      </div>
      {/* Other code */}
    </div>
    </>
    
  );
}

