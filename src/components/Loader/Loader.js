import React from "react";
import "./loader.scss";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
function Loader() {
  const { loader } = useSelector((state) => state.loaderStore);
  return (
    <>
      {loader && (
        <div className="loader">
          <div className="loader-container">
            <Oval
              className="loader"
              height={120}
              width={120}
              color="red"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="red"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
