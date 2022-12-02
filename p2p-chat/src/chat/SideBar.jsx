import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import "./ChatArea.css";
import ChatArea from "./ChatArea";
import AddFriendArea from "./AddFriendArea";
import Loading from "../loading/loading";

import {database} from "../firebase";
import { child, ref, set, get, update } from "firebase/database";


export default function SideBar ( {
    user, setUser, setLogin,
    allFriend, setAllFriend,
    allStranger, setAllStranger,
    allPort, setAllPort
} ) {

    const db = ref(database);
    window.addEventListener("beforeunload", function (e) {
            update(child(db, 'account/' + user[0].id), {
                is_active: "false",
            })                      
        });

    const [openLoading, setOpenLoading] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const [openAddFriend, setOpenAddFriend] = useState(true);
    const [friend, setFriend] = useState();

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [searchFriend, setSearchFriend] = useState(allFriend);

    const [port, setPort] = useState(1000);   

     useEffect(()=>{
        setOpenLoading(true);
        setSearchFriend([]);
        allFriend.forEach(friend => {
            friend.username.includes(search) && setSearchFriend(oldArray => [...oldArray, friend]);
        })
        setOpenLoading(false);
    },[search, allFriend])

    const handleOpenChat = (value) => {
        if (value.id == 16 || value.id ==2 || value.id == 1){
            setOpenLoading(true);
            console.log(value);
            console.log(allPort);

            allPort.every((e)=>{
                console.log(e.friend_id === value.id)
                if ((e.friend_id === value.id && e.current_id === user[0].id) || 
                    (e.friend_id === user[0].id && e.current_id === value.id)) {
                    setPort(e.port + 1000);
                    return false;
                }
                else return true
            })

                // console.log(ws.readyState)
                // Axios.post("http://127.0.0.1:5000:1/post", 1)
            //         .then((response)=>{
            //             // console.log(ws.readyState)
            //         })
            //         .catch((err)=>{})
            // } 
            // else if (ws.readyState === 1) {

            // } 

            // console.log(ws);
            // if (ws.readyState)
            setFriend(value)
            setOpenAddFriend(false);
            setOpenLoading(false);
        }
        else {
            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false);
            }, 1200);
        }
    }

    return (
        <div className="w-100 vh-100 row g-0">
            {openLoading && <Loading />}
            <div className="col-3 p-5 chat-container">
                <div className="text-light mb-4 row g-0 justify-content-center align-items-center ps-1">
                    <div className="col pb-3">
                        <p className="display-5 fw-bold">{user[0].username}</p>
                        <p className="text-success fs-2 fw-bolder">Online</p>
                    </div>
                    <div className="col-xxl-4 col-xl-12">
                        <button type="button" className="float-end btn btn-lg btn-danger fs-2 w-100"                             
                            onClick={()=>{update(child(db, 'account/' +  user[0].id), {is_active: "false",}); setLogin(false); navigate("../");  }}>
                            Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
                    <button type="button" className="float-end btn btn-lg btn-warning fs-2 w-100 mt-4 text-dark p-2" 
                            onClick={()=>{setOpenAddFriend(true)}}>
                        Add friend <i className="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
                <div className="p-3 m-1 mb-5 bg-light rounded fs-3 text-secondary justify-content-center align-items-center d-flex">
                    <input type="text" id="friend-search" placeholder="Search" className="w-100 border border-0 bg-light"
                            value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <i className="fa-solid fa-magnifying-glass ms-2"></i>
                </div>
                <div className="p-1 bg-secondary mb-4 rounded fs-3"></div>
                {openAlert && 
                    <div class="alert alert-success mb-0 fs-1 mt-3 mb-3 text-center" role="alert">
                        <i class="fa-solid fa-check me-2"></i>
                        User offline
                    </div>
                }
                <div className="">
                    {searchFriend.map((value, index) => {
                        return (
                            <div key={index} className="chat-tab bg-light w-90 p-3" onClick={()=>handleOpenChat(value)}>
                                <p className="fw-bold pl-2">
                                    <span className={"fs-5 float-start p-2 pb-3" + ((value.id ==16 || value.id == 2 || value.id == 1) ? " text-success" : " text-secondary")}><i className="fa-solid fa-circle p-1"></i> </span>
                                    {value.username}
                                    {(value.id ==16 || value.id == 2 || value.id == 1) ?
                                        <p className="text-success fs-2">Online</p> :
                                        <p className="text-secondary fs-2">Offline</p> }
                                    {/* <span className="float-end fw-light fs-3 pt-2">16:45</span> */}
                                </p>
                                {/* <p className={"fs-2 pt-2 pr-3 text-message" + " fw-bold"}>
                                    Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline
                                </p> */}
                            </div>
                        )
                    })}
                    {/* <div className="chat-tab bg-light w-90 p-3" onClick={()=>handleOpenChat()}>
                        <p className="fw-bold pl-2">
                            <span className="text-secondary fs-5 float-start p-2"><i className="fa-solid fa-circle p-1"></i> </span>
                            Lục Huy
                            <span className="float-end fw-light fs-3 pt-2">16:45</span>
                        </p>
                        <p className="fs-2 pt-2 pr-3 text-message">
                            Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline huhuh
                        </p>
                    </div>
                    <div className="chat-tab bg-light w-90 p-3" onClick={()=>handleOpenChat()}>
                        <p className="fw-bold pl-2">
                            <span className="text-warning fs-5 float-start p-2"><i className="fa-solid fa-circle p-1"></i> </span>
                            Lộc Lê 
                            <span className="float-end fw-light fs-3 pt-2">16:45</span>
                        </p>
                        <p className="fs-2 pt-2 pr-3 text-message fw-bold">
                            Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline huhuh
                        </p>
                    </div>
                    <div className="chat-tab bg-light w-90 p-3" onClick={()=>handleOpenChat()}>
                        <p className="fw-bold pl-2">
                            <span className="text-success fs-5 float-start p-2"><i className="fa-solid fa-circle p-1"></i> </span>
                            Hồng Đức 
                            <span className="float-end fw-light fs-3 pt-2">16:45</span>
                        </p>
                        <p className="fs-2 pt-2 pr-3 text-message">
                            Bạn: Buồn ngủ quá trời mẹ ơi khóc khóc các kiểu, rồi sao coi đá banh huhu, quá là nhiều deadline huhuh
                        </p>
                    </div> */}
                </div>
            </div>
            {!openAddFriend && <ChatArea user={user} friend={friend} port={port}/>}
            {openAddFriend && <AddFriendArea user={user} allStranger={allStranger} setAllStranger={setAllStranger} setAllFriend={setAllFriend} />}
        </div>
    )
}