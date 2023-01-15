import React from "react"

function Card(props) {
    const { title, backgroundColor, children } = props

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 18,
                boxShadow: "8px 8px 4px grey",
                backgroundColor: backgroundColor || "white",
                whiteSpace: 'pre-wrap'
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )
}
export default Card