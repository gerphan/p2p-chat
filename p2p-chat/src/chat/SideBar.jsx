import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatArea.css";
import ChatArea from "./ChatArea";
import AddFriendArea from "./AddFriendArea";

export default function SideBar () {
    const [openChatArea, setOpenChatArea] = useState(false);
    const [openAddFriend, setOpenAddFriend] = useState(true);

    const navigate = useNavigate();

    const [allUser, setAllUser] = useState([
        {'id' : 'nhatha', 'is_friend' : 1}, 
        {'id' : 'luchuy', 'is_friend' : 0},
        {'id' : 'hongduc', 'is_friend' : 1},
        {'id' : 'locle', 'is_friend' : 0},
        {'id' : 'anonymous', 'is_friend' : 0},
    ]);

    return (
        <div className="w-100 vh-100 row g-0">
            <div className="col-3 p-5 chat-container">
                <div className="text-light mb-4 row g-0 justify-content-center align-items-center ps-1">
                    <div className="col pb-3">
                        <p className="display-5 fw-bold">Anonymous</p>
                        <p className="text-success fs-2 fw-bolder">Online</p>
                    </div>
                    <div className="col-xxl-4 col-xl-12">
                        <button type="button" className="float-end btn btn-lg btn-danger fs-2 w-100" onClick={()=>{navigate("../")}}>
                            Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
                    <button type="button" className="float-end btn btn-lg btn-warning fs-2 w-100 mt-4 text-dark p-2" 
                            onClick={()=>{setOpenChatArea(false); setOpenAddFriend(true)}}>
                        Add friend <i className="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
                <div className="p-3 m-1 mb-5 bg-light rounded fs-3 text-secondary justify-content-center align-items-center d-flex">
                    <input type="text" id="friend-search" placeholder="Search" className="w-100 border border-0 bg-light"/>
                    <i className="fa-solid fa-magnifying-glass ms-2"></i>
                </div>
                <div className="p-1 bg-secondary mb-4 rounded fs-3"></div>
                <div className="">
                    <div className="chat-tab bg-light w-90 p-3" onClick={()=>{setOpenAddFriend(false) ;setOpenChatArea(true)}}>
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
            {openChatArea && <ChatArea setOpenChatArea={setOpenChatArea} allUser={allUser} setAllUser={setAllUser} />}
            {openAddFriend && <AddFriendArea allUser={allUser} setAllUser={setAllUser}/>}
        </div>
    )
}