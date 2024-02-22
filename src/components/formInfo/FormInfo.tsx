const FormInfo = ({ formData, setFormData }: any) => {

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }

  return (
    <>
      <div className="wrapInfo">
        <div className="inputGroup">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="formControl"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="formControl"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">Phone Number</label>
          {/* <PhoneNumberInput /> */}
          <input
            type="text"
            className="formControl"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })} />
        </div>
      </div>
    </>
  );
}

export default FormInfo;