import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export const COLOR = {
  MAIN_GREEN: "#469E02",
  DARK_GREEN: "#3D8A00",
};

export const PAGE_SIZE = {
  SM: "75%",
  MD: "60%",
};

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
  SHOP: "/shop",
  FORGOT_PASS: "/forgot-password",
  RESET_PASS: "/reset-password/:token",
  DETAIL: "/detail/:id",
};

export const NAVBAR = [
  {
    HOME: {
      PATH: "/",
      TITLE: "Home",
    },
  },
  {
    SHOP: {
      PATH: "/shop",
      TITLE: "Shop",
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
    USER: { PATH: "null", ICON: <PersonIcon fontSize="small" /> },
  },
  {
    HISTORY: {
      PATH: "/history",
      TITLE: "History",
      ICON: <HistoryIcon fontSize="small" />,
    },
  },
  {
    LOGOUT: {
      PATH: "null",
      TITLE: "Logout",
      ICON: <LogoutIcon fontSize="small" />,
    },
  },
  {
    REGISTER: {
      PATH: "/register",
      TITLE: "Register",
    },
  },
  {
    LOGIN: {
      PATH: "/login",
      TITLE: "Login",
    },
  },
];

const PRODUCTS_PATH = "/products";
const PRODUCTS_PATH_GET = `${PRODUCTS_PATH}/get`;
const USER_PATH = "/user";

export const API = {
  PRODUCTS: {
    GET: { TOP6: `${PRODUCTS_PATH_GET}/top6`, DETAIL: `${PRODUCTS_PATH_GET}/` },
  },
  USER: {
    REGISTER: `${USER_PATH}/register`,
    LOGIN: `${USER_PATH}/login`,
    FORGOT_PASS: `${USER_PATH}/forgot-pass`,
    RESET_PASS: `${USER_PATH}/reset-pass`,
    CHECK_LOGIN: `${USER_PATH}/check-login`,
    LOGOUT: `${USER_PATH}/logout`,
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

export const CONTENT = {
  FREE_DELIVERY: "Free doorstep delivery from 10kg.",
};
