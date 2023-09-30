import React, { useState, useRef, useEffect } from "react";
import "../style/TestForm.css"; 
import { StyledComponentsDesign } from "./StyledComponentsDesign";

export const TestForm = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [textArray, setTextArray] = useState<string[]>([]);
  const [submittedInput1, setSubmittedInput1] = useState<string | null>(null); 
  const [isExpanded, setIsExpanded] = useState(false); 
  const expandTextRef = useRef<HTMLDivElement>(null); 
  const [utbildningar, setUtbildningar] = useState<string[]>([]);

  useEffect(() => {
    
    const handleClickOutside = (e: MouseEvent) => {
      if (expandTextRef.current && !expandTextRef.current.contains(e.target as Node) && e.target !== document.activeElement) {
        setIsExpanded(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };

  const handleAddText = () => {
    if (input2.trim() !== "") {
      setTextArray([...textArray, input2]);
      setInput2("");
    }
  };

  const handleShowUtbildningar = () => {
   
    const mockUtbildningar = ["Utbildning 1", "Utbildning 2", "Utbildning 3"];
    setUtbildningar(mockUtbildningar);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input1.trim() !== "") {
      setSubmittedInput1(input1); 
    }
  };

  const handleExpandTextClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div>
      <p>//////////////////CustomDigiButton//////////////////////////</p>
      <StyledComponentsDesign />
      <p>/////////////////////////////////////////////////////</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Jobbtitel:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={handleInput1Change}
          />
        </div>
        <div>
          <label htmlFor="input2">Sökord:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={handleInput2Change}
          />
          <button
            type="button"
            onClick={handleAddText}
          >
            Lägg till sökord
          </button>
        </div>
        <div style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
          {textArray.map((text, index) => (
            <div
              key={index}
              style={{ marginRight: "10px" }}
            >
              {text}
            </div>
          ))}
        </div>
        <div>
          <button type="submit">Sök</button>
        </div>
      </form>
      <p>Yrken:</p>
      {submittedInput1 !== null && (
        <div
          className={`input1-value ${isExpanded ? "expanded" : ""}`}
          onClick={handleExpandTextClick}
        >
          Jobb (klicka för mer info): {submittedInput1}
          {isExpanded && (
            <div
              className="expand-text"
              ref={expandTextRef}
              onClick={handleFormClick}
            >
              <p>
                Arbetsuppgifter: <br></br>Lön:
              </p>
              <div>
                <h3>Utbildningar</h3>
                <label htmlFor="selectInput">Studietyp</label>
                <select id="selectInput">
                  <option value="option1">Högskola</option>
                  <option value="option2">Universitet</option>
                  <option value="option3">Folkhögskola</option>
                </select>
                <label htmlFor="textInput">Studieort:</label>
                <input
                  type="text"
                  id="textInput"
                />
                <p>Endast distans []</p>
                <button onClick={handleShowUtbildningar}>Show Utbildningar</button>
                {utbildningar.length > 0 && (
                  <ul>
                    {utbildningar.map((utbildning, index) => (
                      <li key={index}>{utbildning}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
