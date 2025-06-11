import React, { useState } from "react";
import Button from "../components/Button";

const HomePage = () => {
  const [participants, setParticipants] = useState<number>(0);
  const [nonParticipants, setNonParticipants] = useState<number>(0);

  const handleParticipat = () => {
    setParticipants((prev) => prev + 1);
  };
  const handleNonparticipat = () => {
    setNonParticipants((prev) => prev + 1);
  };

  return (
    <>
      <div className="bg-amber-900">
        <h2>Ar dalyvausi?</h2>
        <p> Dalyvaus: {participants}</p>
        <p> Nedalyvaus: {nonParticipants}</p>
        <Button buttonText="Dalyvausiu" onClick={handleParticipat} />
        <Button buttonText="Nedalyvausiu" onClick={handleNonparticipat} />
      </div>
    </>
  );
};

export default HomePage;
