import React from "react";
import { useState } from "react";

type ChildrenProps = {
  nextStep: () => void;
  prevStep: () => void;
  setActive: (index: number) => void;
  currentStep: number;
};

type StepperProps = {
  children: (props: ChildrenProps) => JSX.Element;
  initial?: number;
};

const Stepper = ({ children, initial = 0 }: StepperProps) => {
  const [active, setActive] = useState(initial);

  const nextStep = () => {
    if (active < children({} as any).props.children.length - 1)
      setActive(active + 1);
  };

  const prevStep = () => {
    if (active > 0) setActive(active - 1);
  };

  console.log(
    children({
      nextStep,
      prevStep,
      setActive,
      currentStep: active
    }).props
  );

  return (
    <div data-cid="stepper">
      {
        children({
          nextStep,
          prevStep,
          setActive,
          currentStep: active
        } as ChildrenProps).props.children[active]
      }
    </div>
  );
};

export default Stepper;
