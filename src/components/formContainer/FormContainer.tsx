import { useEffect, useState, MouseEvent } from "react";
import FormInfo from "../formInfo/FormInfo";
import FormShipping from "../formShipping/FormShipping";
import FormBilling from "../formBilling/formBilling";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './formContainer.scss';
import '../../styles/inputStyles.scss';
import FormPayment2 from "../formPayment2/FormPayment2";
import { FormState } from "../../types/form";

type PersonalInfoErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

type ShippingErrors = {
  street?: string;
  apt?: string;
  city?: string;
  state?: string;
  zipCode?: string;
};

type BillingErrors = {
  streetBilling?: string;
  aptBilling?: string;
  cityBilling?: string;
  stateBilling?: string;
  zipCodeBilling?: string;
};

type PaymentErrors = {
  nameOnCard?: string;
  cardNumber?: string;
  exp?: string;
  cvc?: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  street: "",
  apt: "",
  city: "",
  state: "",
  zipCode: "",
  streetBilling: "",
  aptBilling: "",
  cityBilling: "",
  stateBilling: "",
  zipCodeBilling: "",
  nameOnCard: "",
  cardNumber: "",
  exp: "",
  cvc: "",
  checked: false,
  focus: ""
};

const FormContainer: React.FC = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Personal Info", "Shipping Address", "Billing Address", "Payment Method"];

  const [formData, setFormData] = useState<FormState>(() => {
    if (typeof window === "undefined") {
      return initialFormState;
    }
    const stored = localStorage.getItem('form_data');
    return stored ? (JSON.parse(stored) as FormState) : initialFormState;
  });
  const [infoErrors, setInfoErrors] = useState<PersonalInfoErrors>({});
  const [shippingErrors, setShippingErrors] = useState<ShippingErrors>({});
  const [billingErrors, setBillingErrors] = useState<BillingErrors>({});
  const [paymentErrors, setPaymentErrors] = useState<PaymentErrors>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('form_data', JSON.stringify(formData));
    }
  }, [formData])

  const validateInfoStep = (): PersonalInfoErrors => {
    const errors: PersonalInfoErrors = {};

    if (!formData.name?.trim()) {
      errors.name = "Full name is required";
    }
    if (!formData.email?.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.phone?.trim()) {
      errors.phone = "Phone number is required";
    }

    return errors;
  };

  const validateShippingStep = (): ShippingErrors => {
    const errors: ShippingErrors = {};

    if (!formData.street?.trim()) {
      errors.street = "Street is required";
    }
    if (!formData.city?.trim()) {
      errors.city = "City is required";
    }
    if (!formData.state?.trim()) {
      errors.state = "State is required";
    }
    if (!formData.zipCode?.trim()) {
      errors.zipCode = "Zip code is required";
    }

    return errors;
  };

  const validateBillingStep = (): BillingErrors => {
    const errors: BillingErrors = {};

    if (!formData.streetBilling?.trim()) {
      errors.streetBilling = "Street is required";
    }
    if (!formData.cityBilling?.trim()) {
      errors.cityBilling = "City is required";
    }
    if (!formData.stateBilling?.trim()) {
      errors.stateBilling = "State is required";
    }
    if (!formData.zipCodeBilling?.trim()) {
      errors.zipCodeBilling = "Zip code is required";
    }

    return errors;
  };

  const validatePaymentStep = (): PaymentErrors => {
    const errors: PaymentErrors = {};

    if (!formData.nameOnCard?.trim()) {
      errors.nameOnCard = "Name on card is required";
    }
    if (!formData.cardNumber?.trim()) {
      errors.cardNumber = "Card number is required";
    }
    if (!formData.exp?.trim()) {
      errors.exp = "Expiration date is required";
    }
    if (!formData.cvc?.trim()) {
      errors.cvc = "CVC is required";
    }

    return errors;
  };

  const clearInfoError = (field: keyof PersonalInfoErrors) => {
    setInfoErrors((prev) => {
      if (!prev[field]) return prev;
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const clearShippingError = (field: keyof ShippingErrors) => {
    setShippingErrors((prev) => {
      if (!prev[field]) return prev;
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const clearBillingError = (field: keyof BillingErrors) => {
    setBillingErrors((prev) => {
      if (!prev[field]) return prev;
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const resetBillingErrors = () => setBillingErrors({});

  const clearPaymentError = (field: keyof PaymentErrors) => {
    setPaymentErrors((prev) => {
      if (!prev[field]) return prev;
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const handlePrev = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPage((current) => Math.max(current - 1, 0));
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (page === 0) {
      const validationErrors = validateInfoStep();
      setInfoErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    } else if (page === 1) {
      const validationErrors = validateShippingStep();
      setShippingErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    } else if (page === 2) {
      const validationErrors = validateBillingStep();
      setBillingErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }

    setPage((current) => Math.min(current + 1, FormTitles.length - 1));
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const validationErrors = validatePaymentStep();
    setPaymentErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Form submitted", formData);
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <FormInfo formData={formData} setFormData={setFormData} errors={infoErrors} clearError={clearInfoError} />
    } else if (page === 1) {
      return <FormShipping formData={formData} setFormData={setFormData} errors={shippingErrors} clearError={clearShippingError} />
    } else if (page === 2) {
      return <FormBilling formData={formData} setFormData={setFormData} errors={billingErrors} clearError={clearBillingError} resetErrors={resetBillingErrors} />
    } else {
      return <FormPayment2 formData={formData} setFormData={setFormData} errors={paymentErrors} clearError={clearPaymentError} />
    }
  }
  return (

    <>
      <div className="titleMain">
        <img src="/amazon-logo.png" alt="amazon logo" />
      </div>
      <div className="step">
        <div className={`stepItem ${page === 0 ? "active" : ""} `}> Step 1</div>
        <div className={`stepItem ${page === 1 ? "active" : ""} `}> Step 2</div>
        <div className={`stepItem ${page === 2 ? "active" : ""} `}> Step 3</div>
        <div className={`stepItem ${page === 3 ? "active" : ""} `}> Step 4</div>
      </div>
      <div className="progressBar">
        <div className="progress" style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
      </div>
      <div className="header">
        <div className="title">{FormTitles[page]}</div>
      </div>
      <div className="body">
        <form action="">
          {pageDisplay()}
        </form>
      </div>
      <div className="footer">
        <div className="groupButton">
          {page < 1 ? (
            <>
              <button
                className="btnDisable"
                disabled
              >
                Prev
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="prev"
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faChevronLeft} className="icon" /> Prev
              </button>
            </>
          )}

          {page === FormTitles.length - 1 ? (
            <>
              <button
                type="button"
                className="prev"
                onClick={handleSubmit}
              >
                Submit <FontAwesomeIcon icon={faChevronRight} className="icon" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="prev"
                onClick={handleNext}
              >
                Next <FontAwesomeIcon icon={faChevronRight} className="icon" />
              </button>
            </>
          )}
        </div>
      </div>

    </>
  );
}

export default FormContainer;
