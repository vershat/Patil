import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('/chars', { text: inputText });
      
      if (response.data === null) {
        setResult('INVALID STRING');
      } else {
        setResult(response.data);
      }
    } catch (err) {
      setError('Error connecting to the API. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-5">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl max-w-4xl w-full animate-slide-up">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            🔤 String to Characters Converter
          </h1>
          <p className="text-gray-600 text-lg">
            Convert any string into individual characters
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-6">
            <label htmlFor="textInput" className="block text-gray-800 font-semibold text-lg mb-2">
              Enter your text:
            </label>
            <textarea
              id="textInput"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your text here..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-base font-sans resize-y transition-all duration-300 bg-gray-50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              rows="4"
            />
            <div className="text-right mt-2 text-gray-500 text-sm">
              Characters: {inputText.length}
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
              loading ? 'opacity-70 cursor-not-allowed transform-none' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Converting...' : 'Convert to Characters'}
          </button>
        </form>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-xl mb-6 animate-shake">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Result:
            </h2>
            {result === 'INVALID STRING' ? (
              <div className="bg-red-100 border-2 border-red-500 text-red-700 p-6 rounded-xl text-center text-xl font-semibold">
                <span className="text-2xl mr-3">⚠️</span>
                {result}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 max-h-96 overflow-y-auto p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                {result.map((char, index) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-gray-200 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-lg animate-pop-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="block text-xl font-semibold text-gray-800 mb-1">
                      {char === ' ' ? '␣' : char}
                    </span>
                    <span className="block text-xs text-gray-500 font-medium">
                      {index}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <footer className="text-center mt-10 pt-6 border-t border-gray-200 text-gray-500">
          <p>Built with React & FastAPI</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
