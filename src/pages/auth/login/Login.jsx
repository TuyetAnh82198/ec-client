import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Form from "../form/AuthForm";
import { PAGE_TITLE } from "../../../utils/constants";
import Background from "../background/Background";
import handleNavigate from "../../../utils/handleNavigate";
import fetchLogin from "../../../utils/fetchLogin";

const Login = () => {
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
      <Form pageTitle={PAGE_TITLE.LOGIN} />
    </Background>
  );
};
export default Login;
