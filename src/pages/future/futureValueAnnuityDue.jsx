import React, { useState } from 'react';

const FutureValueAnnuityDue = () => {
  // State to hold calculation steps
  const [steps, setSteps] = useState([]);
  // State to hold input values
  const [inputValues, setInputValues] = useState({ pmt: '', i: '', m: '', t: '' });
  // State to hold the future value result
  const [futureValue, setFutureValue] = useState(null);
  // State to hold the factor for displaying in the final calculation
  const [factor, setFactor] = useState(null);

  // Updated formula to calculate the future value of an annuity due
  const formula = (pmt, i, m, t) => {
    const r = i / m; // Effective interest rate per period
    const n = m * t; // Total number of periods
    const factor = ((1 + r) ** n - 1) / r; // Step 1: Calculate ((1 + r)^n - 1) / r
    const futureValue = (1 + r) * pmt * factor; // Step 2: Multiply by (1 + r) and PMT
    return { futureValue, factor, r, n };
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const pmt = parseFloat(e.target.pmt.value);
    const i = parseFloat(e.target.i.value) / 100; // Convert percentage to decimal
    const m = parseInt(e.target.m.value, 10);
    const t = parseInt(e.target.t.value, 10);
    
    if (!isNaN(pmt) && !isNaN(i) && !isNaN(m) && !isNaN(t)) {
      // Clear previous steps
      const calculationSteps = [];
      const { futureValue, factor, r, n } = formula(pmt, i, m, t);
      
      // Store input values
      setInputValues({ pmt, i: i * 100, m, t }); // Store i back as percentage for display
      setFactor(factor); // Store the calculated factor for display
      
      // Step-by-step explanation
      calculationSteps.push(`Step 1: Calculate effective interest rate per period (r = i / m)`);
      calculationSteps.push(`Interest Rate per Period (r) = ${i} / ${m} = ${r}`);
      
      calculationSteps.push(`Step 2: Calculate total number of periods (n = m * t)`);
      calculationSteps.push(`Total Number of Periods (n) = ${m} * ${t} = ${n}`);

      calculationSteps.push(`Step 3: Calculate ((1 + r)^n - 1) / r`);
      calculationSteps.push(`1 + r = ${1 + r}`);
      calculationSteps.push(`(1 + r)^n = ${(1 + r) ** n}`);
      calculationSteps.push(`((1 + r)^n - 1) = ${(1 + r) ** n - 1}`);
      calculationSteps.push(`Factor = ((1 + r)^n - 1) / r = ${factor}`);
      
      // Step 4: Show final future value calculation
      calculationSteps.push(`Step 4: Calculate Future Value: (1 + r) * PMT * Factor`);
      calculationSteps.push(`Future Value = ${(1 + r)} * ${pmt} * ${factor} = ${futureValue}`);
      
      // Set the steps to state
      setSteps(calculationSteps);
      setFutureValue(futureValue.toFixed(2)); // Save the formatted future value for display
    } else { 
      alert('Please enter valid inputs');
    }
  };

  return (
    <div className="text-center p-6 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Future Value of Annuity Due</h2>
      <p className="text-blue-600 mb-4">
        The future value of an annuity due is calculated using the formula:
      </p>
      <p className="text-blue-600 mb-6">
        <strong>FV = (1 + r) * PMT * ((1 + r)^n - 1) / r</strong>
      </p>
      {/* Calculator form */}
      <form onSubmit={handleCalculate} className="space-y-4">
        <input
          type="number"
          name="pmt"
          placeholder="Enter Payment (PMT)"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="i"
          placeholder="Enter Annual Interest Rate (%)"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="m"
          placeholder="Enter Compounding Periods per Year (m)"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="t"
          placeholder="Enter Total Years (t)"
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
        <strong>Payment (PMT): </strong> {inputValues.pmt} <br />
        <strong>Annual Interest Rate (i): </strong> {inputValues.i}% <br />
        <strong>Compounding Periods per Year (m): </strong> {inputValues.m} <br />
        <strong>Total Years (t): </strong> {inputValues.t} <br />
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
            <strong>Future Value Calculation: </strong>
            {`Future Value = ${(1 + (inputValues.i / 100) / inputValues.m).toFixed(2)} * ${inputValues.pmt} * ${factor} = ${futureValue}`}; {/* Show the future value calculation */}
          </p>
          <p className="text-blue-600">
            <strong>Future Value: </strong>
            {futureValue} {/* Show the future value directly */}
          </p>
        </div>
      )}
    </div>
  );
};

export default FutureValueAnnuityDue;
