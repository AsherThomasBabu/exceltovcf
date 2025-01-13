import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import ContactNameCustomization from "../FileDownload/ContactNameCustomization";
import ReactGA from "react-ga4";

const View = () => {
  const location = useLocation();
  
  // Redirect to home if no data is present
  if (!location.state?.data) {
    return <Navigate to="/" />;
  }

  const hasHeader = location.state.hasHeader;
  const jsonData = location.state.data;

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
  ];
  const [availableOptions, setAvailableOptions] = useState(allOptions);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const selectedOptionRender = selectedOptions.some((item) => item !== "");
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

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
    setShowTooltip(false);
  };

  const headerRow = hasHeader
    ? jsonData[0]
    : new Array(jsonData[0].length).fill("");
  const dataRows = hasHeader ? jsonData.slice(1) : jsonData;

  const unmappedColumns = selectedOptions.filter(option => option === "").length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Instructions Section */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Map Your Contact Fields</h1>
        <p className="text-gray-600 mb-2">
          Select how each column in your spreadsheet should be mapped to contact fields.
        </p>
        <p className="text-sm text-gray-500">
          {unmappedColumns > 0 
            ? `${unmappedColumns} column${unmappedColumns > 1 ? 's' : ''} still need${unmappedColumns === 1 ? 's' : ''} to be mapped`
            : "All columns are mapped!"}
        </p>
      </div>

      {/* Help Tooltip */}
      {showTooltip && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                Use the dropdowns below to match your spreadsheet columns with the correct contact fields.
                Each field can only be used once.
              </p>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="ml-auto pl-3"
            >
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto shadow-sm rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectAll}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              {headerRow.map((header, index) => (
                <th key={index} className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex flex-col space-y-1">
                    <select
                      onChange={(event) => handleDropdownChange(event, index)}
                      value={selectedOptions[index]}
                      className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md ${
                        !selectedOptions[index] ? 'border-orange-300 bg-orange-50' : ''
                      }`}
                    >
                      <option value="">Map this column...</option>
                      {allOptions.map((option, optionIndex) => (
                        <option
                          key={optionIndex}
                          value={option}
                          disabled={selectedOptions.includes(option) && selectedOptions[index] !== option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataRows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    onChange={(event) => handleCheckboxChange(event, row)}
                    checked={selectedData.includes(row)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                {row.map((data, dataIndex) => (
                  <td key={dataIndex} className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{data}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        {selectedData.length > 0 && selectedOptionRender && (
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={togglePopup}
          >
            Generate and Download VCF
          </button>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Customize Contact Names</h3>
              <button
                className="text-gray-400 hover:text-gray-500"
                onClick={togglePopup}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
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
