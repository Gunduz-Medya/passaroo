import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false); // Track password generation state

  const handleGeneratePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    setIsPasswordGenerated(true); // Set password generated flag to true
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="App min-h-screen bg-gradient-to-r from-indigo-700 to-purple-800 flex items-center justify-center py-6 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xs p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Passaroo - Password Generator</h1>

        {/* Length Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min={6}
            max={50}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Checkbox Options */}
        <div className="mb-6">
          <label className="flex items-center mb-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            Uppercase Letters
          </label>
          <label className="flex items-center mb-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Numbers
          </label>
          <label className="flex items-center mb-4 text-gray-700">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            Symbols
          </label>
        </div>

        {/* Generate Password Button */}
        <button
          onClick={handleGeneratePassword}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold mb-4 hover:bg-indigo-700 transition duration-300"
        >
          Generate Password
        </button>

        {/* Password Display */}
        <div className="mb-4">
          <p className="text-center text-lg text-gray-800">
            {password || 'Your password will appear here'}
          </p>
        </div>

        {/* Copy to Clipboard Button - Only Visible After Password is Generated */}
        {isPasswordGenerated && (
          <button
            onClick={handleCopy}
            className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${isCopied ? 'bg-green-600' : 'bg-green-500'} text-white`}
          >
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
