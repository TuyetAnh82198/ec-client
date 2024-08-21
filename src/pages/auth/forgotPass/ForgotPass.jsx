import ForgotPassForm from "../form/ForgotPassForm";
import Background from "../background/Background";
import { PAGE_TITLE } from "../../../utils/constants";

const ForgotPass = () => {
  return (
    <Background>
      <ForgotPassForm pageTitle={PAGE_TITLE.FORGOT_PASS} />
    </Background>
  );
};

export default ForgotPass;
