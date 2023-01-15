// dictionary
const scaleNames = {
    c: "섭씨",
    f: "화씨",
}

// props -> 부모컴포넌트에서 TemperatureInput 태그에서 내려온 properties
function TemperatureInput(props) {
    const handleTemperatureChange = (event) => {
        props.onTemperatureChange(event.target.value)
    }
    // {scaleNames[props.scale]} -> 딕셔너리 scaleNames에서 Key(props받은 scale)에 따라 value(단위) 출력
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위: {scaleNames[props.scale]})
            </legend>
            <input value={props.temperature} onChange={handleTemperatureChange} />
        </fieldset>
    )
    
}

export default TemperatureInput