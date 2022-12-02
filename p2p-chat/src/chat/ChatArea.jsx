import React, { useState, useEffect, Component } from "react";
import Axios from "axios";
import "./ChatArea.css";
import { child, ref, set, update, onValue } from "firebase/database";
import {database} from "../firebase"


export default function ChatArea ( {user, friend, port } ){
    const db = ref(database);

    const [message, setMessage] = useState('');
    const [oldMessage, setOldMessage] = useState([]);
    const [oldFriendMessage, setOldFriendMessage] = useState([]);
    const [trigger, settrigger] = useState(false);

    const [ha, setHa] =useState('');
    const [loc, setloc] = useState('');

    let data, data1;
    // if (user[0].username == 'locle'){
        
    // }


        onValue(child(db, 'messsage/1016/ha'), (snapshot) => {
            data =snapshot.toJSON()['1'];
            // setHa(data)
            // setOldMessage(oldArray => [...oldArray, data])
        });
    // } else {
        onValue(child(db, 'messsage/1016/loc'), (snapshot) => {
            data1 =snapshot.toJSON()['1'];
            // setloc(data1);
            // setOldFriendMessage(oldArray => [...oldArray, data])
        });

    // useEffect(()=>{
    //     onValue(child(db, 'messsage/1016/loc'), (snapshot) => {
    //         data1 =snapshot.toJSON()['1'].content;
    //         // setloc(data1);
    //         // setOldFriendMessage(oldArray => [...oldArray, data])
    //     });
    // },[trigger])

    // console.log(data)

    // const [ws, setWs] = useState(new WebSocket('ws://localhost:' + port + '/'))

    // console.log(port)
    
 
    //
    useEffect(()=>{
        setTimeout(() => {
            settrigger(!trigger)
        }, 50);
    },[trigger])

    useEffect(()=>{
        Axios.get('http://127.0.0.1:5000/creator/' + port)
            .then((res)=> {
                console.log('a')
                console.log(res)
                if (!res.data) {
                    fetch('http://127.0.0.1:5000/creator/' + port, { 
                        method: 'POST', 
                        mode: 'cors', 
                        body: JSON.stringify()
                        
                    })
                }
            })
    },[])

    let ws = new WebSocket('ws://localhost:' + port + '/');

    // console.log(ws)
    // ws.onopen = function () {
    //     ws.send('Hello Serverrrr!');
    // }
    
    // if (ws.readyState !==1) {
        // fetch('http://127.0.0.1:5000/creator/' + port, { 
        //     method: 'POST', 
        //     mode: 'cors', 
        //     body: JSON.stringify()
            
        // })
    // }

    const sendMessage = (e) =>{
        e.preventDefault();
        if (message.trim() !== ''){ 
            let a = {message: message.trim(), id: user[0].id, 
                date:new Date().toLocaleTimeString('en-US', { hour12: false, 
                hour: "numeric", 
                minute: "numeric"})}
                console.log(a)
            ws.send(JSON.stringify(a));
            // var file = document
            //     .querySelector('input[type="file"]')
            //     .files[0];
            // ws.send(file);
            if (user[0].username == 'locle') {
                set(child(db, 'messsage/1016/ha/' + (Number(oldMessage.length) + 1)) ,{
                    content:message,
                    time:a.date
                })
            } else if(user[0].username == 'hanguyen') {
                console.log(oldFriendMessage.length);
                set(child(db, 'messsage/1016/loc/' + (Number(oldFriendMessage.length) + 1)) ,{
                    content:message,
                    time:a.date
                })
            }
            ws.addEventListener('message', (event) => {
                var data = JSON.parse(event.data);
                console.log(data)
                console.log(oldMessage)
                // Xử lý data ở đây
                if (user[0].username == 'locle') {
                    setOldFriendMessage(oldArray => [...oldArray, data]);
                }
                else { 
                    setOldMessage(oldArray => [...oldArray, data]); 
                }
            });
            // setOldMessage(oldArray => [...oldArray, a]);
            // settrigger(!trigger)
            setMessage('');
        }
    }

    console.log(oldMessage);
    console.log(oldFriendMessage);

    return(
        <div className="col chat-area">
            <p className="display-4 shadow fw-bold border-bottom p-4">
                <span className="text-success fs-4 float-start pt-1"><i className="fa-solid fa-circle p-4 pt-3"></i> </span>
                {friend.username}
            </p>
            <div className="p-5 fs-1 display-area">
                {/* {oldMessage.map((item, index)=>{
                    return (
                        <div className="mb-5 row g-0">
                            {data.id === user[0].id && <p className="col"></p>}
                            <p className={"chat-bubble"+ (data.id === user[0].id ? " col-3 self" : " friend")}>
                                {data.content}
                                <span>16:45</span>
                            </p>
                        </div> 
                    ) 
                })} */}
                {user[0].username =="hanguyen" && data && data1 &&
                    <React.Fragment>
                        <div className="mb-5 row g-0">
                            <p className="chat-bubble friend">
                                {data.content}
                                <span>{data.time}</span>
                            </p>
                        </div>
                        <div className="mb-5 row g-0">
                            <p className="col"></p>
                            <p className="col-3 chat-bubble self">
                                {data1.content}
                                <span>{data1.time}</span>
                            </p>
                        </div>
                    </React.Fragment>
                }
                {user[0].username =="locle" && data && data1 &&
                <React.Fragment>
                    <div className="mb-5 row g-0">
                        <p className="chat-bubble friend">
                            {data1.content}
                            <span>{data1.time}</span>
                        </p>
                    </div>
                    <div className="mb-5 row g-0">
                        <p className="col"></p>
                        <p className="col-3 chat-bubble self">
                            {data.content}
                            <span>{data.time}</span>
                        </p>
                    </div>
                </React.Fragment>}

            </div>
            <form className="justify-content-center align-items-center type-area" 
                    onSubmit={(e)=>{sendMessage(e)}} >
                <textarea rows="1" id="message" placeholder="Aa..."  className="border border-0 rounded-4 p-3 ps-4 fs-1" 
                        value={message} onChange={e=>setMessage(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {sendMessage(e)}}}        
                ></textarea>
                <div className="file-button ps-4 pe-4">
                    <input type="file" name="file" id="file" data-multiple-caption="{count} files selected" multiple />
                    <i className="fa-solid fa-file-arrow-up text-white text-center"></i>
                </div>
                <button type="submit" className="submit-message"> <i className="fa-solid fa-paper-plane pe-4 text-white text-center"></i></button>
            </form>
        </div>
    )
}