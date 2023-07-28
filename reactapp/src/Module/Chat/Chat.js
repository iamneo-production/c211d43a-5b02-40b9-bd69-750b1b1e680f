import React from "react";

import ChatRoom from "./ChatRoom";
import  {BiSearchAlt} from 'react-icons/bi';
import { MdNotifications} from 'react-icons/md';




function Chat(){
    const img='https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689345912~exp=1689346512~hmac=7ace809ed21bb2e94386545fceccbd8ac28b948f13e0b8c2b5f943ea1bd02631';
    return(
        <div className="container">
           
            <div className="mainContent">
            <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to EduSmart</h1>
                    <p>Hello Abinath, Welcome back!</p>
                </div>
            <div className="searchBar flex">
                <input type='text' placeholder='Search Courses'/>
                <BiSearchAlt className='icon'/>
            </div>

            <div className="adminDiv flex">
                <MdNotifications className='icon'/>
                <div className="adminImage">
                    <img src={img} alt="Admin Image"/>
                </div>
            </div>

        </div>
        </div>
            <ChatRoom/>
            </div>
        </div>

    );
}

export default Chat;