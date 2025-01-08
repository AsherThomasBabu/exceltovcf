import { useEffect, useState } from "react";
import generateFile from "../../components/GenerateFile.jsx/GenerateFile";
import ReactGA from "react-ga4";

const ContactNameCustomization = ({ selectedData, selectedOptions }) => {
  const [addStaticText, setAddStaticText] = useState(false);
  const [staticText, setStaticText] = useState("");
  const [addIncrementingNumber, setAddIncrementingNumber] = useState(false);
  const [startingNumber, setStartingNumber] = useState(1);
  const [incrementValue, setIncrementValue] = useState(1);
  const [customizedNames, setCustomizedNames] = useState([]);
  const [data, setData] = useState([...selectedData]);

  const handleAddStaticTextChange = (event) => {
    const checked = event.target.checked;
    setAddStaticText(checked);

    ReactGA.event({
      category: "Customization",
      action: checked
        ? "Enabled Static Text Customization"
        : "Disabled Static Text Customization",
    });
  };

  const handleStaticTextChange = (event) => {
    setStaticText(event.target.value);
    ReactGA.event({
      category: "Customization",
      action: "Updated Static Text",
      label: event.target.value,
    });
  };

  const handleAddIncrementingNumberChange = (event) => {
    const checked = event.target.checked;
    setAddIncrementingNumber(checked);

    ReactGA.event({
      category: "Customization",
      action: checked
        ? "Enabled Incrementing Number Customization"
        : "Disabled Incrementing Number Customization",
    });
  };

  const handleStartingNumberChange = (event) => {
    const value = Number(event.target.value);
    setStartingNumber(value);

    ReactGA.event({
      category: "Customization",
      action: "Updated Starting Number",
      value: value,
    });
  };

  const handleIncrementValueChange = (event) => {
    const value = Number(event.target.value);
    setIncrementValue(value);

    ReactGA.event({
      category: "Customization",
      action: "Updated Increment Value",
      value: value,
    });
  };

  useEffect(() => {
    const generateCustomizedNames = () => {
      const names = [];
      let currentNumber = startingNumber;

      // Identify the column for the contact name
      const nameIndex = selectedOptions.indexOf("First Name");

      data.forEach((contact) => {
        let name = "";
        if (addStaticText) {
          name += staticText + " ";
        }
        if (addIncrementingNumber) {
          name += currentNumber;
          currentNumber += incrementValue;
        }

        // Add the contact's name from the selectedData
        name += " " + (contact[nameIndex] || "");

        names.push(name);
      });

      setCustomizedNames(names);
    };

    generateCustomizedNames();
  }, [
    addIncrementingNumber,
    addStaticText,
    startingNumber,
    incrementValue,
    staticText,
    selectedData,
    selectedOptions,
  ]);

  const handleGenerateClick = () => {
    const updatedData = data.map((contact, index) => {
      let updatedContact = [...contact]; // Create a copy of the current contact
      let prefix = "";
      if (addStaticText) {
        prefix += staticText + " ";
      }
      if (addIncrementingNumber) {
        prefix += startingNumber + index * incrementValue;
      }

      const nameIndex = selectedOptions.indexOf("First Name");
      if (nameIndex !== -1) {
        // Update the name with the prefix
        updatedContact[nameIndex] = prefix + " " + (contact[nameIndex] || "");
      } else {
        // No name column, so add it
        selectedOptions.push("First Name");
        updatedContact.push(prefix);
      }

      return updatedContact;
    });

    // Track the download event
    ReactGA.event({
      category: "File Generation",
      action: "Downloaded Customized Contact Data",
      value: updatedData.length,
    });

    generateFile(updatedData, selectedOptions); // Generate the file
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">
        Contact Name Customization Options
      </h2>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={addStaticText}
            onChange={handleAddStaticTextChange}
          />
          Add static text before the contact name
        </label>

        {addStaticText && (
          <input
            type="text"
            className="border rounded px-2 py-1 mt-2"
            placeholder="Enter static text"
            value={staticText}
            onChange={handleStaticTextChange}
          />
        )}
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={addIncrementingNumber}
            onChange={handleAddIncrementingNumberChange}
          />
          Add incrementing number after the contact name
        </label>

        {addIncrementingNumber && (
          <div className="flex space-x-2 mt-2">
            <input
              type="number"
              className="border rounded px-2 py-1"
              placeholder="Starting number"
              value={startingNumber}
              onChange={handleStartingNumberChange}
            />

            <input
              type="number"
              className="border rounded px-2 py-1"
              placeholder="Increment value"
              value={incrementValue}
              onChange={handleIncrementValueChange}
            />
          </div>
        )}
      </div>
      <div className="my-4">
        <h3 className="font-semibold">Preview:</h3>
        <ul>
          {customizedNames.slice(0, 3).map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerateClick}
      >
        Generate Contact Card
      </button>
    </div>
  );
};

export default ContactNameCustomization;
