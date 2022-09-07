import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/gym");
  }, []);
  return <div id="home"></div>;
}
