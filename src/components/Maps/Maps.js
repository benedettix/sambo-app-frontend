import React from "react";
import "./Maps.scss";

function Maps() {
  return (
    <>
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.002218240167!2d17.78357646952434!3d43.34213594126645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b438745c42e45%3A0x873416d035689daa!2sJudo%20klub%20%22Neretva%22%20Mostar!5e0!3m2!1sen!2srs!4v1663922498001!5m2!1sen!2srs"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading={"lazy"}
          referrerPolicy={"no-referrer-when-downgrade"}
          title={"map"}
        ></iframe>
      </div>
    </>
  );
}

export default Maps;
