import React from "react";


const ThemeContext = React.createContext()  // context초기값 설정X -> provider에서 지정해줌.
ThemeContext.displayName = "ThemeContext"

export default ThemeContext