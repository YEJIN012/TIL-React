import React from "react"

// 1. class 컴포넌트
// class ConfirmButton extends React.Component {
//     // 여기서부터
//     constructor(props) {
//         super(props)
//         // 여기까지는 습관적 사용
//         // Why?
//         // 생성자에서 super을 호출하기 전에는 this를 사용할 수 없다.

//         this.state = {
//             inConfirmed: false,
//         }

//         // 1. bind 코드
//         // this.handleConfirm = this.handleConfirm.bind(this)
//     }

//     // 1-1. bind 함수
//     // handleConfirm() {
//     //     this.setState((prevState) => ({
//     //         isConfirmed: !prevState.isConfirmed,
//     //     }))
//     // }

//     // 2. Arrow function 코드
//     handleConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }))
//     }

//     render() {
//         return (
//             <button
//                 onClick={this.handleConfirm}
//                 disabled={this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}

//             </button>
//         )
//     }
// }


// 2. 함수 컴포넌트
import { useState } from "react"

function ConfirmButton(props) {
    // const [state로 선언된 변수명, 해당 state의 set함수명] = useState(초기값)
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인함" : "확인하기"}
        </button>
    )
}

export default ConfirmButton