import Form from "../form/AuthForm";
import Background from "../background/Background";
import { PAGE_TITLE } from "../../../utils/constants";

const Register = () => {
  return (
    <Background>
      <Form pageTitle={PAGE_TITLE.REGISTER} />
    </Background>
  );
};
export default Register;
