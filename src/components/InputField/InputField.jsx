import "./InputField.scss";

function InputField() {
  return (
    <section className="input">
      <div className="input__container">
        <input
          className="input__field input__field--active"
          type="text"
          //   value="props.here"
        />
      </div>
    </section>
  );
}

export default InputField;
