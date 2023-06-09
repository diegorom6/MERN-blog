import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
    _id,
    title,
    summary,
    cover,
    createdAt,
    author,
}) {
    return (
        <div className="post">
            <div className="post-image">
                <Link to={`/post/${_id}`}>
                    <img alt="" src={"http://localhost:4000/" + cover}></img>
                </Link>
            </div>
            

            <div className="post-texts">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a className="author">Escrito por: {author}</a>
                    <time>{format(new Date(createdAt), "dd-MM-yyyy")}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}
