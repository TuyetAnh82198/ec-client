import { RESPONSE_MESSAGES, PAGE_PATH } from "./constants";

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
        navigate(PAGE_PATH.HOMEPAGE);
        window.location.reload();
      }
    }
  } else if (data.msg === "Password reset successful.") {
    alert("Password reset successful.");
    navigate(PAGE_PATH.LOGIN);
  } else {
    alert(data.msg);
  }
  const noneFirefox = "noneFirefox";
  if (data[noneFirefox] && pageTitle === "Login") {
    localStorage.setItem(noneFirefox, data[noneFirefox]);
  }
};

export default handleResponse;
