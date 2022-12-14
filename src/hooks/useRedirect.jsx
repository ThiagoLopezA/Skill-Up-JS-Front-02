import React from "react";
import { useNavigate } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();
  const handleRedirect = path => navigate(path);
  return handleRedirect;
}
