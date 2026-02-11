'use client';
import { useState } from 'react';

export default function Home() {

  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const [emailError, setEmailError] = useState('');
  const [reasonError, setReasonError] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);

  const blockedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'protonmail.com'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    setEmailError('');
    setReasonError('');

    let isValid = true;

    // Email checking
    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (email.includes('@')) {

      const domain = email.split('@')[1].toLowerCase();
      if (blockedDomains.includes(domain)) {
        setEmailError("Business emails only.");
        isValid = false;
      }
    } else {
      setEmailError("Invalid email format.");
      isValid = false;
    }


    if (reason.length < 20) {
      setReasonError(`Must be at least 20 characters. (Current: ${reason.length})`);
      isValid = false;
    }


    if (isValid) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        {isSuccess ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Success</h2>
            <p className="text-gray-700">You have been added to the queue.</p>
          </div>
        ) : (
          <>
            <h1 className="text-[24px] font-bold text-gray-900 text-center mb-6">
              Internal Tools Access
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">


              <div>
                <input
                  type="email"
                  placeholder="name@company.com"

                  className={`w-full p-3 border rounded-md outline-none transition-colors ${
                    emailError ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-black'
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              {/* Reason Input */}
              <div>
                <textarea
                  placeholder="Why do you need access?"
                  rows={4}
                  className={`w-full p-3 border rounded-md outline-none transition-colors ${
                    reasonError ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-black'
                  }`}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                <div className="flex justify-between mt-1">
                  {reasonError && (
                    <p className="text-red-500 text-sm">{reasonError}</p>
                  )}
                  <span className={`text-xs ml-auto ${reason.length < 20 ? 'text-gray-400' : 'text-green-600'}`}>
                    {reason.length} chars
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Request Access Token
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}