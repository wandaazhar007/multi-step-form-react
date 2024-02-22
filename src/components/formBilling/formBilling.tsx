import './formBilling.scss';

const FormBilling = ({ formData, setFormData }: any) => {

  const handleClick = () => {
    if (formData.checked === false) {
      setFormData({
        ...formData,
        streetBilling: formData.street,
        aptBilling: formData.apt,
        cityBilling: formData.city,
        stateBilling: formData.state,
        zipCodeBilling: formData.zipCode,
        checked: true
      })
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
        /> <span>Same as shipping address</span>
      </div>
      <div className="wrapInputGroup2">
        <div className="inputGroup2 input1">
          <label htmlFor="streetBilling">Street</label>
          <input
            type="text"
            className="inputLength3"
            id="streetBilling"
            value={formData.streetBilling}
            onChange={(e) => {
              setFormData({ ...formData, streetBilling: e.target.value });
            }}
          />
        </div>
        <div className="inputGroup2 input2">
          <label htmlFor="aptBilling">Apt/Building</label>
          <input
            type="text"
            className="inputLength2"
            id="aptBilling"
            value={formData.aptBilling}
            onChange={(e) => setFormData({ ...formData, aptBilling: e.target.value })} />
        </div>
        <div className="inputGroup2 input3">
          <label htmlFor="cityBilling">City</label>
          <input
            type="text"
            className="inputLength2"
            id="cityBilling"
            value={formData.cityBilling}
            onChange={(e) => setFormData({ ...formData, cityBilling: e.target.value })} />
        </div>
        <div className="inputGroup2 input4">
          <label htmlFor="stateBilling">State</label>
          <input
            type="text"
            className="inputLength2"
            id="stateBilling"
            value={formData.stateBilling}
            onChange={(e) => setFormData({ ...formData, stateBilling: e.target.value })} />
        </div>
        <div className="inputGroup2 input5">
          <label htmlFor="zipCodeBilling">Zip Code</label>
          <input
            type="text"
            className="inputLength2"
            id="zipCodeBilling"
            value={formData.zipCodeBilling}
            onChange={(e) => setFormData({ ...formData, zipCodeBilling: e.target.value })} />
        </div>
      </div>

    </>
  );
}

export default FormBilling;