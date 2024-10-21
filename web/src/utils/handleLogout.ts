import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setUnauthenticated } from "../pages/auth.slice";

export const useHandleLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies<any>();

  const handleLogout = async () => {
    try {
      // Gọi API logout từ server 
      // await logoutRequest().unwrap();

      // Xóa cookie
      const userId = localStorage.getItem("userId");
      if (userId) {
        removeCookie(`email-notification-${userId}`); // Xóa cookie email notification
      }

      // Xóa thông tin người dùng từ localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      // Xóa thông tin người dùng từ Redux store
      dispatch(setUnauthenticated());

      // Điều hướng người dùng về trang /admin
      navigate("/admin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return handleLogout;
};
