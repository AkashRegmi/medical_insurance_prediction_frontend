import React, { useState } from 'react';

const InsuranceForm: React.FC = () => {
    const [age, setAge] = useState<number | ''>('');
    const [sex, setSex] = useState<string>('male');
    const [bmi, setBmi] = useState<number | ''>('');
    const [children, setChildren] = useState<number | ''>(0);
    const [smoker, setSmoker] = useState<boolean>(false);
    const [region, setRegion] = useState<string>('northeast');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            age,
            sex,
            bmi,
            children,
            smoker,
            region,
        };
        console.log('Form Data:', formData);
        // Here you can add the logic to send formData to your backend or model for prediction
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Insurance Prediction Form</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Age</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Sex</label>
                <select
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">BMI</label>
                <input
                    type="number"
                    value={bmi}
                    onChange={(e) => setBmi(Number(e.target.value))}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Children</label>
                <input
                    type="number"
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Smoker</label>
                <input
                    type="checkbox"
                    checked={smoker}
                    onChange={(e) => setSmoker(e.target.checked)}
                    className="mt-1"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Region</label>
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                    <option value="northeast">Northeast</option>
                    <option value="northwest">Northwest</option>
                    <option value="southeast">Southeast</option>
                    <option value="southwest">Southwest</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
            >
                Predict
            </button>
        </form>
    );
};

export default InsuranceForm;