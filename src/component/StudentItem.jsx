import React from "react";
const StudentItem = (props) => {
    return (
        props.student.map(student =>(
            <tr>
                <td>{student.studentID}</td>
                <td>{student.lastName}</td>
                <td>{student.firstName}</td>
                <button className="btn btn-info me-3"  onClick={()=> props.deleteStudent(student.studentID)}>Xoa</button>
                <button className="btn btn-danger"  onClick={()=> props.editStudent(student.studentID)}>Chinh sua</button>
            </tr>
        ))
    )
}
export default StudentItem