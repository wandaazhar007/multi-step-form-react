import { formatCreditCardNumber, formatExpirationDate } from '../../utils/Utils';

const FormPayment2 = ({ formData, setFormData }: any) => {
  return (
    <div className="wrapPayment">
      <div className="inputGroup input1">
        <label htmlFor="nameOnCard">Name On Card</label>
        <input
          type="text"
          className="formControl"
          id="nameOnCard"
          value={formData.nameOnCard}
          onChange={(e) => {
            setFormData({ ...formData, nameOnCard: e.target.value });
          }}
        />
      </div>
      <div className="inputGroup input2">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="tel"
          className="formControl"
          id="cardNumber"
          pattern="[\d| ]{16,22}"
          value={formData.cardNumber}
          onChange={(e) => setFormData({ ...formData, cardNumber: formatCreditCardNumber(e.target.value) })} />
      </div>
      <div className="inputGroup input3">
        <label htmlFor="exp">Expired Date</label>
        <input
          type="tel"
          className="formControl"
          id="exp"
          pattern="\d\d/\d\d"
          value={formData.exp}
          onChange={(e) => setFormData({ ...formData, exp: formatExpirationDate(e.target.value) })} />
      </div>
      <div className="inputGroup input4">
        <label htmlFor="cvc">CVC</label>
        <input
          type="password"
          className="formControl"
          id="cvc"
          value={formData.cvc}
          onChange={(e) => setFormData({ ...formData, cvc: e.target.value })} />
      </div>
    </div>
  );
}

export default FormPayment2;