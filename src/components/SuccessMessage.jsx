import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';

const SuccessMessage = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const SuccessData = location.state;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-3">{SuccessData.message}</h1>
        <p className="text-gray-600 mb-6">
          {SuccessData.para}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Login
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;