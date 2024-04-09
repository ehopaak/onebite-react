const CurrencyInput = ({ name, value, onChangeInput }) => {
  return (
    <div>
      <div>
        {name}:
        <input
          type="number"
          value={value}
          onChange={(e) => {
            onChangeInput(name, e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default CurrencyInput;
