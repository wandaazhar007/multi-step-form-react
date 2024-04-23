import { useEffect, useState } from "react";
import FormInfo from "../formInfo/FormInfo";
import FormShipping from "../formShipping/FormShipping";
import FormBilling from "../formBilling/formBilling";
import FormPayment from "../formPayment/FormPayment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './formContainer.scss';
import '../../styles/inputStyles.scss';

const FormContainer: React.FC = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Personal Info", "Shipping Address", "Billing Address", "Payment"];

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('form_data')!);

  const [formData, setFormData] = useState(dataFromLocalStorage || {
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
    expDate: "",
    cvc: "",
    checked: false,
    focus: ""

  });

  useEffect(() => {
    localStorage.setItem('form_data', JSON.stringify(formData));
  }, [formData])

  const pageDisplay = () => {
    if (page === 0) {
      return <FormInfo formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <FormShipping formData={formData} setFormData={setFormData} />
    } else if (page === 2) {
      return <FormBilling formData={formData} setFormData={setFormData} />
    } else {
      return <FormPayment formData={formData} setFormData={setFormData} />
    }
  }
  return (
    <>
      <div className="step">
        <div className={`stepItem ${page === 0 || formData.name != null ? "active" : ""} `}> Step 1</div>
        <div className={`stepItem ${page === 1 || formData.street != null ? "active" : ""} `}> Step 2</div>
        <div className={`stepItem ${page === 2 || formData.streetBilling != null ? "active" : ""} `}> Step 3</div>
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
          <button
            className="prev"
            onClick={() => setPage((current) => current - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="icon" /> Prev
          </button>
          <button
            className="next"
            onClick={() => setPage((current) => current + 1)}>
            Next <FontAwesomeIcon icon={faChevronRight} className="icon" />
          </button>
        </div>
      </div>

    </>
  );
}

export default FormContainer;