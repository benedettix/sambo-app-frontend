import React, { useState } from "react";
import "./Navigation.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import TopNavigation from "../TopNavigation/TopNavigation";
import navbarHeadings from "./navbar.json";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "animate.css";
import { setValue, setStart } from "../../Redux/features/search/searchSlice";

export default function Navigation() {
  const [showSearch, setShowSearch] = useState(false);
  const [fixed, setFix] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchStore.searchValue);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const headingAlgorithm = (property, state = 0) => {
    return property.child ? (
      <ul className={state === 1 ? "super-sub" : "sub-menu"}>
        {property.child.map((heading, index) => {
          return (
            <li key={index}>
              {heading.child ? (
                <>
                  <a className="menu-item-child">
                    {heading.head}
                    <BsArrowRightShort className="right-arrow" />
                  </a>
                </>
              ) : (
                <>
                  <NavLink to={heading.head} className="menu-item-child">
                    {heading.head}
                  </NavLink>
                </>
              )}

              {heading.child ? headingAlgorithm(heading, 1) : null}
            </li>
          );
        })}
      </ul>
    ) : null;
  };

  return (
    <>
      <header className="top_panel">
        <TopNavigation />
        {/* NAVBAR */}
        <div
          className={
            fixed || navVisible
              ? "top_panel_navi animate__animated animate__fadeIn sticky"
              : "top_panel_navi "
          }
        >
          <div className="menu_main_wrap">
            <div className="container">
              {!navVisible ? (
                <FaBars
                  onClick={() => setNavVisible(!navVisible)}
                  className="fa-bars"
                />
              ) : (
                <RiCloseFill
                  className="fa-bars"
                  onClick={() => setNavVisible(!navVisible)}
                />
              )}

              <div className="row">
                <nav
                  className={
                    navVisible
                      ? " nav_visible menu_main_nav_area menu_show col-md-8 animate__animated animate__backInDown"
                      : "menu_main_nav_area menu_show col-md-8"
                  }
                >
                  <ul id="menu_main">
                    {navbarHeadings.navbar_headers.map((heading, index) => {
                      return (
                        <li key={index} className="menu-item">
                          <NavLink to={heading.url} className="menu-item">
                            {heading.head}
                          </NavLink>
                          {headingAlgorithm(heading)}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="search_wrap col-md-4">
                  <form
                    method="get"
                    role="search"
                    className={
                      navVisible ? "search_visible search_form" : "search_form"
                    }
                  >
                    <input
                      value={searchValue}
                      type="text"
                      onChange={(e) => {
                        dispatch(setValue(e.target.value));
                        dispatch(setStart(true));
                      }}
                      className={
                        !showSearch
                          ? "search_field"
                          : "search_field search-active"
                      }
                      placeholder="Search"
                      id="search_field"
                    />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowSearch(!showSearch);
                      }}
                      type="submit"
                      className="search_submit"
                    >
                      {!showSearch || searchValue ? (
                        <BsSearch className="search-btn" />
                      ) : (
                        <RiCloseFill
                          onClick={() => dispatch(setValue(""))}
                          className="search-btn"
                        />
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
