import './formPayment.scss';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import { formatCreditCardNumber, formatExpirationDate } from '../../utils/Utils';

const FormPayment = ({ formData, setFormData }: any) => {
  return (
    <>
      <Cards
        number={formData.cardNumber}
        expiry={formData.exp}
        cvc={formData.cvc}
        name={formData.nameOnCard}
        focused={formData.focus}
      />
      <div className="wrapInputGroup3">
        <div className="inputGroup2 input1">
          <label htmlFor="nameOnCard">Name On Card</label>
          <input
            type="text"
            className="inputLength3"
            id="nameOnCard"
            value={formData.nameOnCard}
            onChange={(e) => {
              setFormData({ ...formData, nameOnCard: e.target.value });
            }}
          />
        </div>
        <div className="inputGroup2 input2">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="tel"
            className="inputLength2"
            id="cardNumber"
            pattern="[\d| ]{16,22}"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: formatCreditCardNumber(e.target.value) })} />
        </div>
        <div className="inputGroup2 input3">
          <label htmlFor="exp">Expired Date</label>
          <input
            type="tel"
            className="inputLength2"
            id="exp"
            pattern="\d\d/\d\d"
            value={formData.exp}
            onChange={(e) => setFormData({ ...formData, exp: formatExpirationDate(e.target.value) })} />
        </div>
        <div className="inputGroup2 input4">
          <label htmlFor="cvc">CVC</label>
          <input
            type="password"
            className="inputLength2"
            id="cvc"
            value={formData.cvc}
            onChange={(e) => setFormData({ ...formData, cvc: e.target.value })} />
        </div>
      </div>

    </>
  );
}

export default FormPayment;