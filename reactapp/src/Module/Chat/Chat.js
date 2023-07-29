import React from "react";

import ChatRoom from "./ChatRoom";
import  {BiSearchAlt} from 'react-icons/bi';
import { MdNotifications} from 'react-icons/md';
import NavCandidate from "../../Components/NavCandidate";




function Chat(){
    const img='https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689345912~exp=1689346512~hmac=7ace809ed21bb2e94386545fceccbd8ac28b948f13e0b8c2b5f943ea1bd02631';
    return(
        <div>
            <NavCandidate/>
        <div className="container123">
           
            <div className="mainContent">
           
            <ChatRoom/>
            </div>
        </div>
        </div>

    );
}

export default Chat;