import { OnboardingStep } from "@/types/OnboardingStep";
import clsx from "clsx";

interface Props {
    tabs: OnboardingStep[],
    getCurrentStep: () => OnboardingStep | undefined,
}
const OnBoardingTabs = ({tabs, getCurrentStep} : Props) => {

    return (
        <div className="inline-block pl-6">
            <div className="flex items-center space-x-6">
                {
                    tabs && tabs.map((tab) => tab.id !== tabs.length && (
                        <div 
                            className={clsx(getCurrentStep && getCurrentStep()?.id === tab.id ? "border-vin opacity-70" : "text-gris", "text-sm mt-3 md:my-5 pb-1 border-b-2 z-10")}
                            key={tab.id}>{tab.label}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OnBoardingTabs;