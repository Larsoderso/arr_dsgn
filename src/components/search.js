import React, { usestate } from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Search = () => (
  <div className="x_search_bounding">
    <div className="x_search_ic_padding">
      {" "}
      <svg
        width={18}
        height={35}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={16} cy={16} r={14} stroke="#ffffff" strokeWidth={4} />
        <path d="M26 26L38 38.5" stroke="#ffffff" strokeWidth={4} />
      </svg>
    </div>

    <input
      type="text"
      style={{
        width: "100%",
        background: "transparent",
        border: "none"
      }}
    />

    <div className="x_searchbar_xtended">
      <ul className="x_searchResults_List">
        <li>
          {" "}
          <div
            className="x_search_ic_padding"
            style={{
              background: "#1b1d25",
              width: "35px",
              height: "35px",
              borderRadius: "3px",
              padding: 0,
              textAlign: "center"
            }}
          >
            {" "}
            <svg
              width={18}
              height={35}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "30px", width: "15px" }}
            >
              <circle
                cx={16}
                cy={16}
                r={14}
                stroke="#ffffff"
                strokeWidth={4}
                style={{ stroke: "#b93b8e" }}
              />
              <path
                d="M26 26L38 38.5"
                stroke="#ffffff"
                strokeWidth={4}
                style={{ stroke: "#b93b8e" }}
              />
            </svg>
          </div>{" "}
          <div
            style={{
              paddingLeft: "18px",
              color: "white",
              height: "35px",
              lineHeight: "35px"
            }}
          >
            {" "}
            0221/ABC{" "}
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Search;
