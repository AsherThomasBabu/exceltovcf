import { useState } from "react";
import * as XLSX from "xlsx";
import { Navigate } from "react-router-dom";
import ReactGA from "react-ga4";

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileSizeError, setFileSizeError] = useState(false);
  const [fileTypeError, setFileTypeError] = useState(false);
  const [hasHeader, setHasHeader] = useState(false);
  const [fileSubmitted, setFileSubmitted] = useState(false);
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 1048576) {
      setSelectedFile(file);
      setFileName(file.name);
      setFileSizeError(false);
      ReactGA.event({
        category: "File Upload",
        action: "File Selected",
        label: file.name,
        value: file.size,
      });
    } else {
      setSelectedFile(null);
      setFileName("");
      setFileSizeError(true);
      ReactGA.event({
        category: "File Upload",
        action: "File Upload Error",
        label: "File size exceeded limit",
      });
    }
  };

  const handleHasHeaderChange = () => {
    setHasHeader(!hasHeader);
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
          raw: false,
          defval: "",
        });
        setFileData(jsonData);
        setFileSubmitted(true);
        ReactGA.event({
          category: "File Processing",
          action: "File Submitted",
          label: fileName,
        });
      };
      fileReader.readAsArrayBuffer(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.size <= 1048576 && isFileAllowed(file)) {
      setSelectedFile(file);
      setFileName(file.name);
      setFileTypeError(false);
      ReactGA.event({
        category: "File Upload",
        action: "File Dropped",
        label: file.name,
        value: file.size,
      });
    } else {
      setSelectedFile(null);
      setFileName("");
      setFileTypeError(true);
      ReactGA.event({
        category: "File Upload",
        action: "File Drop Error",
        label: "Invalid file type or size",
      });
    }
  };

  const isFileAllowed = (file) => {
    const allowedTypes = [".xlsx", ".xls", ".csv"];
    const fileType = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    return allowedTypes.includes(fileType);
  };

  return (
    <div className="flex flex-col items-center space-y-6 w-full max-w-2xl mx-auto">
      <div
        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors duration-300 bg-gray-50"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
        data-testid="drop-area"
      >
        <input
          type="file"
          id="fileInput"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileUpload}
          className="hidden"
          data-testid="file-input"
        />
        <div className="mb-4">
          <svg
            className="mx-auto h-14 w-14 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z M12 16.5v-6m0 0l-3 3m3-3l3 3"
            />
          </svg>
        </div>
        <p className="text-lg text-gray-600 mb-2">
          {fileName || "Drop your Excel file here or click to browse"}
        </p>
        <p className="text-sm text-gray-500">
          Supports .xlsx, .xls, and .csv files up to 1MB
        </p>
        {fileSizeError && (
          <p className="text-red-500 text-sm mt-2" data-testid="size-error">
            File size should be less than 1MB
          </p>
        )}
        {fileTypeError && (
          <p className="text-red-500 text-sm mt-2" data-testid="type-error">
            Only Excel files (.xlsx, .xls) and CSV files are allowed
          </p>
        )}
      </div>

      {selectedFile && (
        <div className="flex flex-col items-center space-y-4 w-full">
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              checked={hasHeader}
              onChange={handleHasHeaderChange}
              data-testid="header-checkbox"
            />
            <span>First row contains headers</span>
          </label>
          <button
            onClick={handleFileSubmit}
            className="px-6 py-2.5 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            data-testid="upload-button"
          >
            Generate VCF
          </button>
        </div>
      )}

      {fileSubmitted && fileData && <Navigate to="/view" state={{ data: fileData, hasHeader }} />}
    </div>
  );
};

export default Uploader; 