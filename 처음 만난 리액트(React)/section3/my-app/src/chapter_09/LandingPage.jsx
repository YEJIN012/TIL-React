import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    // const [state로 선언된 변수명, 해당 state의 set함수명] = useState(초기값)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <hr />
            <div style={{ padding: 16 }}>예진이의 리액트 공부!</div>
        </div>
    )
}
export default LandingPage