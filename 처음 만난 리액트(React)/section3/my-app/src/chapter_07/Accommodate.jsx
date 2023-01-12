import React, { useState, useEffect } from "react"
import useCounter from './useCounter'

const MAX_CAPACITY = 10

function Accommodate(props) {
    const [isFull, setIsfull] = useState(false)
    const [count, increaseCount, decreaseCount] = useCounter(0)

    // 마운트된 직후 + 컴포넌트 업데이트 마다 호출
    useEffect(() => {
        console.log("========")
        console.log("useEffect() is called")
        console.log(`isFull: ${isFull}`)
    })

    // 마운트된 직후, 카운트값이 바뀔 때만 호출
    useEffect(() => {
        setIsfull(count >= MAX_CAPACITY)
        console.log(`Current count value: ${count}`)
    }, [count])

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
            
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    )
    // button, input 등 뒤에 value, disabled = 활성화, 비활성화 조건
    // JSX에서는 중괄호 안에 JavaScript 코드를 사용할 수 있는데,그 안에서 JavaScript의 && 연산자를 사용해서 조건부 렌더링(Conditional Rendering)을 하는 코드입니다.
    // isFull 이 true 여야지 && 뒤로 넘어가므로... if 조건부와 동일하게 쓰임.
}

export default Accommodate