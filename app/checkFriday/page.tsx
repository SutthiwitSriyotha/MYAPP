'use client';

import { useState } from 'react';
import { checkIfFriday } from '../actions/checkFriday';

export default function CheckFridayPage() {
  const [date, setDate] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = await checkIfFriday(date);
    setResult(message);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Check if the Date is Friday</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Enter a date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
