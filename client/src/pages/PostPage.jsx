import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { format } from "date-fns";

export default function PostPage() {

    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    if (!postInfo) return "";

    return (
       <div className="post-page">
            <h1>{postInfo.title}</h1>
            <time>{format(new Date(postInfo.createdAt), "dd-MM-yyyy")}</time>
            <div className="author">escrito por {postInfo.author}</div>
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html: postInfo.content}}></div>
       </div>
    )
}