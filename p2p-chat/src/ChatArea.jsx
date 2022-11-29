import React from "react";
import "./ChatArea.css";

export default function ChatArea () {
    return (
        <div className="w-100 vh-100 row g-0">
            <div className="col-3 p-5 chat-container">
                <div className="text-light mb-4 row justify-content-center align-items-center ps-2">
                    <div className="col pb-3">
                        <p className="display-5 fw-bold">Anonymous</p>
                        <p className="text-success fs-2 fw-bolder">Online</p>
                    </div>
                    <div className="col-xxl-4 col-xl-12">
                        <button type="button" className="float-end btn btn-lg btn-danger fs-3 w-100" >
                            Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
                </div>
                <div className="p-3 m-1 mb-5 bg-light rounded fs-3 text-secondary row justify-content-center align-items-center">
                    <input type="text" id="friend-search" placeholder="Search" className="col-xxl-10 col-xl-12 border border-0 bg-light"/>
                    <i className="fa-solid fa-magnifying-glass col text-end d-none d-xxl-block"></i>
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
                <div className="row g-0 justify-content-center align-items-center type-area">
                  <textarea id="message" placeholder="Aa..."  className="border border-0 rounded-4 p-3 ps-4 fs-1 col"></textarea>
                  <div className="col-1 text-white text-end">
                    <i class="fa-solid fa-file-arrow-up ps-3 pe-4 text-white"></i>
                    <i class="fa-solid fa-paper-plane pe-4"></i>
                  </div>
                </div>
                <div className="add-friend w-50 h-25">
                    <p className="display-4 fw-bold p-4 text-center">Add friend</p> 
                    <div className="p-3 m-1 mb-3 bg-light rounded border fs-3 text-secondary row justify-content-center align-items-center">
                        <input type="text" id="friend-search" placeholder="Search" className="col-xxl-11 col-xl-12 border border-0 bg-light"/>
                        <i className="fa-solid fa-magnifying-glass col text-end d-none d-xxl-block"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}