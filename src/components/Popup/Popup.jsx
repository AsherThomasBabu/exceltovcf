// Popup.js
import React, { useState } from "react";
import Modal from "react-modal";

const Popup = ({ excelFilePath }) => {
  const [isOpen, setIsOpen] = useState(true); // Open the modal by default

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Video Popup"
      className="m-auto w-10/12 md:w-3/4 lg:w-3/4"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center"
    >
      <div className="p-4 bg-white rounded-md">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/nt0yk0mFauA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
        ></iframe>
        <div className="flex items-center justify-between">
          <a
            href={excelFilePath}
            download
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Download Sample Excel
          </a>
          <a className="underline px-4 py-2 text-md">How to Use?</a>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
