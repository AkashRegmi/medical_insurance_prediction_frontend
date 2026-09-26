import React from 'react';
import InsuranceForm from './components/InsuranceForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Insurance Cost Prediction</h1>
        <InsuranceForm />
      </div>
    </div>
  );
};

export default App;