import React from "react";
import "./videothumbnail.css";
// import { useState } from "react";

function VideoThumbnail(props) {
   
   
  return (
    <>
      <div className="videoThumbnailOuterContainer">
        {props.posts.map((prop) => (
          <button className="videoButton" >
            <div className="videoBoxContainer">
              <img
                src={prop.submission.thumbnail}
                alt="videothumbnail"
                className="videoThumbnail"
              ></img>

              <div className="videoTitleContainer">
                <div>
                  {" "}
                  <img
                    src={prop.creator.pic}
                    alt="your"
                    className="creatorImage"
                  />{" "}
                </div>
                <div className="videoTitle"> <b>{prop.submission.title}</b> </div>
              </div>
              <div className="videoHandle">{prop.creator.handle}</div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

export default VideoThumbnail;
