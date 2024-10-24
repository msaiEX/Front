// export default LoginPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice"; 
import {
  Text,
  Divider
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const LoginPage = () => {
  const user = useSelector((state) => state.user.user);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/My");
    }
  }, [user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // POST 요청 시 body에 데이터를 전달
      const response = await axios.post("http://localhost:8082/api/login", {
        id,        // 전송할 로그인 데이터
        password,
      }, {
        headers: {
          'Content-Type': 'application/json' // JSON 데이터임을 명시
        }
      });

      if (response.status === 200) {
        dispatch(setUser(response.data));
        // 성공적인 로그인 처리
        navigate("/My");
      } else {
        // 에러 처리
        setErrorMessage("로그인 실패: " + response.data.message);
      }
    } catch (error) {
      setErrorMessage("서버 에러가 발생했습니다.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="w-[960px] flex flex-col py-1 px-10 mt-10">
      <div className="bg-white drop-shadow-2xl rounded-3xl px-10 py-8 my-10 mx-60">
        <Text className='font-semibold text-3xl mb-4'>로그인</Text>
        <Text className='font-normal text-slate-600'>하나EX에 로그인 하고 더 많은 서비스를</Text>
        <Text className='font-normal text-slate-600'>즐겨보세요!</Text>
        <form onSubmit={handleSubmit}>
          <div className='mt-3'>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              className={`w-full bg-green-100 rounded-md px-2 py-[12px] text-sm 
                border border-transparent focus:bg-white focus:border-green-400 
                transition-all duration-300`}
              placeholder='아이디를 입력해 주세요'
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              className={`w-full bg-green-100 rounded-md px-2 py-[12px] text-sm 
                border border-transparent focus:bg-white focus:border-green-400 
                transition-all duration-300`}
              placeholder='비밀번호를 입력해 주세요'
              type="password"  // 비밀번호 타입 변경
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <Divider className='my-4' />
          <div className='flex justify-around mr-1'>
            <button type="submit">가입하기</button>
            <button type="submit">로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
