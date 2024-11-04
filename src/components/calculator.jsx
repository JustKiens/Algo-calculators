import { useState } from 'react';

function Calculator({ title, formula }) {
  const [rate, setRate] = useState('');
  const [payment, setPayment] = useState('');
  const [periods, setPeriods] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const r = parseFloat(rate) / 100;
    const pmt = parseFloat(payment);
    const n = parseInt(periods);

    let calculation = formula(r, pmt, n);
    setResult(calculation);
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Interest Rate (%):</span>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Payment:</span>
          <input
            type="number"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Number of Periods:</span>
          <input
            type="number"
            value={periods}
            onChange={(e) => setPeriods(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
          />
        </label>
        <button
          onClick={calculate}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        {result !== null && (
          <p className="mt-4 text-lg font-semibold text-green-700">
            Result: {result.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default Calculator;
