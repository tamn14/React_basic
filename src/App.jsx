import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentTable from './component/StudentTable'
import FormAddStudent from './component/FormAddStudent'


function App() {
  const [student, setStudent] = useState([])
  const [EditStudent, SetEditStudent] = useState(null)
  const addStudent = (lastName, firstName) => {
    if (EditStudent) {
      const UpdateStudent = student.map(student => student.studentID == EditStudent.studentID ? { ...student, lastName, firstName } : student)
      setStudent(UpdateStudent)
      SetEditStudent(null)

    }
    // {...student , lastName , firstName} ==> dung de chinh sua doi tuong student voi lassName va firstName da duoc cap nhat
    else {
      const newStudent = { studentID: student.length + 1, lastName: lastName, firstName: firstName }
      setStudent([...student, newStudent])
    }



  }
  const deleteStudent = (studentID) => {
    const RemoveStudent = student.filter(student => student.studentID != studentID)
    setStudent(RemoveStudent)
  }
  const editStudent = (studentID) => {
    const studentToEdit = student.find(student => student.studentID == studentID)
    SetEditStudent(studentToEdit)
  } // Doan nay chi moi lay ra duoc student can chinh sua
  const [ShowForm, setShowForm] = useState(false)
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="text-center mb-4">Danh Sách Sinh Viên</h2>
            <StudentTable student={student} deleteStudent={deleteStudent} editStudent={editStudent} />
            <button className='btn btn-success' onClick={() => setShowForm(!ShowForm)}>
              {
                ShowForm ? "Close Form" : "open Form"
              }
            </button>
            {
              ShowForm && <FormAddStudent addStudent={addStudent} EditStudent={EditStudent}/>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default App
