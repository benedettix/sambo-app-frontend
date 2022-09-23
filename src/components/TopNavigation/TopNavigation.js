import React, { useState } from "react";
import "../Navigation/Navigation.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { routeConfig } from "../../config/routeConfig";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "../../Redux/features/loginSlice/loginSlice";
// import Logo from "../../../public/assets/samboPng.png";
// import Logo from "./logo.png";
export default function TopNavigation() {
  const admin = useSelector((state) => state.adminStore.admin);
  let dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* TOP NAVBAR */}

      <div className="container nav navbar position-relative top-padding">
        <div className="row d-flex align-items-center justify-content-between width-100">
          <Link
            className="logo col-4 col-sm-6 col-md-6 col-xl-6"
            to={routeConfig.HOME.url}
          >
            <img src={"/logo.png"} className="logo_main" alt="logo" />
          </Link>

          <div className="additional-element  col-8 col-sm-6 col-md-6 col-xl-6">
            <Link
              to={routeConfig.SCHEDULE.url}
              className=" custom_link_button in_header"
            >
              Pridruži se
            </Link>
            <span className="contact_info">
              <span className="contact_info_item contact_phone icon-phone-1">
                <BsFillTelephoneFill style={{ color: "red" }} /> Pozovite Nas{" "}
                <br></br>
                <span>
                  <a href="tel:+38763392968">+387-63-392-968</a>
                </span>
              </span>
              <span className="contact_info_item contact_address icon-location-1">
                <MdOutlineLocationOn style={{ color: "red" }} /> Mostar,
                <br></br>Ilićka br. 147
              </span>
            </span>
          </div>
          {admin?.username ? (
            <div className="admin_in col-12 d-flex justify-content-end">
              <p>Zdravo, {admin?.username}</p>
              <Link to={routeConfig.ADMIN_ADD.url}>Dodati Blog</Link>
              <Link to={"/blogovi/"}>Edituj Blogove</Link>
              <Link to={"/prikazikontakte"}>Prikaz Kontakta</Link>
              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.removeItem("adminOn");
                  dispatch(setAdmin(""));
                  // window.location.reload(false);
                }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="col-12 d-flex justify-content-end">
              <Link className="nav-admin" to={routeConfig.ADMIN.url}>
                Admin login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
