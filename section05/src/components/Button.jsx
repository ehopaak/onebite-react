const Button = ({ text, color, children }) => {
  // e : 합성 이벤트 개체 -> 웹브라우저마다 동작하는 방식이 다르기 때문에 그것을 통일
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  console.log(text, color);
  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton} //onMouseEnter: 마우스 올렸을때 동작하는거
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};
export default Button;
