import React, { useState, useEffect } from "react";

export default function AddFriendArea ( { allUser, setAllUser } ) {

    const [openAlert, setOpenAlert] = useState(false);

    const handleAddFriend = () => {
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false)
        }, 1200);
    }

    const [search, setSearch] = useState('');
    const [searchUser, setSearchUser] = useState([]);

    useEffect(()=>{
        setSearchUser([]);
        if (search !== '') {
            allUser.forEach(user => {
                user.id.includes(search) && setSearchUser(oldArray => [...oldArray, user]);
            })
        }
    },[search])

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
                        return !value.is_friend && (
                            <div key={index} className="add-tab bg-light d-flex">
                                <p className="fw-bold w-100 p-4 text-start">
                                    {value.id}
                                </p>
                                <i className="fa-solid fa-circle-plus p-4" onClick={()=>{handleAddFriend()}}></i>
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