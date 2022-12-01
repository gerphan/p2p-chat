import React, { useState } from "react";
import "./ChatArea.css";

export default function ChatArea ( {} ) {
    // const [message, setMessage] = useState('');

    return(
        <div className="col chat-area">
            <p className="display-4 shadow fw-bold border-bottom p-4">
                <span className="text-success fs-4 float-start pt-1"><i className="fa-solid fa-circle p-4 pt-3"></i> </span>
                Nhật Hạ
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
                <i className="fa-solid fa-file-arrow-up ps-4 pe-4 text-white text-center"></i>
                <i className="fa-solid fa-paper-plane pe-4 text-white text-center"></i>
            </div>
        </div>
    )
}