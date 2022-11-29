import React from "react";
import "./ChatArea.css";

export default function ChatArea () {
    return (
        <div className="w-100 vh-100 row g-0">
            <div className="col-3 p-5 chat-container">
                <div className="text-light mb-4 row justify-content-center align-items-center">
                    <div className="col ps-5">
                        <p className="display-5 fw-bold">Anonymous</p>
                        <p className="text-success fs-2 fw-bolder">Online</p>
                    </div>
                    <div className="col-4">
                        <button type="button" className="float-end btn btn-lg btn-danger fs-3" >
                            Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
                </div>
                <div className="p-3 m-1 mb-5 bg-light rounded fs-3 text-secondary row justify-content-center align-items-center">
                    <input type="text" id="friend-search" placeholder="Search" className="col-11 border border-0 bg-light"/>
                    <i className="fa-solid fa-magnifying-glass col"></i>
                </div>
                <div className="p-1 bg-secondary mb-4 rounded fs-3"></div>
                <div className="">
                    <div className="chat-tab bg-light w-90 p-3">
                        <p className="fw-bold pl-2">
                            <span className="text-success fs-5 float-start p-2"><i className="fa-solid fa-circle p-1"></i> </span>
                            Nhật Hạ 
                            <span className="float-end fw-light fs-3 pt-2">16:45</span>
                        </p>
                        <p className="fs-2 pt-2 pr-3 text-message fw-bold">
                            Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline
                        </p>
                    </div>
                    <div className="chat-tab bg-light w-90 p-3">
                        <p className="fw-bold pl-2">
                            <span className="text-secondary fs-5 float-start p-2"><i className="fa-solid fa-circle p-1"></i> </span>
                            Lục Huy
                            <span className="float-end fw-light fs-3 pt-2">16:45</span>
                        </p>
                        <p className="fs-2 pt-2 pr-3 text-message">
                            Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline huhuh
                        </p>
                    </div>
                    <div className="chat-tab bg-light w-90 p-3">
                        <p className="fw-bold pl-2">
                            <span className="text-warning fs-5 float-start p-2"><i className="fa-solid fa-circle p-1"></i> </span>
                            Lộc Lê 
                            <span className="float-end fw-light fs-3 pt-2">16:45</span>
                        </p>
                        <p className="fs-2 pt-2 pr-3 text-message fw-bold">
                            Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline huhuh
                        </p>
                    </div>
                    <div className="chat-tab bg-light w-90 p-3">
                        <p className="fw-bold pl-2">
                            <span className="text-success fs-5 float-start p-2"><i className="fa-solid fa-circle p-1"></i> </span>
                            Hồng Đức 
                            <span className="float-end fw-light fs-3 pt-2">16:45</span>
                        </p>
                        <p className="fs-2 pt-2 pr-3 text-message">
                            Bạn: Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline huhuh
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <p className="display-5 shadow fw-bold border-bottom m-0 p-5 pb-4">Nhật Hạ</p>
                {/* rounded-4 border border-2 border-start-0 border-dark */}
                <div className="p-5 fs-1">
                    <p className="text-light chat-bubble ">Hello bà già giữa mùa đông cô đơn lạnh lẽo đao lưng mỏi gối tê tay bà con cô bác mua salonpad</p>
                </div>
            </div>
        </div>
    )
}