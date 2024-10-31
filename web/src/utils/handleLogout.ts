import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setUnauthenticated } from "../pages/auth.slice";
import { RootState } from "../store/store";
import { toast } from "react-toastify";

export const useHandleLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies<any>();
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const handleLogout = async () => {
    try {
      // Gọi API logout từ server
      // await logoutRequest().unwrap();
      if (userId) {
        removeCookie(`email-notification-${userId}`); // Xóa cookie email notification
      }
      // Xóa thông tin người dùng từ localStorage
      localStorage.removeItem("token");

      // Xóa thông tin người dùng từ Redux store
      dispatch(setUnauthenticated());

      toast.warning("Logout successful", {
        position: "top-right",
      });
      // Điều hướng người dùng về trang /admin
      navigate("/admin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return handleLogout;
};
