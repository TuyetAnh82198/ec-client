import Form from "../form/AuthForm";
import { PAGE_TITLE } from "../../../utils/constants";
import Background from "../background/Background";

const Login = () => {
  return (
    <Background>
      <Form pageTitle={PAGE_TITLE.LOGIN} />
    </Background>
  );
};
export default Login;
