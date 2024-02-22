
const FormShipping = ({ formData, setFormData }: any) => {
  return (
    <>
      <div className="wrapInputGroup">
        <div className="inputGroup input1">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            className="formControl"
            id="street"
            value={formData.street}
            onChange={(e) => {
              setFormData({ ...formData, street: e.target.value });
            }}
          />
        </div>
        <div className="inputGroup input2">
          <label htmlFor="apt">Apt/Building</label>
          <input
            type="text"
            className="formControl"
            id="apt"
            value={formData.apt}
            onChange={(e) => setFormData({ ...formData, apt: e.target.value })} />
        </div>
        <div className="inputGroup input3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="formControl"
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
        </div>
        <div className="inputGroup input4">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="formControl"
            id="state"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
        </div>
        <div className="inputGroup input5">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            className="formControl"
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
        </div>
      </div>

    </>
  );
}

export default FormShipping;