import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

// The main App component that renders a professional 404 error page.
// The design uses a darker color palette and a clean layout suitable for a developer portfolio.
const Error = () => {
  return (
    // Main container with a dark background and full-screen height.
    <div className="min-h-screen bg-gradient-to-r from-primary/5 to-secondary/5 flex items-center justify-center p-6 font-sans">
      {/* The card component from DaisyUI provides a clean container for the content. */}
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl rounded-xl p-8 text-center">
        <div className="card-body p-0">
          {/* Main heading with a modern, large font. */}
          <h1 className="text-9xl font-extrabold text-blue-500 mb-4 leading-none">
            404
          </h1>

          {/* Subtitle with a professional and clear message. */}
          <h2 className="text-3xl font-semibold  mb-2">
            Page Not Found
          </h2>

          {/* Descriptive paragraph with a subtle color. */}
          <p className="text-lg  opacity-70 mb-6">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Button to navigate back to the main site. Using 'btn-outline' for a cleaner look. */}
          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-outline button outline-blue-500 hover:text-white hover:bg-blue-500 btn-lg rounded-full"
              onClick={() => window.location.href = '/'} // Redirects to the root URL (homepage)
            >
              <FaArrowLeft /> Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;