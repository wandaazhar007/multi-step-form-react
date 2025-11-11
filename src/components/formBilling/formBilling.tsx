import { Dispatch, FC, SetStateAction } from "react";
import { FormState } from "../../types/form";

type BillingErrors = {
  streetBilling?: string;
  aptBilling?: string;
  cityBilling?: string;
  stateBilling?: string;
  zipCodeBilling?: string;
};

interface FormBillingProps {
  formData: FormState;
  setFormData: Dispatch<SetStateAction<FormState>>;
  errors: BillingErrors;
  clearError: (field: keyof BillingErrors) => void;
  resetErrors: () => void;
}

const FormBilling: FC<FormBillingProps> = ({ formData, setFormData, errors, clearError, resetErrors }) => {
  const getControlClass = (field: keyof BillingErrors) =>
    `formControl${errors[field] ? " hasError" : ""}`;

  const updateField = (field: keyof BillingErrors, value: string) => {
    setFormData({ ...formData, [field]: value });
    clearError(field);
  };

  const syncWithShipping = () => ({
    streetBilling: formData.street,
    aptBilling: formData.apt,
    cityBilling: formData.city,
    stateBilling: formData.state,
    zipCodeBilling: formData.zipCode,
  });

  const handleClick = () => {
    if (!formData.checked) {
      setFormData({
        ...formData,
        ...syncWithShipping(),
        checked: true
      });
      resetErrors();
    } else {
      setFormData({
        ...formData,
        streetBilling: "",
        aptBilling: "",
        cityBilling: "",
        stateBilling: "",
        zipCodeBilling: "",
        checked: false
      });
    }
  }

  return (
    <>
      <div className="same">
        <input
          type="checkbox"
          className="costumCheckbox"
          onChange={handleClick}
          checked={formData.checked}
        />
        <span>Same as shipping address</span>
      </div>
      <div className="wrapBilling">
        <div className="inputGroup input1">
          <label htmlFor="streetBilling">Street</label>
          <input
            type="text"
            className={getControlClass("streetBilling")}
            id="streetBilling"
            aria-invalid={!!errors.streetBilling}
            aria-describedby={errors.streetBilling ? "streetBilling-error" : undefined}
            value={formData.streetBilling}
            onChange={(e) => updateField("streetBilling", e.target.value)}
          />
          {errors.streetBilling && (
            <span className="errorText" id="streetBilling-error">
              {errors.streetBilling}
            </span>
          )}
        </div>
        <div className="inputGroup input2">
          <label htmlFor="aptBilling">Apt/Building <span className="optional">(optional)</span></label>
          <input
            type="text"
            className={getControlClass("aptBilling")}
            id="aptBilling"
            aria-invalid={!!errors.aptBilling}
            aria-describedby={errors.aptBilling ? "aptBilling-error" : undefined}
            value={formData.aptBilling}
            onChange={(e) => updateField("aptBilling", e.target.value)}
          />
          {errors.aptBilling && (
            <span className="errorText" id="aptBilling-error">
              {errors.aptBilling}
            </span>
          )}
        </div>
        <div className="inputGroup input3">
          <label htmlFor="cityBilling">City</label>
          <input
            type="text"
            className={getControlClass("cityBilling")}
            id="cityBilling"
            aria-invalid={!!errors.cityBilling}
            aria-describedby={errors.cityBilling ? "cityBilling-error" : undefined}
            value={formData.cityBilling}
            onChange={(e) => updateField("cityBilling", e.target.value)}
          />
          {errors.cityBilling && (
            <span className="errorText" id="cityBilling-error">
              {errors.cityBilling}
            </span>
          )}
        </div>
        <div className="inputGroup input4">
          <label htmlFor="stateBilling">State</label>
          <input
            type="text"
            className={getControlClass("stateBilling")}
            id="stateBilling"
            aria-invalid={!!errors.stateBilling}
            aria-describedby={errors.stateBilling ? "stateBilling-error" : undefined}
            value={formData.stateBilling}
            onChange={(e) => updateField("stateBilling", e.target.value)}
          />
          {errors.stateBilling && (
            <span className="errorText" id="stateBilling-error">
              {errors.stateBilling}
            </span>
          )}
        </div>
        <div className="inputGroup input5">
          <label htmlFor="zipCodeBilling">Zip Code</label>
          <input
            type="text"
            className={getControlClass("zipCodeBilling")}
            id="zipCodeBilling"
            aria-invalid={!!errors.zipCodeBilling}
            aria-describedby={errors.zipCodeBilling ? "zipCodeBilling-error" : undefined}
            value={formData.zipCodeBilling}
            onChange={(e) => updateField("zipCodeBilling", e.target.value)}
          />
          {errors.zipCodeBilling && (
            <span className="errorText" id="zipCodeBilling-error">
              {errors.zipCodeBilling}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default FormBilling;
