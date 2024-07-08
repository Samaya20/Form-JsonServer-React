import React, { useState, useEffect } from "react";
import "../styles/Form.css";
import confetti from "https://esm.run/canvas-confetti@1";

export default function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthdate: "",
    score: "",
    image: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, surname, birthdate, score, image } = formData;
    if (name && surname && birthdate && score && image) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      try {
        await onFormSubmit(formData);
        confettiBtn();
        setFormData({
          name: "",
          surname: "",
          birthdate: "",
          score: "",
          image: "",
        });
      } catch (error) {
        console.error("There was an error posting the student data!", error);
      }
    }
  };

  const confettiBtn = () => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="myform">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          BirthDate
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </label>
        <label>
          Score
          <input
            type="text"
            name="score"
            value={formData.score}
            onChange={handleChange}
          />
        </label>
        <label>
          Image Link
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <span
            style={{
              fontSize: "13px",
              marginTop: "15px",
            }}
          >
            {" "}
            Test üçün bu linki copy et : <br />
            https://cdn-icons-png.flaticon.com/512/2632/2632839.png
          </span>
        </label>
        <input type="submit" value="Submit" disabled={!isFormValid} />
      </form>
    </div>
  );
}
