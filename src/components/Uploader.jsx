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

  if (fileSubmitted && fileData) {
    return <Navigate to="/view" state={{ data: fileData, hasHeader }} />;
  }

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-2xl mx-auto">
      <div
        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors duration-300"
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
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        <p className="text-lg text-gray-600 mb-2">
          {fileName || "Drop your Excel file here or click to browse"}
        </p>
        {fileSizeError && (
          <p className="text-red-500 text-sm" data-testid="size-error">
            File size should be less than 1MB
          </p>
        )}
        {fileTypeError && (
          <p className="text-red-500 text-sm" data-testid="type-error">
            Only Excel files (.xlsx, .xls) and CSV files are allowed
          </p>
        )}
      </div>

      {selectedFile && (
        <div className="flex flex-col items-center space-y-4 w-full">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={hasHeader}
              onChange={handleHasHeaderChange}
              data-testid="header-checkbox"
            />
            <span>First row contains headers</span>
          </label>
          <button
            onClick={handleFileSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            data-testid="upload-button"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default Uploader; 