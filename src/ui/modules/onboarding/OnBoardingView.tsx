import { BaseCoomponentProps } from "@/types/OnboardingStep";

const OnBoardingView = ({
    getCurrentStep,
    nextStep,
    prevStep,
    isFirstStep,
    isFinalStep,
    stepList
}: BaseCoomponentProps) => {
    if (getCurrentStep()?.component) {
        const Component = getCurrentStep()?.component.step
        return (
            <>
                {
                    Component && (<Component
                        getCurrentStep={getCurrentStep}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        isFirstStep={isFirstStep}
                        isFinalStep={isFinalStep}
                        stepList={stepList}
                    />)
                }
            </>
        )
    }
    return null

};

export default OnBoardingView;