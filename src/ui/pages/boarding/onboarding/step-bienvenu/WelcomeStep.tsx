import { BaseCoomponentProps } from "@/types/OnboardingStep";
import OnBoardingFooter from "../components/OnBoardingFooter";
import OnBoardingTabs from "../components/OnBoardingTabs";

const WelcomeStep = ({ nextStep, isFirstStep, isFinalStep, getCurrentStep, stepList }: BaseCoomponentProps) => {
    return (
        <div className="min-h-[calc(100vh-232px)]">
            <OnBoardingTabs tabs={stepList} getCurrentStep={getCurrentStep} />

            <div className="relative  md:h-[calc(100vh-340px)] flex flex-col items-start md:flex-row">
                <div className="md:w-2/3">
                    <h2 className="text-2xl text-center md:text-5xl md:text-left pt-5 px-6">
                        Bienvenue sur "Racks à Pinard"
                    </h2>
                    <p className="px-6 pt-6 md:text-xl">
                        Marre d'acheter du vin et de perdre ton temps dans ta
                        cave pour retrouver LA bouteille que tu veux boire ?
                    </p>
                    <p className="px-6 pt-3 md:text-xl">
                        Gère tes bouteilles et ta cave à vin depuis cette
                        application facilement et sans prise de tête !
                    </p>
                </div>

                <div className=" relative -top-10 md:w-1/3 mx-auto">
                    <img
                        src="/vine.svg"
                        alt="bouteille et verre de vin sur un plateau avec du raisin"
                        className="h-56 w-56 md:h-80 md:w-80"
                    />
                </div>

                <OnBoardingFooter
                    nextStep={nextStep}
                    isFirstStep={isFirstStep}
                    isFinalStep={isFinalStep}
                />
            </div>
        </div>
    );
};

export default WelcomeStep;