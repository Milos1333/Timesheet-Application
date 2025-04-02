import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToToday = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    navigate(`/${today}`);
  }, [navigate]);

  return null;
};

export default RedirectToToday;
