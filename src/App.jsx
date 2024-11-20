import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  //Creamos state variables de cada input
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  //creamos un nuevo objeto para añadir al array
  function handleSubmit(event) {
    event.preventDefault();

    //creamos el objeto
    const newStudent = {
      _id:(students.length+1),
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };

    //copiamos en el array
    setStudents([...students, newStudent]);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
              id="fullName"
             
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              value={image}
              id="image"
            
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              id="phone"
             
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              id="email"
             
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={(e) => {
                setProgram(e.target.value);
              }}
              value={program}
              id="program"
              type="select"
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={(e) => {
                setGraduationYear(e.target.value);
              }}
              value={graduationYear}
              id="graduationYear"
             
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={(e) => {
                setGraduated(e.target.value);
              }}
              checked={graduated}
              id="email"
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
