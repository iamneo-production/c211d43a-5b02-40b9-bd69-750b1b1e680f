import React, { useEffect, useState } from 'react';
import './../Chat/ChatRoom.css';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { AiOutlineSend } from 'react-icons/ai';
import { IoMdChatboxes } from 'react-icons/io';

var stompClient = null;

const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, "connected": true });
    stompClient.subscribe('/chatroom/public', onMessageReceived);
    stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage);
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "message": value });
  };

  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE"
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
    }
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE"
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
    }
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "username": value });
  };

  const registerUser = () => {
    connect();
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = [...privateChats.keys()].filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Container">
      {userData.connected ? (
        <div className="chat-box">
          <div className="member-list">
           
            <ul>
              <h2>Chats<IoMdChatboxes/></h2>
              <input
              type="text"
              placeholder="Search chats..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
              <li onClick={() => setTab("CHATROOM")} className={`member ${tab === "CHATROOM" && "active"}`}>
                <img
                  src="URL_OF_MEMBER_PROFILE_PICTURE"
                  alt="Pic"
                />
                Mentor
              </li>
              {filteredMembers.map((name, index) => (
                <li onClick={() => setTab(name)} className={`member ${tab === name && "active"}`} key={index}>
                  <img
                    src="URL_OF_MEMBER_PROFILE_PICTURE"
                    alt="Profile"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {tab === "CHATROOM" && (
            <div className="chat-content">
              <div className="profile">
                <img src="" alt="Profile" />
                <h2>Instructor</h2>
              </div>
              <ul className="chat-messages">
                <div className="message-container">
                  {publicChats.map((chat, index) => (
                    <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                      {chat.senderName !== userData.username && (
                        <div className="avatar">
                          <img src={chat.senderImage} alt="Avatar" />
                        </div>
                      )}
                      <div className="message-data">
                        {chat.senderName !== userData.username && (
                          <div className="sender-name">{chat.senderName}</div>
                        )}
                        {chat.message}
                      </div>
                      {chat.senderName === userData.username && (
                        <div className="avatar self">
                          <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1689345912~exp=1689346512~hmac=7ace809ed21bb2e94386545fceccbd8ac28b948f13e0b8c2b5f943ea1bd02631" alt="User" />
                        </div>
                      )}
                    </li>
                  ))}
                </div>
              </ul>
              <div className="send-message">
                <input type="text" className="input-message" placeholder="Enter the message" value={userData.message} onChange={handleMessage} />
                <button type="button" className="send-button" onClick={sendValue}><AiOutlineSend /></button>
              </div>
            </div>
          )}
          {tab !== "CHATROOM" && (
            <div className="chat-content">
              <div className="profile">
                <img src="" alt="Profile" />
                <h2>{userData.username}</h2>
              </div>
              <div className="message-box">
                <ul className="chat-messages">
                  {[...privateChats.get(tab)].map((chat, index) => (
                    <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                      {chat.senderName !== userData.username && (
                        <div className="avatar">
                          <img src={chat.senderImage} alt="User Avatar" />
                        </div>
                      )}
                      <div className="message-data">{chat.message}</div>
                      {chat.senderName === userData.username && (
                        <div className="avatar self">
                          <img src={chat.senderImage} alt="User Avatar" />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="send-message">
                <input type="text" className="input-message" placeholder="Enter the message" value={userData.message} onChange={handleMessage} />
                <button type="button" className="send-button" onClick={sendPrivateValue}><AiOutlineSend /></button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="register-box">
          <img src="https://lh3.googleusercontent.com/pw/AIL4fc_SALkyVTte5bqYwaLwVta5svGWKlxi8fx7KjgTKodKbVQ-Nb3cP4g6rQNo8jBSi5OoKZO2JFskWnOrsQ4-HZQ-cT5DIw0l6QT1yJbqcZSF79VojEbVr2IGKJt2cKjLfxEu3YHTr2igMIYUsobtZEuyJI-KWRHwFb_SrxY486oZedhE8HuS_F2Hf3OiXAyyC-Dc-K4W190IYX7134nHTAa-PSlmqMmNNDkM67Cpw4yySF8tETl-pSdWGOskYPuks0yjXUVsluvcGIj6jzZWNC8IfpXwKv1veYX5j3GnT-QzZfJH6X7C4g6oMDfEK38mxdHMslA0dQG4R9JwZ_KMuTRgWujgbGoxw1L87-rv_osEHJLMl21-tLlpJ37UrKCyYSnN7P3itMNInVUZnXHLA-8EH34fr945fNznlKozCn8sccbfdwPY20QZSd0DsbUWqMuFcMOWwsKl3jAvoWMF7lz7rDHAXMqdk9YiwoTaJo2_u2xzvdu9yO5o4dcv3BnkvMxKnQC0iFyabG8qt8CJXnBwaIz0jYUYl6fDlk_LlHvin0MokaCwf4tCoyG3S9QlCni8sKWFZ3RbgW6Gx6AfeCyn7Fg2mkJmZQixdocgad2rdEcZqDj06fBqOJMbAXas745LhWRWjQxPZlkyX_PJUZzOjdV2lOqygUoScwCXuXupFjSn5kdReSixvaXUhdGJ68Y4RDdGCnnbf2V6sbFxRIxYDxAc4JniVpzVIlVLtzq7qJ1vaFM9XNST29JT6mooi_ZWMVNPcaRWT53G1Ef5kBvqOhiHPOTe3YZcXtUKqGck5lWvJG_Sqg4I9hloqHXhDPPEKizBS20hK8wXvxbBJ5ugpp0xMbPM-vjil8YbqJUYjzKuusgBz_JopxVRA1gLBp45I7wvMQr1fSzgpugAxqBd=w595-h419-s-no?authuser=0" alt="Register" />
          <div className="register">
            <input
              id="user-name"
              placeholder="Enter your name"
              name="userName"
              value={userData.username}
              onChange={handleUsername}
              margin="normal"
            />
            <div className="button" onClick={registerUser}>
              Get Started
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
