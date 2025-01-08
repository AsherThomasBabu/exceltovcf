import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ContactNameCustomization from "../FileDownload/ContactNameCustomization";
import ReactGA from "react-ga4";

const View = () => {
  const location = useLocation();
  const hasHeader = location.state.hasHeader;
  const jsonData = location.state.jsonData;

  const [selectedData, setSelectedData] = useState(
    jsonData.slice(hasHeader ? 1 : 0)
  );
  const [selectAll, setSelectAll] = useState(true);
  const allOptions = [
    "First Name",
    "Middle Name",
    "Last Name",
    "Nickname",
    "Phone (Cell)",
    "Phone (Home)",
    "Phone (Work)",
    "Email (Home)",
    "Email (Work)",
    // "Birthday (DD/MM/YYYY)",
  ];
  const [availableOptions, setAvailableOptions] = useState(allOptions);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const selectedOptionRender = selectedOptions.some((item) => item !== "");
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    ReactGA.event({
      category: "Generate and Download",
      action: "Generate VCF",
      label: "Generate and Download VCF",
    });
  };

  useEffect(() => {
    const updatedAvailableOptions = allOptions.filter(
      (option) => !selectedOptions.includes(option)
    );
    setAvailableOptions(updatedAvailableOptions);
  }, [selectedOptions]);

  useEffect(() => {
    if (hasHeader) {
      setSelectedOptions(Array(jsonData[0].length).fill(""));
    }
  }, [hasHeader, jsonData]);

  const handleCheckboxChange = (event, rowData) => {
    const checked = event.target.checked;

    if (checked) {
      setSelectedData((prevSelectedData) => [...prevSelectedData, rowData]);
    } else {
      setSelectedData((prevSelectedData) =>
        prevSelectedData.filter((data) => data !== rowData)
      );
    }
  };

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);

    if (checked) {
      setSelectedData(dataRows);
    } else {
      setSelectedData([]);
    }
  };

  const handleDropdownChange = (event, index) => {
    const selectedOption = event.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = [...prevSelectedOptions];
      updatedOptions[index] = selectedOption;

      const updatedAvailableOptions = availableOptions.filter(
        (option) => option !== selectedOption
      );
      setAvailableOptions(updatedAvailableOptions);
      return updatedOptions;
    });
  };

  const headerRow = hasHeader
    ? jsonData[0]
    : new Array(jsonData[0].length).fill("");
  const dataRows = hasHeader ? jsonData.slice(1) : jsonData;

  return (
    <div className="m-10">
      {console.log("selectedData", selectedData, selectedOptions)}
      <div className="overflow-x-scroll flex justify-start m-auto">
        <table className="min-w-full bg-white border border-gray-300 border-separate">
          <thead>
            <tr>
              <th className="px-2 py-3 bg-gray-200 text-gray-600">
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectAll}
                />
              </th>
              {headerRow.map((header, index) => (
                <th key={index} className="px-2 py-3 bg-gray-200 text-gray-600">
                  <select
                    onChange={(event) => handleDropdownChange(event, index)}
                    defaultValue={selectedOptions[index]}
                    className="text-sm overflow-hidden whitespace-pre text-ellipsis"
                  >
                    <option value="">Select a header</option>
                    {allOptions.map((option, optionIndex) => (
                      <option
                        key={optionIndex}
                        value={option}
                        disabled={selectedOptions.includes(option)}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, index) => (
              <tr key={index}>
                <td className="border-t px-2 py-3">
                  <input
                    type="checkbox"
                    onChange={(event) => handleCheckboxChange(event, row)}
                    checked={selectedData.includes(row)}
                  />
                </td>
                {row.map((data, dataIndex) => (
                  <td key={dataIndex} className="border-t px-2 py-3">
                    <span className="text-sm">{data}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedData.length > 0 && selectedOptionRender && (
        <button
          className="m-10 bg-gray-800 text-white px-6 py-3 rounded-md"
          onClick={togglePopup}
        >
          Generate and Download VCF
        </button>
      )}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            {/* Close button */}
            <button
              className="block relative float-right top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={togglePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Contact Name Customization component */}
            <ContactNameCustomization
              selectedData={selectedData}
              selectedOptions={selectedOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default View;
