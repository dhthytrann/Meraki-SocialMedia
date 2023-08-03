import { useContext, useState } from "react";
import Step01 from "./Step01/Step01";
import Step02 from "./Step02/Step02";
import Step03 from "./Step03/Step03";
import { StepContext } from "../Context/stepContext";
import Step04 from "./Step04/Step04";

const StepPage = () => {
  const { step, setStep } = useContext(StepContext);
  return (
    <div className="step-page">
      <div className="multi-step">
        <div className={step == 1 ? "step-01 active" : "step-01"}>
          <div className="btn-step">
            {step > 1 ? (
              <div className="badge-step complete">
                <i class="fa-regular fa-check"></i>
              </div>
            ) : (
              <div className="badge-step">
                <p className="mb-0">1</p>
              </div>
            )}
          </div>
          <div
            className={step > 1 ? "progress-w complete" : "progress-w"}
          ></div>
        </div>
        <div className={step == 2 ? "step-02 active" : "step-02"}>
          <div className="btn-step">
            {step > 2 ? (
              <div className="badge-step complete">
                <i class="fa-regular fa-check"></i>
              </div>
            ) : (
              <div className="badge-step">
                <p className="mb-0">2</p>
              </div>
            )}
          </div>
          <div
            className={step > 2 ? "progress-w complete" : "progress-w"}
          ></div>
        </div>
        <div className={step == 3 ? "step-03 active" : "step-03"}>
          <div className="btn-step">
            {step > 3 ? (
              <div className="badge-step complete">
                <i class="fa-regular fa-check"></i>
              </div>
            ) : (
              <div className="badge-step">
                <p className="mb-0">3</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="content">
        {step == 1 ? (
          <Step01 />
        ) : step == 2 ? (
          <Step02 />
        ) : step == 3 ? (
          <Step03 />
        ) : (
          <Step04 />
        )}
      </div>
    </div>
  );
};
export default StepPage;
