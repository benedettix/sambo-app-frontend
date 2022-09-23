import React from "react";
import { useSelector } from "react-redux";
import "./PageNotFound.scss";
import { AiOutlineWarning } from "react-icons/ai";
function PageNotFound() {
  const searchValue = useSelector((state) => state.searchStore.searchValue);
  return (
    <div className="not-found">
      Your search text page '{searchValue}' has not found. Try something other.
      <span>
        <AiOutlineWarning />
      </span>
    </div>
  );
}

export default PageNotFound;
