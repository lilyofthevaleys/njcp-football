export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">NJCP Football</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a test page to verify that the Next.js setup is working correctly.
        </p>
        <div className="flex justify-center">
          <a 
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}