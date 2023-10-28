import ButtonForm from "../../../../ui/design-syst/formulaire/ButtonForm";
import clsx from "clsx";

interface Props {
    nextStep?: () => void,
    prevStep?: () => void,
    isFirstStep?: () => boolean,
    isFinalStep?: () => boolean,
    isLoading?: boolean
}

const OnBoardingFooter = ({ nextStep, prevStep, isFirstStep, isFinalStep, isLoading }: Props) => {

    let buttonTitle: string

    if (isFirstStep && isFirstStep()) {
        buttonTitle = "Démarrer"
    } else if (isFinalStep && isFinalStep()) {
        buttonTitle = "Terminer"
    } else {
        buttonTitle = "Suivant"
    }

    return (
        <div className="absolute bottom-6 right-6 w-full">
            <div className={clsx("flex items-center gap-5", prevStep ? ('justify-between'): ('justify-end'))}>
                {
                    prevStep && (<button className={clsx(isLoading && "cursor-not-allowed")} onClick={prevStep}>Retour</button>)
                }
                {
                    nextStep && (<ButtonForm isLoading={isLoading} onClick={nextStep}>{buttonTitle}</ButtonForm>)
                }
            </div>
        </div>
    );
};

export default OnBoardingFooter;
