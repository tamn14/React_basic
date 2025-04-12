import React, { useEffect, useState } from "react";
const FormAddStudent = (props) => {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const SaveStudent = () => {
        if (lastName && firstName) {
            props.addStudent(lastName, firstName)
            setFirstName("")
            setLastName("")
        }
    }
    useEffect(() => {
        if (props.EditStudent) {
            setLastName(props.EditStudent.lastName)
            setFirstName(props.EditStudent.firstName)
        }
        else {
            setFirstName("")
            setLastName("")
        }
    }, [props.EditStudent])
    
    return (
        <div>
            <h2>Them Sinh Vien</h2>
            <form>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>

                <button type="button" className="btn btn-primary" onClick={SaveStudent}>Luu Sinh Vien </button>
            </form>
        </div>
    );
}
export default FormAddStudent