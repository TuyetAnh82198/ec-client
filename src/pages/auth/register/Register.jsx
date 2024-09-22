import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Form from "../form/AuthForm";
import Background from "../background/Background";
import { PAGE_TITLE } from "../../../utils/constants";
import handleNavigate from "../../../utils/handleNavigate";
import fetchLogin from "../../../utils/fetchLogin";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchLogin()
      .then((loggedInState) => {
        if (loggedInState) {
          handleNavigate.toHomePage(navigate);
        }
      })
      .catch((err) => {});
  }, []);
  return (
    <Background>
      <Form pageTitle={PAGE_TITLE.REGISTER} />
    </Background>
  );
};
export default Register;
