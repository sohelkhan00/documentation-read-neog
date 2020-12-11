import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [recommendation, setRecommendation] = useState([]);

  const database = {
    Frontend: [
      {
        name: "React",
        link: "https://reactjs.org/docs/getting-started.html"
      },
      {
        name: "Angular",
        link: "https://angular.io/docs"
      }
    ],
    Backend: [
      {
        name: "JavaScript",
        link:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
      },
      {
        name: "Java",
        link: "https://docs.oracle.com/en/java/"
      }
    ],
    Database: [
      {
        name: "Oracle",
        link: "https://docs.oracle.com/en/"
      },
      {
        name: "MongoDB",
        link: "https://docs.mongodb.com/"
      }
    ]
  };

  const buttonTitles = Object.keys(database);

  function buttonClickHandler(category) {
    const data = database[category];
    setRecommendation(data);
  }

  return (
    <div className="App">
      <h1>💻 Documentation Reads</h1>
      <h5>
        Check documentation of different tech. Select a category to get started
      </h5>
      {buttonTitles.map((item, index) => {
        return (
          <button key={index} onClick={() => buttonClickHandler(item)}>
            {item}
          </button>
        );
      })}
      <hr />
      <ul>
        {recommendation.map((item, index) => {
          return (
            <li key={index}>
              <div className="card">
                <strong style={{ fontSize: "2rem" }}>{item.name}</strong>
                <br />
                <button>
                  <a href={item.link}>Click to Read</a>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
