import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./BlogPosts.scss";
function BlogPost({ ...props }) {
  const admin = useSelector((state) => state.adminStore.admin);
  return (
    <div className="blog_post-wrapper">
      <div className="blog_post_img-wrapper">
        <Link to={`/blogovi/${props.id}`}>
          <img src={`/images/${props.imgSrc}`} alt="sa" />
        </Link>
      </div>
      {admin?.username && (
        <Link
          className="btn btn-warning mx-3 my-3"
          to={`/blogovi/editujblog/${props.id}`}
        >
          Edituj Blog
        </Link>
      )}
      <h3>{props.heading}</h3>
      <span>{props.date}</span>
      <p>{props.description}</p>

      <Link to={`/blogovi/${props.id}`} className="small-btn">
        ČITAJ VIŠE
      </Link>
    </div>
  );
}

export default BlogPost;
