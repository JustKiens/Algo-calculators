import React, { useState } from 'react';

const FutureValueOrdinaryAnnuity = () => {
  // State to hold calculation steps
  const [steps, setSteps] = useState([]);
  // State to hold input values
  const [inputValues, setInputValues] = useState({ p: '', i: '', m: '', t: '' });
  // State to hold the future value result
  const [futureValue, setFutureValue] = useState(null);

  // Formula to calculate the future value of an ordinary annuity
  const formula = (p, r, n) => {
    if (r === 0) {
      return p * n;
    }
    return p * ((Math.pow(1 + r, n) - 1) / r);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const p = parseFloat(e.target.p.value);
    const i = parseFloat(e.target.i.value); // Use raw input for interest rate
    const m = parseInt(e.target.m.value, 10);
    const t = parseInt(e.target.t.value, 10);

    // Calculate r and n based on input values
    const r = i / m;  // Effective interest rate per period
    const n = t * m;  // Total number of periods

    if (!isNaN(p) && !isNaN(i) && !isNaN(m) && !isNaN(t)) {
      // Clear previous steps
      const calculationSteps = [];
      const result = formula(p, r, n);

      // Store input values for display
      setInputValues({ p, i, m, t });

      // Step-by-step calculation
      calculationSteps.push(`Step 1: Calculate Future Value`);
      calculationSteps.push(`r = i / m = ${i} / ${m} = ${r}`);
      calculationSteps.push(`n = t * m = ${t} * ${m} = ${n}`);
      if (r === 0) {
        calculationSteps.push(`Future Value = P * n = ${p} * ${n} = ${result}`);
      } else {
        calculationSteps.push(`Future Value = P * ((1 + r)^n - 1) / r`);
        calculationSteps.push(`1 + r = ${1 + r}`);
        calculationSteps.push(`(1 + r)^n = ${(1 + r) ** n}`);
        calculationSteps.push(`((1 + r)^n - 1) = ${(1 + r) ** n - 1}`);
        calculationSteps.push(`Future Value = ${p} * ((1 + r)^n - 1) / r = ${result}`);
      }

      // Set the steps to state
      setSteps(calculationSteps);
      setFutureValue(result.toFixed(2)); // Save the formatted future value for display
    } else { 
      alert('Please enter valid inputs');
    }
  };

  return (
    <div className="text-center p-6 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Future Value of Simple Annuity</h2>
      <p className="text-blue-600 mb-4">
        The Future Value of simple annuity is calculated using the formula:
      </p>
      <p className="text-blue-600 mb-6">
        <strong>FV = P * ((1 + r)^n - 1) / r</strong>
      </p>
      {/* Calculator form */}
      <form onSubmit={handleCalculate} className="space-y-4">
        <input
          type="number"
          name="p"
          placeholder="Enter Payment (P):"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="i"
          placeholder="Enter Annual Interest Rate:"
          step="any" // Allow decimal input
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="m"
          placeholder="Enter Compounding Periods per Year (m):"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="t"
          placeholder="Enter Number of Years (t):"
          required
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Calculate Future Value
        </button>
      </form>

      {/* Display steps of the calculation */}
      <div className="mt-6 text-left">
        <strong>Payment (P): </strong> {inputValues.p} <br />
        <strong>Annual Interest Rate (i): </strong> {inputValues.i}% <br />
        <strong>Compounding Periods per Year (m): </strong> {inputValues.m} <br />
        <strong>Number of Years (t): </strong> {inputValues.t} <br />
        <h3 className="text-xl font-semibold text-blue-800">Calculation Steps:</h3>
        <ul className="list-decimal pl-5">
          {steps.map((step, index) => (
            <li key={index} className="text-blue-600">{step}</li>
          ))}
        </ul>
      </div>

      {/* Display the final result */}
      {futureValue !== null && (
        <div className="mt-6 p-4 border border-blue-300 rounded bg-white">
          <h3 className="text-lg font-semibold text-blue-800">Final Result:</h3>
          <p className="text-blue-600">
            <strong>Future Value: </strong>
            {futureValue}
          </p>
        </div>
      )}
    </div>
  );
};

export default FutureValueOrdinaryAnnuity;
