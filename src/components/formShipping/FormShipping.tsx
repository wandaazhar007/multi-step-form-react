import { Dispatch, FC, SetStateAction } from "react";
import { FormState } from "../../types/form";

type ShippingErrors = {
  street?: string;
  apt?: string;
  city?: string;
  state?: string;
  zipCode?: string;
};

interface FormShippingProps {
  formData: FormState;
  setFormData: Dispatch<SetStateAction<FormState>>;
  errors: ShippingErrors;
  clearError: (field: keyof ShippingErrors) => void;
}

const FormShipping: FC<FormShippingProps> = ({ formData, setFormData, errors, clearError }) => {
  const getControlClass = (field: keyof ShippingErrors) =>
    `formControl${errors[field] ? " hasError" : ""}`;

  const updateField = (field: keyof ShippingErrors, value: string) => {
    setFormData({ ...formData, [field]: value });
    clearError(field);
  };

  return (
    <>
      <div className="wrapShipping">
        <div className="inputGroup input1">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            className={getControlClass("street")}
            id="street"
            aria-invalid={!!errors.street}
            aria-describedby={errors.street ? "street-error" : undefined}
            value={formData.street}
            onChange={(e) => {
              updateField("street", e.target.value);
            }}
          />
          {errors.street && (
            <span className="errorText" id="street-error">
              {errors.street}
            </span>
          )}
        </div>
        <div className="inputGroup input2">
          <label htmlFor="apt">Apt/Building <span className="optional">(optional)</span></label>
          <input
            type="text"
            className={getControlClass("apt")}
            id="apt"
            aria-invalid={!!errors.apt}
            aria-describedby={errors.apt ? "apt-error" : undefined}
            value={formData.apt}
            onChange={(e) => updateField("apt", e.target.value)}
          />
          {errors.apt && (
            <span className="errorText" id="apt-error">
              {errors.apt}
            </span>
          )}
        </div>
        <div className="inputGroup input3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className={getControlClass("city")}
            id="city"
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? "city-error" : undefined}
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
          />
          {errors.city && (
            <span className="errorText" id="city-error">
              {errors.city}
            </span>
          )}
        </div>
        <div className="inputGroup input4">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className={getControlClass("state")}
            id="state"
            aria-invalid={!!errors.state}
            aria-describedby={errors.state ? "state-error" : undefined}
            value={formData.state}
            onChange={(e) => updateField("state", e.target.value)}
          />
          {errors.state && (
            <span className="errorText" id="state-error">
              {errors.state}
            </span>
          )}
        </div>
        <div className="inputGroup input5">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            className={getControlClass("zipCode")}
            id="zipCode"
            aria-invalid={!!errors.zipCode}
            aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
            value={formData.zipCode}
            onChange={(e) => updateField("zipCode", e.target.value)}
          />
          {errors.zipCode && (
            <span className="errorText" id="zipCode-error">
              {errors.zipCode}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default FormShipping;
