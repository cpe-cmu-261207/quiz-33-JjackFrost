import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div>
        <div className="d-flex gap-2 my-2">
          <img
            src={props.data.userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {props.data.username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{props.data.commentText}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{props.data.likeNum}</span>
            </div>
          </div>
        </div>
      </div>

      {/*render Reply here... */}
      {props.data.replies.map((element, index) => {
        return <Reply data={element} key={index} />;
      })}
    </div>
  );
}
