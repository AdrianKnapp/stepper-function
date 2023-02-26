import React from "react";
import Stepper from "./components/stepper";

const steps = ["Step 1", "Step 2", "Step 3"];

type StepProps = {
  nextStep: () => void;
  prevStep: () => void;
  children: JSX.Element;
};

const Step = ({ nextStep, prevStep, children }: StepProps) => {
  return (
    <div className="mx-auto max-w-40 flex flex-col items-center">
      <div className="m-2">{children}</div>
      <div className="flex gap-2">
        <button className="py-2 px-4 bg-gray-200 rounded-md" onClick={prevStep}>
          Back
        </button>
        <button className="py-2 px-4 bg-gray-200 rounded-md" onClick={nextStep}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Stepper>
      {({ nextStep, prevStep }) => (
        <>
          {steps.map((step) => (
            <Step nextStep={nextStep} prevStep={prevStep}>
              <p>{step}</p>
            </Step>
          ))}
        </>
      )}
    </Stepper>
  );
}
