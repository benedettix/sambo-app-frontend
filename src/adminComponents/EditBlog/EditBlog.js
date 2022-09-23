import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Directions from "../../components/Directions/Directions";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import blogServices from "../../services/blogServices";
import "./EditBlog.scss";
function EditBlog() {
  let { id } = useParams();
  const dispatch = useDispatch();
  let [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const commentValue = useRef(null);
  const [blogValues, setBlogValues] = useState({
    heading: "",
    date: "",
    description: "",
    category: "",
    tags: "",
    created_by: "",
    likes: 0,
    img_src: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.editBlogByid(id);

        setBlogValues({
          heading: response[0].heading,
          date: response[0].date,
          description: response[0].description,
          category: response[0].category,
          tags: response[0].tags,
          created_by: response[0].created_by,
          likes: 0,
          img_src: response[0].img_src,
        });
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.editComments(id);

        setComments(response);
      } catch (error) {
        console.log(error);
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchComments();
  }, []);

  function blogValueHandler(e) {
    setBlogValues({ ...blogValues, [e.target.name]: e.target.value });
  }
  function deleteComment(e) {
    e.preventDefault();

    const fetchData = async () => {
      dispatch(setLoader(true));

      try {
        const { data: response } = await blogServices.deleteComment(id, {
          val: commentValue.current.innerHTML,
        });

        navigate(`/blogovi`);
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchData();
  }

  function onSubmitForm(e) {
    e.preventDefault();

    const fetchData = async () => {
      dispatch(setLoader(true));

      try {
        const { data: response } = await blogServices.editUploadedBlog(
          id,
          blogValues
        );
        navigate("/blogovi");
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchData();
  }

  function deleteBlog(e) {
    e.preventDefault();

    const fetchData = async () => {
      dispatch(setLoader(true));

      try {
        const { data: response } = await blogServices.deleteBlog(id);
        navigate("/blogovi");
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchData();
  }

  return (
    <>
      <Directions direction={`Blog: ${id}`} />
      {blogValues?.heading ? (
        <div className="container">
          <button
            onClick={(e) => deleteBlog(e)}
            className="mt-3 btn btn-danger"
          >
            Izbrisati
          </button>
          <form onSubmit={(e) => onSubmitForm(e)} className="add_blog-wrapper">
            <div className="add-blog-item">
              <h3>Edituj Blog</h3>
              <label htmlFor="heading">Naslov</label>
              <input
                type="text"
                placeholder="Naslov bloga"
                onChange={(e) => blogValueHandler(e)}
                name="heading"
                value={blogValues.heading || ""}
              />
            </div>
            <div className="add-blog-item">
              <label htmlFor="date">Datum</label>
              <input
                type="text"
                placeholder="Datum bloga"
                onChange={(e) => blogValueHandler(e)}
                name="date"
                value={blogValues.date || ""}
              />
            </div>
            <div className="add-blog-item">
              <label htmlFor="description">Opis</label>
              <input
                type="text"
                placeholder="Opis bloga"
                onChange={(e) => blogValueHandler(e)}
                name="description"
                value={blogValues.description || ""}
              />
            </div>
            <div className="add-blog-item">
              <label htmlFor="category">Kategorija</label>
              <input
                type="text"
                placeholder="Kategorija bloga"
                onChange={(e) => blogValueHandler(e)}
                name="category"
                value={blogValues.category || ""}
              />
            </div>
            <div className="add-blog-item">
              <label htmlFor="tags">Tagovi</label>
              <input
                type="text"
                placeholder="Tagovi bloga"
                onChange={(e) => blogValueHandler(e)}
                name="tags"
                value={blogValues.tags || ""}
              />
            </div>
            <div className="add-blog-item">
              <label htmlFor="created_by">Napravio:</label>
              <input
                type="text"
                placeholder="Napravio:"
                onChange={(e) => blogValueHandler(e)}
                name="created_by"
                value={blogValues.created_by || ""}
              />
            </div>

            <input
              type="submit"
              value="EDIT A BLOG"
              className="small-btn mb-5 mt-3"
            />
          </form>
          <h3 className="comments-header">Komentari:</h3>
          <div className="comments">
            {comments.length === 0 && <p>Jos nema komentara.</p>}
            {comments.map((comment, index) => (
              <div key={index} className="blog-comment">
                <h3>
                  Name:<span> {comment.comment_name}</span>
                </h3>
                <p ref={commentValue} className="comment-email">
                  {" "}
                  {comment.comment_email}
                </p>
                <p className="comment-desc"> {comment.comment_desc}</p>
                <button
                  className="btn btn-danger"
                  onClick={(e) => deleteComment(e)}
                >
                  IZBRIŠI KOMENTAR
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

export default EditBlog;
