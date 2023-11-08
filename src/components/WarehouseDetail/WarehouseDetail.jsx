import InputField from "../InputField/InputField";
import "./WarehouseDetail.scss";

function WarehouseDetail() {
  return (
    <div className="detail">
      <div className="detail__header-container">
        <img src="" alt="arrow" />
        <h3 className="detail__heading">Edit Warehouse</h3>
      </div>
      <div className="detail__wrapper">
        <div className="detail__warehouse-container">
          <h4 className="detail__subheading">Warehouse Details</h4>
          <p className="detail__text">Warehouse Name</p>
          <InputField value="Washington" />
          <p className="detail__text">Street Address</p>
          <InputField value="33 Pearl Street SW" />
          <p className="detail__text">City</p>
          <InputField value="Washington" />
          <p className="detail__text">Country</p>
          <InputField value="USA" />
        </div>
        <div className="detail__contact-container">
          <h4 className="detail__subheading">Contact Details</h4>
          <p className="detail__text">Contact Name</p>
          <InputField value="Graeme Lyon" />
          <p className="detail__text">Position</p>
          <InputField value="Warehouse Manager" />
          <p className="detail__text">Phone Number</p>
          <InputField value="+1(647)504-0911" />
          <p className="detail__text">Email</p>
          <InputField value="giyon@instock.com" />
        </div>
      </div>
      <div className="detail__btn-container">
        <button>Cancel</button>
        <button>Save</button>
        {/* the button tag will be replaecd with btn component */}
      </div>
    </div>
  );
}

export default WarehouseDetail;
