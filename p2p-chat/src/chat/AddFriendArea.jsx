import ChatArea from "./ChatArea";

export default function AddFriendArea () {
    return(
        <div className="col chat-area">
            <div className="add-friend w-50 h-25">
                <p className="display-4 fw-bold p-4 text-center">Add friend</p> 
                <div className="p-3 m-1 mb-3 bg-light rounded border fs-3 text-secondary row justify-content-center align-items-center">
                    <input type="text" id="friend-search" placeholder="Search" className="col-xxl-11 col-xl-12 border border-0 bg-light"/>
                    <i className="fa-solid fa-magnifying-glass col text-end d-none d-xxl-block"></i>
                </div>
            </div>
        </div>
    )
}