import { useState } from "react";
import * as XLSX from "xlsx";
import { Navigate } from "react-router-dom";

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
    } else {
      setSelectedFile(null);
      setFileName("");
      setFileSizeError(true);
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
        console.log("JSON data:", jsonData);
        console.log(hasHeader);
        setFileData(jsonData);
        setFileSubmitted(true);
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
    } else {
      setSelectedFile(null);
      setFileName("");
      setFileTypeError(true);
    }
  };

  const isFileAllowed = (file) => {
    const allowedTypes = [".xlsx", ".xls", ".csv"];
    const fileType = file.name
      .substring(file.name.lastIndexOf("."))
      .toLowerCase();
    return allowedTypes.includes(fileType);
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 m-10"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            {fileName && (
              <p className="mb-2 text-sm font-semibold">{fileName}</p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              XLSX, XLS, CSV (MAX: 1MB)
            </p>
            {fileSizeError && (
              <p className="mt-2 text-sm text-red-500">
                File size exceeds the limit (1MB).
              </p>
            )}
            {fileTypeError && (
              <p className="mt-2 text-sm text-red-500">Incorrect file type!</p>
            )}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept=".xlsx, .xls, .csv"
            onChange={handleFileUpload}
          />
        </label>
      </div>
      {selectedFile && !fileSizeError && (
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center">
            <input
              id="has-header-checkbox"
              type="checkbox"
              checked={hasHeader}
              onChange={handleHasHeaderChange}
              className="mr-2"
            />
            <label htmlFor="has-header-checkbox" className="text-sm">
              Does the file have a header?
            </label>
          </div>
          <button
            onClick={handleFileSubmit}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Process File
          </button>
        </div>
      )}
      {fileSubmitted && (
        <Navigate
          to="/view"
          state={{ jsonData: fileData, hasHeader: hasHeader }}
          replace={true}
        />
      )}
    </div>
  );
};

export default Uploader;
