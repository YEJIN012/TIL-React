import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이예진",
        comment: "하이루",
    },
    {
        name: "유재석",
        comment: "방가방가",
    },
    {
        name: "박명수",
        comment: "야야야",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((x)=>{
                return(
                    <Comment name={x.name} comment={x.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList