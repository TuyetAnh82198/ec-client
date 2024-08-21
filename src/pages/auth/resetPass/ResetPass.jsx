import ForgotPassForm from "../form/ForgotPassForm";
import Background from "../background/Background";
import { PAGE_TITLE } from "../../../utils/constants";

const ResetPass = () => {
  return (
    <Background>
      <ForgotPassForm pageTitle={PAGE_TITLE.RESET_PASS} />
    </Background>
  );
};
export default ResetPass;
