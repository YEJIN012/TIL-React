import React from "react";

const students = [
    {
        id: 1,
        name : "Yejin",
    },
    {
        id: 2,
        name : "Hojung",
    },
    {
        id: 3,
        name : "Hanee",
    },
    {
        id: 4,
        name : "Yonghwan",
    }
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
            {/* {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })} */}
        </ul>
    )
}

export default AttendanceBook