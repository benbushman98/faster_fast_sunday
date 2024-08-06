import React, { useEffect, useState } from "react";

const CheckModal = ({ isOpen, closeModal, cliche, index }) => {
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    const marked = localStorage.getItem(`done${index}`);
    if (marked === String(index)) {
      setIsMarked(true);
    } else {
      setIsMarked(false);
    }
  }, [index]);

  function markAsComplete() {
    if (isMarked) {
      localStorage.removeItem(`done${index}`);
      setIsMarked(false);
    } else {
      localStorage.setItem(`done${index}`, index);
      setIsMarked(true);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">Cliche Details</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold text-lg">Title:</h2>
          <p>{cliche.cliche}</p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold text-lg">Rule to "hear it":</h2>
          <p>{cliche.description}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              markAsComplete();
              closeModal();
            }}
            className={`px-4 py-2 rounded ml-2 ${isMarked ? "bg-red-500" : "bg-green-500"} text-white`}
          >
            {isMarked ? "Unhear it!" : "I heard it!"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckModal;
