import { useContext } from "react"
import ThemeContext from "./ThemeContext"

function MainContent(props) {
    // Context.Consumer 대신에 useContext 훅 사용.
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요. 테마변경을 해보세요!</p>
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    )    
}
export default MainContent