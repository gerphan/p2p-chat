import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ChatArea.css";

export default function ChatArea ( {user, friend} ) {
    // const [message, setMessage] = useState('');

    let ws = new WebSocket(`ws://localhost:1/`);

    // console.log(ws.readyState);

    if (ws.readyState ===0) {
        Axios.post(`http://127.0.0.1:5000/creator/2`)
            .then((res)=>{
                console.log(res);
            })
    }

    // ws = new WebSocket(`ws://localhost:1/`);

    // useEffect(()=>{console.log(ws.readyState)},[ws])

    // console.log(ws.readyState)

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
            </div>
            <div className="justify-content-center align-items-center type-area">
                <textarea rows="1" id="message" placeholder="Aa..."  className="border border-0 rounded-4 p-3 ps-4 fs-1" ></textarea>
                <div className="file-button ps-4 pe-4">
                    <input type="file" name="file" id="file" data-multiple-caption="{count} files selected" multiple />
                    <i className="fa-solid fa-file-arrow-up text-white text-center"></i>
                </div>
                <i className="fa-solid fa-paper-plane pe-4 text-white text-center"></i>
            </div>
        </div>
    )
}