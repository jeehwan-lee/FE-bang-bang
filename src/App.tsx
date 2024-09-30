import React, { useState } from "react";
import "./App.css";
import { getUserInfoTest, getUserListTest, postUserTest } from "./apis/testAPI";

function App() {
  const [result1, setResult1] = useState<any[]>([]);
  const [result2, setResult2] = useState<any>();
  const [result3, setResult3] = useState<any>();

  const handleOnClick = async (num: any) => {
    if (num === 1) {
      const response1 = await getUserListTest();
      console.log(response1);
      setResult1(response1);
    } else if (num === 2) {
      const response2 = await getUserInfoTest();
      console.log(response2);
      setResult2(response2);
    } else {
      const response3 = await postUserTest({
        email: "test1@naver.com",
        password: "123456",
      });
      console.log(response3);
      setResult3(response3);
    }
  };

  return (
    <div className="App">
      <button onClick={() => handleOnClick(1)}>GET 1번</button>
      <button onClick={() => handleOnClick(2)}>GET 2번</button>
      <button onClick={() => handleOnClick(3)}>POST 1번</button>
    </div>
  );
}

export default App;
