import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { setLoader } from "../../Redux/features/loaderSlice/loaderSlice";
import blogServices from "../../services/blogServices";
import "./ContactUs.scss";

function ContactUs() {
  const dispatch = useDispatch();
  const checkBox = useRef(null);
  let [isValidForm, setIsValidForm] = useState(true);
  let [captcha, setCaptcha] = useState(false);
  let [uploadContactMsg, setUploadContactMsg] = useState([]);
  let [contactValue, setContactValue] = useState({
    contact_name: "",
    contact_email: "",
    contact_desc: "",
  });
  function captchaHandler() {
    setCaptcha(true);
  }
  function onSubmitForm(e) {
    e.preventDefault();
    setUploadContactMsg(false);
    if (
      !contactValue.contact_name ||
      !contactValue.contact_email ||
      !contactValue.contact_desc ||
      !captcha ||
      !checkBox.current.checked
    ) {
      setIsValidForm(false);
      return;
    }
    setIsValidForm(true);
    const uploadComment = async () => {
      dispatch(setLoader(true));

      try {
        const { data: response } = await blogServices.sendContact(contactValue);
        setUploadContactMsg("Vaša kontakt poruka je poslana");
        // setCaptcha(false);
      } catch (error) {
        console.error(error.message);
      }
      dispatch(setLoader(false));
    };

    if (captcha && isValidForm) {
      setIsValidForm(true);
      setContactValue({
        contact_name: "",
        contact_email: "",
        contact_desc: "",
      });

      checkBox.current.checked = false;
      uploadComment();
    }
  }
  function commentHandler(e) {
    setContactValue({ ...contactValue, [e.target.name]: e.target.value });
  }
  return (
    <div className="container contact-us">
      <h6>Kontaktirajte nas</h6>
      <h3>PUSTITE PORUKU</h3>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <input
          onChange={(e) => commentHandler(e)}
          name="contact_name"
          type="text"
          placeholder="Tvoje ime"
          value={contactValue.contact_name}
        />
        <input
          onChange={(e) => commentHandler(e)}
          name="contact_email"
          type="text"
          placeholder="Tvoj Email"
          value={contactValue.contact_email}
        />
        <textarea
          name="contact_desc"
          id="contact_desc"
          cols="30"
          rows="10"
          value={contactValue.contact_desc}
          placeholder="Tvoja poruka"
          onChange={(e) => commentHandler(e)}
        ></textarea>
        <span className="check mt-3">
          <input type="checkbox" ref={checkBox} id="contact-check" />
          <span>
            Slažem se da se moji poslani podaci prikupljaju i pohranjuju.
          </span>
        </span>
        <div className="center mt-3 ">
          <ReCAPTCHA
            sitekey="6LfRmwEiAAAAADf8km2gp5XQ1qP_Xl3mzsLG3GY8"
            onChange={captchaHandler}
          />
        </div>
        <button className="small-btn mt-5 mb-5">POŠALJI PORUKU</button>
      </form>
      {uploadContactMsg && (
        <p style={{ color: "green", fontSize: "24px" }}>{uploadContactMsg}</p>
      )}
      {!isValidForm && (
        <p style={{ color: "red", fontSize: "24px" }}>
          Polja ne mogu biti prazna
        </p>
      )}
    </div>
  );
}

export default ContactUs;
