import ChatArea from "./ChatArea";

export default function AddFriendArea () {
    return(
        <div className="col chat-area">
            <div className="add-friend">
                <p className="display-4 fw-bold p-4 text-center">ADD NEW FRIEND HERE ...</p> 
                <div className="p-4 m-1 rounded-5 bg-dark fs-1 text-white justify-content-center align-items-center d-flex">
                    <input type="text" id="friend-search" placeholder="Search" className="w-100 border border-0 bg-dark text-white"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
}