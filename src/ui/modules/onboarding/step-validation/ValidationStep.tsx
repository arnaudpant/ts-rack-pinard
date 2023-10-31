import { BaseCoomponentProps } from "@/types/OnboardingStep";
import OnBoardingFooter from "../components/OnBoardingFooter";


const ValidationStep = ({ nextStep, prevStep, isFirstStep, isFinalStep, getCurrentStep, stepList }: BaseCoomponentProps) => {
    return (
        <div>
            Validation
            <OnBoardingFooter prevStep={prevStep} nextStep={nextStep} isFirstStep={isFirstStep} isFinalStep={isFinalStep} isLoading={isLoading} />
        </div>
    );
};

export default ValidationStep;