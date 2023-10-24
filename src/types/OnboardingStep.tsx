export interface BaseCoomponentProps {
    nextStep: () => void,
    prevStep: () => void,
    isFirstStep: () => boolean,
    isFinalStep: () => boolean,
    stepList: OnboardingStep[],
    getCurrentStep: () => OnboardingStep | undefined,
}

export interface OnboardingStep {
    id: number,
    label: string,
    component: { 
        step: React.ComponentType<BaseCoomponentProps>
    }
}