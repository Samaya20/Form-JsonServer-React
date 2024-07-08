import React from "react";
import "../styles/Students.css"

export default function Students({ students }) {
  return (
    <div className="students">
      {students.map((s) => (
        <div className="student">
          <img src={s.image} alt="avatar"/>
          <h1 key={s.id}>{s.name}</h1>
        </div>
      ))}
    </div>
  );
}
