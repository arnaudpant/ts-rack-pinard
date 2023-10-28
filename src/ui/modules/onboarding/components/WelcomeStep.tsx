import { BaseCoomponentProps } from "@/types/OnboardingStep";
import OnBoardingFooter from "./OnBoardingFooter";

const WelcomeStep = ({ nextStep, isFirstStep, isFinalStep }: BaseCoomponentProps) => {
    return (
        <div className="flex flex-col md:container mx-auto md:py-20">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3">
                    <h1 className="text-3xl text-center md:text-5xl p-6">Bienvenue sur l'appli "Racks à pinard" !</h1>
                    <p className="px-6">Marre d'acheter du vin et de perdre ton temps dans ta cave pour retrouver LA bouteille que tu veux boire ? Gère tes bouteilles et
                        ta cave à vin depuis cette application facilement et sans prise de tête !</p>
                </div>
                <div className="md:w-1/3 mx-auto">
                    <img src="/vine.svg" alt="" className="h-60 w-60" />
                </div>
            </div>
            <OnBoardingFooter nextStep={nextStep} isFirstStep={isFirstStep} isFinalStep={isFinalStep} />
        </div>
    );
};

export default WelcomeStep;