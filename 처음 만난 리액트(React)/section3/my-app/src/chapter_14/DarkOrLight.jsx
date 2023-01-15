import { useState, useCallback } from "react"
import ThemeContext from "./ThemeContext"
import MainContent from "./MainContent"

function DarkOrLight(props) {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark")
        } else if (theme == "dark") {
            setTheme("light")
        }
    }, [theme])

    return (
        // 하위 컴포인 MainContext를 Provider로 감싸서 ThemeContext값을 하위컴포에서도 쓸 수 있도록 함.
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent/>
        </ThemeContext.Provider>
    )
}

export default DarkOrLight