import React from "react";
import Menu from "./Menu";
import { IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";  // IoPersonCircleSharp 추가
import { Box, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);  // user 정보를 가져옴

  return (
    <nav className="w-[1140px] h-[55px] px-10 bg-background">
      <div
        name="nav-container"
        className="w-full h-full flex items-center justify-between"
      >
        <div name="logobox" className="flex gap-1">
          <Box className="w-[24px] h-[24px]">
            <Image src="/image/hana_logo.png" alt="flag" />
          </Box>
          {/* <Text name="title">HanaEx</Text> */}
          <Image src="/image/hanaex_logo.png" className='h-[24px]' alt="flag" />
        </div>
        <div name="menus" className="h-full flex items-center gap-3">
          <Link to={"/"}>
            <Menu menu_name="오늘의 환율" />
          </Link>
          <Link to={"/News"}>
            <Menu menu_name="오늘의 뉴스" />
          </Link>
          <Link to={"/Semantic"}>
            <Menu menu_name="오늘의 온도" />
          </Link>
          <Link to={"/Board"}>
            <Menu menu_name="게시판" />
          </Link>
        </div>

        <div>
          {user ? (
            // 로그인 상태일 때 사용자 정보와 아이콘 표시
            <div className="flex items-center gap-2">
              <Text className='bg-red-200 text-red-600 px-1 rounded-sm'>LV{user.user_lv}</Text>
              <Text fontSize="md" fontWeight="bold">
                {user.user_name}님
              </Text>
              <Link to={"/My"}>
                {/* 로그인 상태일 때 아이콘을 변경하고 색을 green으로 설정 */}
                <IoPersonCircleSharp className="w-8 h-8" color="green" />
              </Link>
            </div>
          ) : (
            // 로그인하지 않았을 때 기본 로그인 아이콘 표시
            <Link to={"/Login"}>
              <IoPersonCircleOutline className="w-8 h-8" />
            </Link>
          )}
        </div>
      </div>
      <div className="border"></div>
    </nav>
  );
};

export default NavBar;
