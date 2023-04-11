import React, { useState } from "react";
import { level1, level2, level3, level4, level5 } from "./passwordGen";
import Modal from "./strengthChecker";

function App() {
  const [passwordLevel, setPasswordLevel] = useState(1);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSliderChange = (event) => {
    setPasswordLevel(event.target.value);
  };

  const generatePassword = () => {
    let password = "";

    switch (passwordLevel) {
      case "1":
        password = level1();
        break;
      case "2":
        password = level2();
        break;
      case "3":
        password = level3();
        break;
      case "4":
        password = level4();
        break;
      case "5":
        password = level5();
        break;
      default:
        break;
    }

    setGeneratedPassword(password);
  };

  const checkStrength = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white m-6 p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="mb-4">
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700"
          >
            Password Strength: {passwordLevel}
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={passwordLevel}
            onChange={handleSliderChange}
            className="w-full mt-2"
            id="level"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={generatePassword}
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Generate Password
          </button>
          <button
            onClick={checkStrength}
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Check Strength
          </button>
        </div>
        <div>

        <label //opening tag
            htmlFor="password"
            className="block text-sm font-medium text-gray-700">  
            Omitted Characters
          </label>  

          {/* //closing tag 
          */}

          <form>
          <input type="text"//create a new state and substitute that character with a value property
            
            value={generatedPassword}  //we need to modify the generated password method in order add custom characters that must be omitted when the final password is generated
             //readOnly //place holder until we can edit this input bar
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="password"
          />
          </form>







          <label //we now need to replace generated password with a new method that allows us to manually write down the characters that we want ommited when we click the generate
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          > 
            Generated Password 
          </label>
          <input
            type="text"
            value={generatedPassword}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="password"
          />
          
        </div>
      </div>
      <div
        className="p-6 rounded-md shadow-md max-w-md"
        style={{
          backgroundColor:
            passwordLevel === "1"
              ? "#FFE5E5"
              : passwordLevel === "2"
              ? "#FFF0CC"
              : passwordLevel === "3"
              ? "#F0F4C3"
              : passwordLevel === "4"
              ? "#D0E9C6"
              : "#C8E6C9",
        }}
      >
        {" "}
        {passwordLevel === "1" && (
          <>
            <p className="text-xs text-gray-600">Very Weak</p>
            <p className="text-xs text-gray-600">
              Level 1 - Basic Alphabetic Password: This level provides a low
              level of security with an 8-character password consisting of only
              upper and lowercase alphabetic characters.
            </p>
          </>
        )}
        {passwordLevel === "2" && (
          <>
            <p className="text-xs text-gray-600">Weak</p>
            <p className="text-xs text-gray-600">
              Level 2 - Alphanumeric Password: This level provides a moderate
              level of security with a 10-character password that includes upper
              and lowercase letters as well as digits.
            </p>
          </>
        )}
        {passwordLevel === "3" && (
          <>
            <p className="text-xs text-gray-600">Fair</p>
            <p className="text-xs text-gray-600">
              Level 3 - Alphanumeric with Special Characters: This level offers
              a high level of security with a 12-character password containing
              upper and lowercase letters, digits, and special characters.
            </p>
          </>
        )}
        {passwordLevel === "4" && (
          <>
            <p className="text-xs text-gray-600">Strong</p>
            <p className="text-xs text-gray-600">
              Level 4 - Guaranteed Mixed-Character Password: This level provides
              a very high level of security with a 16-character password that
              has at least one uppercase letter, one lowercase letter, one
              digit, and one special character.
            </p>
          </>
        )}
        {passwordLevel === "5" && (
          <>
            <p className="text-xs text-gray-600">Very Strong</p>
            <p className="text-xs text-gray-600">
              Level 5 - Secure and Balanced Password: This level offers an
              extremely high level of security with a 24-character password that
              uses a cryptographically secure random number generator, including a 
              diverse character set, and ensuring a balanced distribution of character 
              types.
            </p>
          </>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        password={generatedPassword}
      />
    </div>
  );
}

export default App;
