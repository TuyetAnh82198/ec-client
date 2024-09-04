import { RESPONSE_MESSAGES, PAGE_PATH, LOCAL_STORAGE } from "./constants";

const handleResponse = (data, pageTitle, navigate) => {
  if (!data.msg) {
    alert(data.errs);
  } else if (
    data.msg === RESPONSE_MESSAGES.REGISTER.SUCCESS ||
    data.msg === RESPONSE_MESSAGES.LOGIN.SUCCESS
  ) {
    if (data.msg === "Created!") {
      alert(`${pageTitle} Success!`);
      if (pageTitle === "Register" && !data.noneFirefox) {
        navigate(PAGE_PATH.LOGIN);
      } else {
        const prevPath = localStorage.getItem("prevPath");
        if (prevPath) {
          navigate(prevPath);
          localStorage.removeItem("prevPath");
        } else {
          navigate(PAGE_PATH.HOMEPAGE);
          window.location.reload();
        }
      }
    }
  } else if (data.msg === "Password reset successful.") {
    alert("Password reset successful.");
    navigate(PAGE_PATH.LOGIN);
  } else if (data.msg === RESPONSE_MESSAGES.LOGIN.NOT_LOGIN) {
    localStorage.setItem("prevPath", window.location.pathname);
    navigate(PAGE_PATH.LOGIN);
  } else {
    alert(data.msg);
  }
  const noneFirefox = LOCAL_STORAGE.TOKEN;
  if (data[noneFirefox] && pageTitle === "Login") {
    localStorage.setItem(noneFirefox, data[noneFirefox]);
  }
};

export default handleResponse;
