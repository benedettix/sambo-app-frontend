import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import blogServices from "../../services/blogServices";
import "./AddBlog.scss";
function AddBlog() {
  const navigate = useNavigate();

  const [blogValues, setBlogValues] = useState({
    heading: "",
    date: "",
    description: "",
    category: "",
    tags: "",
    created_by: "",
    likes: 0,
    img_src: "",
    comment_name: "",
    comment_email: "",
    comment_desc: "",
  });

  const [fileValue, setFileValue] = useState(null);

  function blogValueHandler(e) {
    setBlogValues({ ...blogValues, [e.target.name]: e.target.value });
  }
  const dispatch = useDispatch();
  function onFileHandler(e) {
    const photo = e.target.files[0];
    setFileValue(photo);
  }

  function onSubmitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blog", JSON.stringify(blogValues));
    formData.append("img_src", fileValue);
    const fetchData = async () => {
      dispatch(setLoader(true));

      try {
        const { data: response } = await blogServices.uploadBlog(formData);
        if (response) navigate("/blogovi");
      } catch (error) {
        console.error(error.message);
      }

      dispatch(setLoader(false));
    };

    fetchData();
  }
  return (
    <div className="container">
      <form onSubmit={(e) => onSubmitForm(e)} className="add_blog-wrapper">
        <div className="add-blog-item">
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
        <label htmlFor="img_src">Slika* (obavezno):</label>
        <input onChange={(e) => onFileHandler(e)} type="file" name="img_src" />
        <input
          type="submit"
          value="OBJAVI BLOG"
          className="small-btn mb-5 mt-3"
        />
      </form>
    </div>
  );
}

export default AddBlog;
