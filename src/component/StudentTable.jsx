import React from "react";
import StudentItem from "./StudentItem";

const StudentTable = (props) => {
    
    return (
        <table className="table table-bordered table-hover">
           <thead className="table-dark">
           <tr>
                    <th scope="col">Mã Sinh Viên</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Họ Đệm</th>
                    <th scope="col"> Action </th>
                </tr>
            </thead>
            <tbody>
                {
                   <StudentItem 
                   student = {props.student} 
                   deleteStudent =  {props.deleteStudent} 
                   editStudent = {props.editStudent} 
                   />
                }
            </tbody>
        </table>

    )
} 
export default StudentTable