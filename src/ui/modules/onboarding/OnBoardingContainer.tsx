import { useState } from "react";
import OnBoardingView from "./OnBoardingView";
import { OnboardingStep } from "@/types/OnboardingStep";
import WelcomeStep from "./components/WelcomeStep";
import ProfileStep from "./components/ProfileStep";

const OnBoardingContainer = () => {

    const [currentStep, setCurrentStep] = useState<number>(1)
    const stepList: OnboardingStep[] = [
        {
            id: 1,
            label: "Bienvenue",
            component: { step: WelcomeStep }
        },
        {
            id: 2,
            label: "Login",
            component: { step: ProfileStep }
        },
        {
            id: 3,
            label: "Avatar",
            component: { step: WelcomeStep }
        },
    ]

    const getCurrentStep = () => {
        return stepList.find((elt) => elt.id === currentStep)
    }

    const nextStep = () => {
        if (currentStep < stepList.length){
            console.log("currentStep fct", currentStep)
            setCurrentStep(currentStep + 1)
        }
    }
    const prevStep = () => {
        if (currentStep > 1){
            setCurrentStep(currentStep - 1)
        }
    }

    const isFirstStep = () => {
        if (currentStep === 1) {
            return true
        }
        return false
    }

    const isFinalStep = () => {
        if (currentStep === stepList.length) {
            return true
        }
        return false
    }

    return (
        <>
            <OnBoardingView
                getCurrentStep={getCurrentStep}
                nextStep={nextStep}
                prevStep={prevStep}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
                stepList={stepList}
            />
        </>

    );
};

export default OnBoardingContainer;