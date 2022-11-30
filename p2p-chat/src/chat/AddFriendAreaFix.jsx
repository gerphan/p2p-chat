import ChatArea from "./ChatArea";

export default function AddFriendArea () {
    return(
        <div className="col chat-area">
            <div className="add-friend">
                <p className="display-4 fw-bold p-4 text-center">ADD NEW FRIEND HERE ...</p> 
                <div className="p-4 m-1 rounded-5 bg-dark fs-1 text-white justify-content-center align-items-center d-flex">
                    <input type="text" id="friend-search" placeholder="Search" className="w-100 border border-0 bg-dark text-white"/>
                    <i className="fa-solid fa-magnifying-glass ms-3"></i>
                </div>
                <div className="mt-4 p-4 pt-5 rounded-4 search-tab">
                    <div className="chat-tab bg-light d-flex">
                        <p className="fw-bold w-100 p-4 text-start">
                            Nhật Hạ 
                        </p>
                        <i class="fa-solid fa-circle-plus p-4"></i>
                    </div>
                    <div className="chat-tab bg-light d-flex">
                        <p className="fw-bold w-100 p-4 text-start">
                            Lục Huy 
                        </p>
                        <i class="fa-solid fa-circle-plus p-4"></i>
                    </div>
                    <div className="chat-tab bg-light d-flex">
                        <p className="fw-bold w-100 p-4 text-start">
                            Hồng Đức
                        </p>
                        <i class="fa-solid fa-circle-plus p-4"></i>
                    </div>
                    <div className="chat-tab bg-light d-flex">
                        <p className="fw-bold w-100 p-4 text-start">
                            Tấn Lộc
                        </p>
                        <i class="fa-solid fa-circle-plus p-4"></i>
                    </div>
                </div>
                <div class="alert alert-success mb-0 fs-1 mt-3 mb-3 text-center" role="alert">
                        <i class="fa-solid fa-check me-2"></i>
                        Add successfull
                </div>
            </div>
        </div>
    )
}