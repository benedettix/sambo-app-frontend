import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Directions from "../../components/Directions/Directions";
import blogServices from "../../services/blogServices";
import "./BlogPostPage.scss";
import ReCAPTCHA from "react-google-recaptcha";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useDispatch } from "react-redux";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import Zoom from "react-medium-image-zoom";

function BlogPostPage() {
  let params = useParams();
  const dispatch = useDispatch();
  const checkBox = useRef(null);
  let [blog, setBlog] = useState([]);
  let [comments, setComments] = useState([]);
  let [isValidForm, setIsValidForm] = useState(true);
  let [captcha, setCaptcha] = useState(false);
  let [existingComment, setExistingComment] = useState(false);
  let [uploadCommentMsg, setUploadCommentMsg] = useState([]);
  let [blogComment, setBlogComment] = useState({
    comment_name: "",
    comment_email: "",
    comment_desc: "",
  });

  function commentHandler(e) {
    if (e.target.name === "comment_email") {
      const fetchData = async () => {
        // setLoading(true);
        setExistingComment(false);

        try {
          const { data: response } = await blogServices.existingComment(
            e.target.value
          );

          // setBlog(response[0]);
          if (response[0]?.id) {
            setExistingComment(true);

            return;
          }
          setExistingComment(false);
        } catch (error) {
          console.error(error.message);
        }
        // setLoading(false);
      };
      fetchData();
    }
    setBlogComment({ ...blogComment, [e.target.name]: e.target.value });
  }

  function captchaHandler() {
    setCaptcha(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.getBlogByid(params.id);

        setBlog(response[0]);
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
      dispatch(setLoader(false));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.getComments(params.id);

        setComments(response);
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchComments();
  }, [uploadCommentMsg]);

  function onSubmitForm(e) {
    e.preventDefault();
    setUploadCommentMsg(false);
    if (
      !blogComment.comment_name ||
      !blogComment.comment_email ||
      !blogComment.comment_desc ||
      !captcha ||
      !checkBox.current.checked ||
      existingComment
    ) {
      setIsValidForm(false);
      return;
    }
    setIsValidForm(true);
    const uploadComment = async () => {
      dispatch(setLoader(true));

      try {
        const { data: response } = await blogServices.uploadComment(
          params.id,
          blogComment
        );
        setUploadCommentMsg("Komentar objavljen!");
        // setCaptcha(false);
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    if (captcha && isValidForm) {
      setIsValidForm(true);
      setBlogComment({
        comment_name: "",
        comment_email: "",
        comment_desc: "",
      });

      checkBox.current.checked = false;
      uploadComment();
    }
  }

  return (
    <>
      <Directions direction={`Blog: ${params.id}`} />
      {blog ? (
        <div className="container">
          <div className="blog_post">
            <Zoom>
              <img src={`/images/${blog.img_src}`} alt={blog.heading} />
            </Zoom>

            <h3>{blog.heading}</h3>
            <span>{blog.date}</span>
            <p>{blog.description}</p>
            <p className="categories">
              <span>Kategorije: </span>
              {blog.category}
            </p>
            <p className="tags">
              <span>Tagovi: </span>
              {blog.tags}
            </p>
            <p className="created_by">
              <span>Napravio: </span>
              {blog.created_by}
            </p>
          </div>
          <h3 className="comments-header">Komentari::</h3>
          <div className="comments">
            {comments.length === 0 && <p>Još nema komentara.</p>}
            {comments.map((comment, index) => (
              <div key={index} className="blog-comment">
                <h3>
                  Name:<span> {comment.comment_name}</span>
                </h3>
                <p className="comment-email"> {comment.comment_email}</p>
                <p className="comment-desc"> {comment.comment_desc}</p>
              </div>
            ))}
          </div>

          <div className="add-comment">
            <form onSubmit={(e) => onSubmitForm(e)}>
              <textarea
                name="comment_desc"
                id="desc"
                cols="30"
                rows="10"
                onChange={(e) => commentHandler(e)}
                placeholder="Tvoj komentar*"
                value={blogComment.comment_desc}
              ></textarea>

              <div className="row comment-wrapper">
                <div className="col-md-6">
                  <input
                    name="comment_name"
                    type="text"
                    onChange={(e) => commentHandler(e)}
                    placeholder="Tvoje ime*"
                    value={blogComment.comment_name}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="comment_email"
                    onChange={(e) => commentHandler(e)}
                    type="email"
                    placeholder="Tvoj email *"
                    value={blogComment.comment_email}
                  />
                  {existingComment && (
                    <p style={{ color: "red", fontSize: "18px" }}>
                      Komentar već postoji.
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 center-it">
                  <input type="checkbox" id="save-email" ref={checkBox} />

                  <label htmlFor="save-email">
                    Spremi moje ime, e-poštu i web stranicu u ovom pregledniku
                    za sljedeći put kad komentiram.
                  </label>
                </div>
              </div>
              <ReCAPTCHA
                sitekey="6LfRmwEiAAAAADf8km2gp5XQ1qP_Xl3mzsLG3GY8"
                onChange={captchaHandler}
              />

              <input
                type="submit"
                value="DODAJ KOMENTAR"
                className="comment-btn"
              />
            </form>
            {uploadCommentMsg && (
              <p style={{ color: "green", fontSize: "24px" }}>
                {uploadCommentMsg}
              </p>
            )}
            {!isValidForm && (
              <p style={{ color: "red", fontSize: "24px" }}>
                Polja ne mogu biti prazna
              </p>
            )}
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

export default BlogPostPage;
