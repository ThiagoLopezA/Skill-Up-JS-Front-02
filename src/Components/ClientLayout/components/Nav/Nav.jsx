import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarButton from "../NavbarButton/NavbarButton";
import Items from "./Items";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleRedirect = link => navigate(link);
  const { clientItems } = Items();
  return (
    <>
      {clientItems.map((e, i) => {
        return (
          <NavbarButton
            icon={e.icon}
            key={e + i}
            handleClick={() => handleRedirect(e.path)}
            active={location.pathname == e.path ? true : false}
          >
            {e.name}
          </NavbarButton>
        );
      })}
    </>
  );
}
