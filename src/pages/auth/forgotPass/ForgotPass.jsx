import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import ForgotPassForm from "../form/ForgotPassForm";
import Background from "../background/Background";
import { PAGE_TITLE } from "../../../utils/constants";
import handleNavigate from "../../../utils/handleNavigate";
import fetchLogin from "../../../utils/fetchLogin";

const ForgotPass = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchLogin()
      .then((loggedInState) => {
        if (loggedInState) {
          handleNavigate.toHomePage(navigate);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Background>
      <ForgotPassForm pageTitle={PAGE_TITLE.FORGOT_PASS} />
    </Background>
  );
};

export default ForgotPass;
