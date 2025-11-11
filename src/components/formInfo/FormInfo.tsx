import { FC, Dispatch, SetStateAction } from "react";
import { formatPhoneNumber } from "../../utils/Utils";
import { FormState } from "../../types/form";

type FormInfoErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

interface FormInfoProps {
  formData: FormState;
  setFormData: Dispatch<SetStateAction<FormState>>;
  errors: FormInfoErrors;
  clearError: (field: keyof FormInfoErrors) => void;
}

const FormInfo: FC<FormInfoProps> = ({ formData, setFormData, errors, clearError }) => {
  const getControlClass = (field: keyof FormInfoErrors) =>
    `formControl${errors[field] ? " hasError" : ""}`;

  const updateField = (field: keyof FormInfoErrors, value: string) => {
    setFormData({ ...formData, [field]: value });
    clearError(field);
  };

  return (
    <>
      <div className="wrapInfo">
        <div className="inputGroup">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className={getControlClass("name")}
            id="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
          {errors.name && (
            <span className="errorText" id="name-error">
              {errors.name}
            </span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={getControlClass("email")}
            id="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && (
            <span className="errorText" id="email-error">
              {errors.email}
            </span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className={getControlClass("phone")}
            id="phone"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            value={formData.phone}
            onChange={(e) => updateField("phone", formatPhoneNumber(e.target.value))}
          />
          {errors.phone && (
            <span className="errorText" id="phone-error">
              {errors.phone}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default FormInfo;
