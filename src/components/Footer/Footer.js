import React, { useEffect, useState } from "react";
import "./Footer.scss";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { routeConfig } from "../../config/routeConfig";
import { Link } from "react-router-dom";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import blogServices from "../../services/blogServices";
import { useDispatch } from "react-redux";

function Footer() {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchComments = async () => {
      dispatch(setLoader(true));
      try {
        const { data: response } = await blogServices.getImgName();

        setBlogs(response);
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    fetchComments();
  }, []);
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to={routeConfig.HOME.url}>
              <img src="/logo.png" alt="logo" />
            </Link>

            <p>
              A 1985 study found that children in martial arts have an increased
              sense of responsibility
            </p>
            <a href="tel:+800-123-4567" className="number">
              +800-123-4567
            </a>
          </div>
          <div className="col-md-3">
            <h3>Info</h3>
            <ul>
              <li>
                <Link to={routeConfig.HOME.url}>Naslovna</Link>
              </li>
              <li>
                <Link to={routeConfig.PROGRAM.url}>Programi</Link>
              </li>
              <li>
                <Link to={routeConfig.SCHEDULE.url}>Raspored</Link>
              </li>
              <li>
                <Link to={routeConfig.PHOTOGALERY.url}>Galerija</Link>
              </li>

              <li>
                <Link to={routeConfig.BLOG.url}>Blogovi</Link>
              </li>
              <li>
                <Link to={routeConfig.RATINGS.url}>Dojmovi</Link>
              </li>
              <li>
                <Link to={routeConfig.CONTACTS.url}>Kontakti</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Izvadak iz blogova</h3>

            {blogs &&
              blogs.slice(0, 2).map((blog, i) => (
                <div key={i} className="post-content">
                  <h3>
                    <Link to={`blogovi/${blog.id}`}>{blog.heading}</Link>
                  </h3>
                </div>
              ))}

            {/* <div className="post-content">
              <h3>
                <a href="#">True victory</a>
              </h3>
              <div className="post-info">
                <a href="#">
                  <span className="post_counter_number">0</span>
                  <span className="post_counter_label">Comments</span>
                </a>
              </div>
            </div>

            <div className="post-content">
              <h3>
                <a href="#">False defeat</a>
              </h3>
              <div className="post-info">
                <a href="#">
                  <span className="post_counter_number">0</span>
                  <span className="post_counter_label">Comments</span>
                </a>
              </div>
            </div> */}
          </div>
          <div className="col-md-3">
            <h3>Kada Radimo</h3>
            <p>Ponedeljak-Petak 19:30-21:00</p>
            <div className="icons">
              <span>
                <a href="#">
                  <AiFillTwitterSquare />
                </a>
              </span>
              <span>
                <a href="#">
                  <AiFillFacebook />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaInstagramSquare />
                </a>
              </span>
              <span>
                <a href="#">
                  <AiFillYoutube />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
