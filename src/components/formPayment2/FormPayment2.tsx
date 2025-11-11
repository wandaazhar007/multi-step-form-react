import { Dispatch, FC, SetStateAction } from "react";
import { formatCreditCardNumber, formatExpirationDate } from '../../utils/Utils';
import { FormState } from "../../types/form";

type PaymentErrors = {
  nameOnCard?: string;
  cardNumber?: string;
  exp?: string;
  cvc?: string;
};

interface FormPayment2Props {
  formData: FormState;
  setFormData: Dispatch<SetStateAction<FormState>>;
  errors: PaymentErrors;
  clearError: (field: keyof PaymentErrors) => void;
}

const FormPayment2: FC<FormPayment2Props> = ({ formData, setFormData, errors, clearError }) => {
  const getControlClass = (field: keyof PaymentErrors) =>
    `formControl${errors[field] ? " hasError" : ""}`;

  const updateField = (field: keyof PaymentErrors, value: string) => {
    setFormData({ ...formData, [field]: value });
    clearError(field);
  };

  return (
    <div className="wrapPayment">
      <div className="inputGroup input1">
        <label htmlFor="nameOnCard">Name On Card</label>
        <input
          type="text"
          className={getControlClass("nameOnCard")}
          id="nameOnCard"
          aria-invalid={!!errors.nameOnCard}
          aria-describedby={errors.nameOnCard ? "nameOnCard-error" : undefined}
          value={formData.nameOnCard}
          onChange={(e) => {
            updateField("nameOnCard", e.target.value);
          }}
        />
        {errors.nameOnCard && (
          <span className="errorText" id="nameOnCard-error">
            {errors.nameOnCard}
          </span>
        )}
      </div>
      <div className="inputGroup input2">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="tel"
          className={getControlClass("cardNumber")}
          id="cardNumber"
          pattern="[\d| ]{16,22}"
          aria-invalid={!!errors.cardNumber}
          aria-describedby={errors.cardNumber ? "cardNumber-error" : undefined}
          value={formData.cardNumber}
          onChange={(e) => updateField("cardNumber", formatCreditCardNumber(e.target.value))}
        />
        {errors.cardNumber && (
          <span className="errorText" id="cardNumber-error">
            {errors.cardNumber}
          </span>
        )}
      </div>
      <div className="inputGroup input3">
        <label htmlFor="exp">Expired Date</label>
        <input
          type="tel"
          className={getControlClass("exp")}
          id="exp"
          pattern="\d\d/\d\d"
          aria-invalid={!!errors.exp}
          aria-describedby={errors.exp ? "exp-error" : undefined}
          value={formData.exp}
          onChange={(e) => updateField("exp", formatExpirationDate(e.target.value))}
        />
        {errors.exp && (
          <span className="errorText" id="exp-error">
            {errors.exp}
          </span>
        )}
      </div>
      <div className="inputGroup input4">
        <label htmlFor="cvc">CVC</label>
        <input
          type="password"
          className={getControlClass("cvc")}
          id="cvc"
          aria-invalid={!!errors.cvc}
          aria-describedby={errors.cvc ? "cvc-error" : undefined}
          value={formData.cvc}
          onChange={(e) => updateField("cvc", e.target.value)}
        />
        {errors.cvc && (
          <span className="errorText" id="cvc-error">
            {errors.cvc}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormPayment2;
