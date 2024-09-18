import Announcement from "../../../components/announcement/Announcement";
import { CONTENT } from "../../../utils/constants";

const PaymentSuccess = () => {
  return (
    <Announcement
      title={CONTENT.PAYMENT.SUCCESS.TITLE}
      content={CONTENT.PAYMENT.SUCCESS.CONTENT}
    />
  );
};

export default PaymentSuccess;
