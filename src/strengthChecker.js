import React from "react";
import zxcvbn from "zxcvbn";

function Modal({ isOpen, onClose, password }) {
    const strength = zxcvbn(password).score;
    const strengthText = [".2", ".4", ".6", ".8", "1"][strength];
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        />
        <div className="bg-white p-8 rounded shadow-lg z-30">
          <h2 className="text-2xl mb-4">Password Strength</h2>
            <p className="mb-4">
                The strength of the generated password is as rated by 
                the zxcvbn library is: {strengthText} rated on a scale of .1 to 1
            </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

export default Modal;