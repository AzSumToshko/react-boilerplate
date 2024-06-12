/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Joyride, { Step } from "react-joyride";
import { LocalStorageKeys } from "../constants/Keys";

const Onboarding: React.FC = () => {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem(
      LocalStorageKeys.hasSeenOnboarding
    );
    if (!hasSeenOnboarding) {
      setRun(true);
    }
  }, []);

  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    const finishedStatuses = ["finished", "skipped"];
    if (finishedStatuses.includes(status)) {
      localStorage.setItem(LocalStorageKeys.hasSeenOnboarding, "true");
      setRun(false);
    }
  };

  const steps: Step[] = [
    {
      content: <h2>Lets begin our journey!</h2>,
      locale: { skip: <strong>SKIP</strong> },
      placement: "center",
      target: "body",
    },
    {
      content: (
        <h2>
          This is a card component where you can see important information.
        </h2>
      ),
      placement: "bottom",
      target: "#step-1",
      title: "First step",
    },
    {
      target: "#step-2",
      content: <h2>Here you can drop files for upload.</h2>,
      placement: "bottom",
      title: "Second step",
    },
    {
      target: "#step-3",
      content: <h2>Click here to see a notification example.</h2>,
      placement: "bottom",
      title: "Third step",
    },
    {
      target: "#step-4",
      content: <h2>Click here to see a success message.</h2>,
      placement: "bottom",
      title: "Fourth step",
    },
    {
      target: "#step-5",
      content: <h2>Click here to see an error message.</h2>,
      placement: "bottom",
      title: "Fifth step",
    },
    {
      target: "#step-6",
      content: <h2>Click here to see a custom toast message.</h2>,
      placement: "bottom",
      title: "Sixth step",
    },
  ];

  return (
    <Joyride
      continuous
      steps={steps}
      run={run}
      callback={handleJoyrideCallback}
      hideCloseButton
      scrollToFirstStep
      showSkipButton
      showProgress
    />
  );
};

export default Onboarding;
