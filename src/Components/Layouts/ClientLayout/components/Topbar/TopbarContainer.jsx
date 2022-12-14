import React, { useState } from "react";
import Topbar from "./Topbar";
import jwtDecode from "jwt-decode";
import useRedirect from "../../../../../hooks/useRedirect";

export default function TopbarContainer() {
  const [visibility, setVisibility] = useState(false);
  const redirect = useRedirect();
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const handleVisibility = () => setVisibility(!visibility);
  const API_URL = import.meta.env.VITE_API_URL;
  user.avatar =
    user.avatar === null
      ? DefaultAvatar
      : typeof user.avatar === "string"
      ? `${API_URL}/uploads/${user.avatar}`
      : URL.createObjectURL(user.avatar);

  const menuIcon = (
    <svg
      width="1.5em"
      height="1.5em"
      aria-hidden="true"
      aria-label="menu"
      focusable="false"
      viewBox="0 0 24 24"
      className="c-pEEFS c-pEEFS-bfAFXs-size-md"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d='M3 19h18v-1H3v1Zm0-6h18v-1H3v1Zm0-7v1h18V6H3Z",",M3 19h18v-1H3v1Zm0-6h18v-1H3v1Zm0-7v1h18V6H3Z'
      ></path>
    </svg>
  );

  const closeIcon = (
    <svg
      width="1.5em"
      height="1.5em"
      aria-hidden="true"
      aria-label="close"
      focusable="false"
      viewBox="0 0 24 24"
      className="c-pEEFS c-pEEFS-bfAFXs-size-md"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d='m12.629 11.833 5.555-5.477a.5.5 0 0 0-.702-.712l-5.565 5.487L6.35 5.644a.5.5 0 0 0-.702.712l5.555 5.477-5.555 5.478a.5.5 0 0 0 .702.712l5.566-5.487 5.565 5.487a.5.5 0 0 0 .702-.712l-5.555-5.478Z",",m12.629 11.833 5.555-5.477a.5.5 0 0 0-.702-.712l-5.565 5.487L6.35 5.644a.5.5 0 0 0-.702.712l5.555 5.477-5.555 5.478a.5.5 0 0 0 .702.712l5.566-5.487 5.565 5.487a.5.5 0 0 0 .702-.712l-5.555-5.478Z'
      ></path>
    </svg>
  );

  const logout = () => {
    localStorage.removeItem("token");
    redirect("login");
  };
  return (
    <Topbar
      icons={{ closeIcon, menuIcon }}
      user={user}
      handleMenu={handleVisibility}
      menuVisibility={visibility}
      logout={logout}
    />
  );
}
