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
          <img src="https://img.freepik.com/free-photo/pretty-curly-woman-holds-modern-mobile-phone-types-messages-smartphone-device-enjoys-online-communication-downloads-special-app-chatting-smiles-tenderly-isolated-purple-wall_273609-42737.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=sph" alt="Register" />
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
