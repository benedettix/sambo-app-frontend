import React, { useState } from "react";
import "./CookieModal.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import Cookie from "./cooki.png";

function CookieModal() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalShow(true);
    }, 5000);
  }, []);

  const setCookie = (e) => {
    if (e.target.name === "accept") {
      localStorage.setItem("cookie", true);
      setModalShow(false);
    } else if (e.target.name === "decline") {
      localStorage.setItem("cookie", false);
    }
    setModalShow(false);
  };

  return (
    <>
      {modalShow && (
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Cookie Privacy Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="display-4 cookie">
              <div className="cookie-container modal-cookie">
                {/* This our cookie */}

                <img src={Cookie} alt="cook" />
                <h6>
                  Ova web stranica koristi kolačiće za poboljšanje korisničkog
                  iskustva. Po klikom na "Razumijem" prihvaćate njegovu
                  upotrebu.
                </h6>
              </div>
              <p>Cookies Policy</p>
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button
              name="accept"
              className="btn btn-lg btn-danger"
              onClick={setCookie}
            >
              Razumijem
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
export default CookieModal;
