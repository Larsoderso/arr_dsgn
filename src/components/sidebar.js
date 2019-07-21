import React, { useState } from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Sidebar = () => {
  const [searchtxt, changeSearchtxt] = useState(0);
  return (
    <div className="x_sbar_bounding">
      <div
        style={{
          display: "flex",
          height: "35px",
          lineHeight: "35px",
          paddingTop: "12px"
        }}
      >
        <div className="xback">
          <svg
            width={15}
            height={8}
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM15 3.5L1 3.5V4.5L15 4.5V3.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="x_mp_txt">Rheinland</div>
      </div>
      <div className="x_sidebar_sep" />
      <ul className="x_mainPoints">
        <li>
          <svg
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 17"
          >
            <path
              fill="#fff"
              fillOpacity="0.38"
              d="M17 8.5a8.5 8.5 0 10-17 0h3.856a4.644 4.644 0 119.288 0H17z"
            />
            <path
              fill="#fff"
              d="M14.51 2.49A8.5 8.5 0 000 8.5h3.856a4.644 4.644 0 017.928-3.284L14.51 2.49z"
            />
          </svg>

          <div className="x_mp_txt">Dashboard</div>
        </li>
        <li>
          <svg
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path stroke="#fff" d="M16 14H2L9 2l7 12z" />
            <circle cx="9" cy="2" r="1.5" fill="#1E1F27" stroke="#fff" />
            <circle cx="2" cy="14" r="1.5" fill="#1E1F27" stroke="#fff" />
            <circle cx="16" cy="14" r="1.5" fill="#1E1F27" stroke="#fff" />
          </svg>

          <div className="x_mp_txt">Integrations</div>
        </li>
        <li>
          <svg
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 15 15"
          >
            <circle cx="7.5" cy="7.5" r="6" stroke="#fff" strokeWidth="3" />
            <path fill="#fff" d="M6.75 0H15V2.5H6.75z" />
          </svg>

          <div className="x_mp_txt">Sigma</div>
        </li>
      </ul>

      <div className="x_sidebar_sep" />

      <div style={{ display: "flex", paddingLeft: "1vw" }}>
        <svg
          width={30}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 12"
        >
          <path fill="#fff" d="M4 8.5L7 7l3 1.5L7 10 4 8.5z" />
          <path
            fill="#fff"
            fillOpacity="0.74"
            d="M4 5.5L7 4l3 1.5L7 7 4 5.5z"
          />
          <path
            fill="#fff"
            fillOpacity="0.84"
            d="M4 5.5L7 7v3L4 8.5v-3zM10 5.5L7 7v3l3-1.5v-3z"
          />
          <path fill="#fff" d="M4 4.5L7 3l3 1.5L7 6 4 4.5z" />
          <path
            fill="#fff"
            fillOpacity="0.74"
            d="M4 1.5L7 0l3 1.5L7 3 4 1.5z"
          />
          <path
            fill="#fff"
            fillOpacity="0.84"
            d="M4 1.5L7 3v3L4 4.5v-3zM10 1.5L7 3v3l3-1.5v-3z"
          />
          <path fill="#fff" d="M0 10.5L3 9l3 1.5L3 12l-3-1.5z" />
          <path
            fill="#fff"
            fillOpacity="0.74"
            d="M0 7.5L3 6l3 1.5L3 9 0 7.5z"
          />
          <path
            fill="#fff"
            fillOpacity="0.84"
            d="M0 7.5L3 9v3l-3-1.5v-3zM6 7.5L3 9v3l3-1.5v-3z"
          />
          <path fill="#fff" d="M0 6.5L3 5l3 1.5L3 8 0 6.5z" />
          <path
            fill="#fff"
            fillOpacity="0.74"
            d="M0 3.5L3 2l3 1.5L3 5 0 3.5z"
          />
          <path
            fill="#fff"
            fillOpacity="0.84"
            d="M0 3.5L3 5v3L0 6.5v-3zM6 3.5L3 5v3l3-1.5v-3z"
          />
          <path fill="#fff" d="M8 10.5L11 9l3 1.5-3 1.5-3-1.5z" />
          <path
            fill="#fff"
            fillOpacity="0.74"
            d="M8 7.5L11 6l3 1.5L11 9 8 7.5z"
          />
          <path
            fill="#fff"
            fillOpacity="0.84"
            d="M8 7.5L11 9v3l-3-1.5v-3zM14 7.5L11 9v3l3-1.5v-3z"
          />
          <path fill="#fff" d="M8 6.5L11 5l3 1.5L11 8 8 6.5z" />
          <path
            fill="#fff"
            fillOpacity="0.74"
            d="M8 3.5L11 2l3 1.5L11 5 8 3.5z"
          />
          <path
            fill="#fff"
            fillOpacity="0.84"
            d="M8 3.5L11 5v3L8 6.5v-3zM14 3.5L11 5v3l3-1.5v-3z"
          />
        </svg>
        <div
          style={{
            paddingLeft: "18px",
            color: "white",
            height: "30px",
            lineHeight: "30px"
          }}
        >
          Infrastructure
        </div>
      </div>
      <ul>
        <li>
          <svg
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="10" fill="#B93B8E" />
            <mask id="a" fill="#fff">
              <path d="M11.253 2.605a7.5 7.5 0 10-.142 14.812l-.342-2.285a5.19 5.19 0 11.098-10.248l.386-2.279z" />
            </mask>
            <path
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
              d="M11.253 2.605a7.5 7.5 0 10-.142 14.812l-.342-2.285a5.19 5.19 0 11.098-10.248l.386-2.279z"
              mask="url(#a)"
            />
            <path
              fill="#fff"
              fillOpacity="0.24"
              d="M8.747 17.395a7.5 7.5 0 10.142-14.812l.342 2.285a5.189 5.189 0 11-.098 10.248l-.386 2.279z"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
