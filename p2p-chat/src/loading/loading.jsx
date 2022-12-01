import React from "react";
import { useNavigate } from "react-router-dom";
import "./loading.css"

function Loading() {
    const navigate = useNavigate();

    return (
        <div className="LoadingContainer w-100 h-100 d-flex">
            <div id="load">
                <div>G</div>
                <div>N</div>
                <div>I</div>
                <div>D</div>
                <div>A</div>
                <div>O</div>
                <div>L</div>
            </div>
        </div>
    );
}
  
export default Loading;