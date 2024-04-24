import { formatPhoneNumber } from "../../utils/Utils";

const FormInfo = ({ formData, setFormData }: any) => {
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