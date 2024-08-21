import HomeIcon from "@mui/icons-material/Home";
import WatchIcon from "@mui/icons-material/Watch";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HistoryIcon from "@mui/icons-material/History";

export const PAGE_TITLE = {
  REGISTER: "Register",
  LOGIN: "Login",
  FORGOT_PASS: "Forgot Password",
  RESET_PASS: "Reset Password",
};
export const PAGE_PATH = {
  HOMEPAGE: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASS: "/forgot-password",
  RESET_PASS: "/reset-password/:token",
};

export const NAVBAR = [
  {
    HOME: {
      PATH: "/",
      TITLE: "Home",
      ICON: <HomeIcon fontSize="small" />,
    },
  },
  {
    SHOP: {
      PATH: "/shop",
      TITLE: "Shop",
      ICON: <WatchIcon fontSize="small" />,
    },
  },
  {
    CART: {
      PATH: "/cart",
      TITLE: "Cart",
      ICON: <ShoppingBagIcon fontSize="small" />,
    },
  },
  {
    USER: {
      PATH: "/history",
      TITLE: "History",
      ICON: <HistoryIcon fontSize="small" />,
    },
  },
  {
    LOGOUT: {
      TITLE: "Logout",
      ICON: <LogoutIcon fontSize="small" />,
    },
  },
  {
    REGISTER: {
      PATH: "/register",
      TITLE: "Register",
      ICON: <HowToRegIcon fontSize="small" />,
    },
  },
  {
    LOGIN: {
      PATH: "/login",
      TITLE: "Login",
      ICON: <LoginIcon fontSize="small" />,
    },
  },
];

// const PRODUCTS_PATH = "/products";
const USER_PATH = "/user";
export const API = {
  // PRODUCTS: {
  //   ADD: `${PRODUCTS_PATH}/add`,
  // },
  USER: {
    REGISTER: `${USER_PATH}/register`,
    LOGIN: `${USER_PATH}/login`,
    FORGOT_PASS: `${USER_PATH}/forgot-pass`,
    RESET_PASS: `${USER_PATH}/reset-pass`,
    // CHECK_LOGIN: `${USER_PATH}/check-login`,
    // LOGOUT: `${USER_PATH}/logout`,
  },
};

export const RESPONSE_MESSAGES = {
  REGISTER: {
    SUCCESS: "Created!",
    USER_EXISTING: "User existing!",
  },
  LOGIN: {
    SUCCESS: "You are logged in",
    FAIL: "Wrong email or password!",
    NOT_LOGIN: "have not been logged in yet",
  },
  LOGOUT: {
    SUCCESS: "You are logged out!",
  },
};
