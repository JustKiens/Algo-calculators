import React from 'react';

const PresentValueOrdinaryAnnuity = () => {
  // Formula to calculate the present value of an ordinary annuity
  const formula = (r, pmt, n) => (pmt * (1 - Math.pow(1 + r, -n)) / r);

  const handleCalculate = (e) => {
    e.preventDefault();
    const r = parseFloat(e.target.r.value) / 100; // Convert percentage to decimal
    const pmt = parseFloat(e.target.pmt.value);
    const n = parseInt(e.target.n.value, 10);
    
    if (!isNaN(r) && !isNaN(pmt) && !isNaN(n)) {
      const result = formula(r, pmt, n);
      alert(`Present Value: ${result.toFixed(2)}`); // Fixed to 2 decimal places for currency format
    } else {
      alert('Please enter valid inputs');
    }
  };

  return (
    <div className="text-center p-6 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-2 text-green-800">Present Value of Ordinary Annuity</h2>
      <p className="text-green-600 mb-4">
        The present value of an ordinary annuity is calculated using the formula:
      </p>
      <p className="text-green-600 mb-6">
        <strong>PV = PMT * (1 - (1 + r)<sup>-n</sup>) / r</strong>
      </p>
      {/* Integrated Calculator Form */}
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
          name="r"
          placeholder="Enter Interest Rate (%)"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="n"
          placeholder="Enter Number of Periods"
          required
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
        >
          Calculate Present Value
        </button>
      </form>
    </div>
  );
};

export default PresentValueOrdinaryAnnuity;
