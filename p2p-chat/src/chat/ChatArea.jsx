import React, { useState, useEffect, Component } from "react";
import Axios from "axios";
import "./ChatArea.css";

export default function ChatArea ( {user, friend, port} ){
    const [message, setMessage] = useState('');
    const [oldMessage, setOldMessage] = useState([]);
    const [trigger, settrigger] = useState(false);

    // console.log(port)

    let ws = new WebSocket('ws://localhost:8008/');
 
    // console.log(ws.readyState)
    // ws.onopen = function () {
    //     ws.send('Hello Serverrrr!');
    // }
    
    // if (ws.readyState !==1) {
    //     fetch('http://127.0.0.1:5000/creator/8008', { 
    //         method: 'POST', 
    //         mode: 'cors', 
    //         body: JSON.stringify()
            
    //     })
    // }

    // var webSocketFactory = {
    //     connect: function(url) {
    //       var ws = new WebSocket(url);
    //       ws.addEventListener("error", e => {
    //         // readyState === 3 is CLOSED
    //         if (e.target.readyState === 3) {
    //             fetch('http://127.0.0.1:5000/creator/8001', { 
    //                 method: 'POST', 
    //                 mode: 'cors', 
    //                 body: JSON.stringify()
                    
    //             })      
    //         }
    //       });
    //     }
    //   };
      
    // var ws = webSocketFactory.connect("ws://localhost:8001/");
        

    useEffect(()=>{
        setTimeout(() => {
            settrigger(!trigger)
        }, 1000);
        ws.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        ws.onmessage = (event) => {
            var data = JSON.parse(event.data);
            console.log(data)
            console.log(oldMessage)
            // Xử lý data ở đây
            setOldMessage(oldArray => [...oldArray, data]);
        }
    },[trigger])
        


    const sendMessage = (e) =>{
        e.preventDefault();
        let a = {message: message, id: user[0].id}
        ws.send(JSON.stringify(a));
        // setOldMessage(oldArray => [...oldArray, a]);
        // settrigger(!trigger)
    }

    return(
        <div className="col chat-area">
            <p className="display-4 shadow fw-bold border-bottom p-4">
                <span className="text-success fs-4 float-start pt-1"><i className="fa-solid fa-circle p-4 pt-3"></i> </span>
                {friend.username}
            </p>
            <div className="p-5 fs-1 display-area">
                <div className="mb-5 row g-0">
                    <p className="chat-bubble friend">
                        Hello bà già giữa mùa đông cô đơn lạnh lẽo đao lưng mỏi gối tê tay bà con cô bác mua  salonpad
                        <span>16:45</span>
                    </p>
                </div>
                <div className="mb-5 row g-0">
                    <p className="col"></p>
                    <p className="col-3 chat-bubble self">
                        Hello bà già giữa mùa đông cô đơn lạnh lẽo đao lưng mỏi gối tê tay bà con cô bác mua
                        <span>16:45</span>
                    </p>
                </div>
                {oldMessage.map((item, index)=>{
                    return (
                        <div key={index} className="mb-5 row g-0">
                            {item.id === user[0].id && <p className="col"></p>}
                            <p className={"chat-bubble"+ (item.id === user[0].id ? " col-3 self" : " friend")}>
                                {item.message}
                                <span>16:45</span>
                            </p>
                        </div>
                    ) 
                })}

            </div>
            <form className="justify-content-center align-items-center type-area" onSubmit={(e)=>{sendMessage(e)}}>
                <textarea rows="1" id="message" placeholder="Aa..."  className="border border-0 rounded-4 p-3 ps-4 fs-1" 
                        value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                <div className="file-button ps-4 pe-4">
                    <input type="file" name="file" id="file" data-multiple-caption="{count} files selected" multiple />
                    <i className="fa-solid fa-file-arrow-up text-white text-center"></i>
                </div>
                <button type="submit" className="submit-message"> <i className="fa-solid fa-paper-plane pe-4 text-white text-center"></i></button>
            </form>
        </div>
    )
}