import { useState, useRef } from "react";
//간다한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  let count = 0;

  const onChange = (e) => {
    // countRef.current++;
    // console.log(countRef.current);
    count++;
    console.log(count);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM요소 포커스
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        ref +1
      </button>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" onChange={onChange}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" onChange={onChange} />
        {input.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
