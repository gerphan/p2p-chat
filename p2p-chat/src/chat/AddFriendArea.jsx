import React, { useState, useEffect } from "react";
import Axios from "axios"

export default function AddFriendArea ( { user, allStranger, setAllStranger, setAllFriend } ) {

    const [openAlert, setOpenAlert] = useState(false);

    const handleAddFriend = (e) => {
        Axios.get("http://localhost:3001/cn-get-port")
            .then((response)=>{
                Axios.post("http://localhost:3001/cn-add-friend", {
                    id: response.data[0].length,
                    current_id: user[0].id,
                    friend_id: e.id,
                    port: response.data[0].length
                })
                    .then(()=>{
                        setAllStranger(allStranger.filter(item => item.id !== e.id));
                        setAllFriend(oldArray => [...oldArray, e]);
                        setOpenAlert(true);
                        setTimeout(() => {
                            setOpenAlert(false)
                        }, 1200);
                    })  
        })      
    }

    const [search, setSearch] = useState('');
    const [searchUser, setSearchUser] = useState([]);

    useEffect(()=>{
        setSearchUser([]);
        if (search !== '') {
            allStranger.forEach(user => {
                user.username.includes(search) && setSearchUser(oldArray => [...oldArray, user]);
            })
        }
    },[search, allStranger])

    return(
        <div className="col chat-area">
            <div className="add-friend">
                <p className="display-4 fw-bold p-4 text-center">ADD NEW FRIEND HERE ...</p> 
                <div className="p-4 m-1 rounded-5 bg-dark fs-1 text-white justify-content-center align-items-center d-flex">
                    <input type="text" id="friend-search" placeholder="Search" className="w-100 border border-0 bg-dark text-white" 
                            value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <i className="fa-solid fa-magnifying-glass ms-3"></i>
                </div>
                <div className="mt-3 p-4 rounded-5 search-tab">
                    {searchUser.map((value, index)=>{
                        return (
                            <div key={index} className="add-tab bg-light d-flex">
                                <p className="fw-bold w-100 p-4 text-start">
                                    {value.username}
                                </p>
                                <i className="fa-solid fa-circle-plus p-4" onClick={()=>{handleAddFriend(value)}}></i>
                            </div>
                        )
                    })}
                </div>
                {openAlert && 
                <div class="alert alert-success mb-0 fs-1 mt-3 mb-3 text-center" role="alert">
                    <i class="fa-solid fa-check me-2"></i>
                    Add successfull
                </div>
                }
            </div>
        </div>
    )
}