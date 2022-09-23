import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import Directions from "../../components/Directions/Directions";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import blogServices from "../../services/blogServices";

function Blog() {
  let [blog, setBlog] = useState([]);
  let [blogValue, setBlogValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.getBlogs();

        setBlog(response);
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchData();
  }, []);
  return (
    <>
      <Directions direction={"Blogovi"} />
      <div className="container">
        <div className="blog-items">
          <h3>Pretražite blog po nazivu</h3>
          <input
            onChange={(e) => setBlogValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="search-blog"
          />

          {blog.length > 0 ? (
            blog
              .filter((val) => {
                if (blogValue === "") {
                  return val;
                } else if (
                  val.heading.toLowerCase().includes(blogValue.toLowerCase())
                ) {
                  return val;
                }
              })
              .reverse()
              .map((blog) => (
                <BlogPosts
                  key={blog.id}
                  imgSrc={blog.img_src}
                  heading={blog.heading}
                  description={blog.description}
                  date={blog.date}
                  id={blog.id}
                />
              ))
          ) : (
            <h3 className="my-3">Još nema postova na blogu</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Blog;
