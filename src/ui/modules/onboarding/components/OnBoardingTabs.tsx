import { OnboardingStep } from "@/types/OnboardingStep";

interface Props {
    tabs: OnboardingStep[],
    getCurrentStep: () => OnboardingStep | undefined,
}
const OnBoardingTabs = ({tabs, getCurrentStep} : Props) => {

    return (
        <div className="inline-block pl-6">
            <div className="flex items-center space-x-6">
                {
                    tabs && tabs.map((tab) => (
                        <div className="text-sm opacity-40">{tab.label}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default OnBoardingTabs;