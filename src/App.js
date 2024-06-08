import { useState } from "react";



function App() {
  const options = [
    { "value": "react", "label": "React JS" },
    { "value": "angular", "label": "Angular" },
    { "value": "html", "label": "HTML" },
    { "value": "css", "label": "CSS" },
    { "value": "bootstrap", "label": "Bootstrap" },
    { "value": "tailwind", "label": "Tailwind CSS" },
    { "value": "node", "label": "Node JS" },
    { "value": "express", "label": "Express JS" },
    { "value": "mongo", "label": "MongoDB" },
    { "value": "firebase", "label": "Firebase" },
    { "value": "postgresql", "label": "Postgresql" },
  ];


  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSelectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setInputValue('');
    setShowOptions(true);
  };

  const handleRemoveOption = (option) => {
    const updatedSelectedOptions = selectedOptions.filter(selected => selected.value !== option.value);
    setSelectedOptions(updatedSelectedOptions);
    setShowOptions(true);
  };

  const handleFocus = () => {
    setShowOptions(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowOptions(false);
    }, 100);
  };

  const filterOptions = () => {
    return options.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedOptions.some(selected => selected.value === option.value)
    );
  };

  const filteredOptions = filterOptions();

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[500px] mx-0 my-auto relative border-2 border-blue-400 rounded-md p-3">
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map(option => (
            <span key={option.value} className="bg-blue-700 text-white rounded-md flex items-center p-2">
              {option.label}
              <button onClick={() => handleRemoveOption(option)} className="ml-5 cursor-pointer">x</button>
            </span>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search and select options..."
          className="focus:outline-none p-2"
        />
        {showOptions && (
          <ul className="list-none p-0 m-0 max-h-[300px] overflow-y-auto w-[100%] z-10">
            {filteredOptions.map(option => (
              <li key={option.value} onClick={() => handleSelectOption(option)} className="p-2 cursor-pointer hover:bg-slate-50">
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
