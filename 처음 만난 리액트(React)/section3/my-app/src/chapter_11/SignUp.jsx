import React, { useState, useEffect } from "react";

function SignUp(props) {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("여자")

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value)
    }

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`)
        event.preventDefault()
    }

    useEffect(() => {
        console.log(name)
        console.log(gender)
    })

    return (
        // onSubmit -> 양식 제출(type="submit") 이벤트가 발생할 때의 동작을 지정한다.
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
    
   
}

export default SignUp