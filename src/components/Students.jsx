import React from "react";
import "../styles/Students.css";

export default function Students({ students }) {
  return (
    <div className="students">
      {students.map((s) => (
        <div key={s.id} className="student">
          <img src={s.image} alt="avatar" />
          <div className="text">
            <h1>
              {s.name} {s.surname}
            </h1>
            <h1>
              <span>BirthDate : </span>
              {s.birthdate}
            </h1>
            <h1>
              <span>Score : </span>
              {s.score}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
