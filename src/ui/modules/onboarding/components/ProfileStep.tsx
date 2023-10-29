import { BaseCoomponentProps } from "../../../../types/OnboardingStep";
import OnBoardingFooter from "./OnBoardingFooter";
import OnBoardingTabs from "./OnBoardingTabs";
import ProfileStepForm from "./ProfileStepForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormType } from "../../../../types/Forms";
import { useToggle } from "../../../../hooks/useToggle";

const ProfileStep = ({ nextStep, prevStep, isFirstStep, isFinalStep, getCurrentStep, stepList }: BaseCoomponentProps) => {

    const { value: isLoading, setValue: setLoading } = useToggle()

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        // reset,
        // setValue,
    } = useForm<OnboardingProfileFormType>()

    const onSubmit: SubmitHandler<OnboardingProfileFormType> = async (FormData) => {
        setLoading(true)
        console.log(FormData)
    }

    return (
        <div className="h-[calc(100vh-64px)]">

            <OnBoardingTabs tabs={stepList} getCurrentStep={getCurrentStep} />
            <div className="relative h-[calc(100vh-102px)] md:h-[calc(100vh-130px)] flex flex-col items-start md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="text-3xl text-center md:text-5xl md:text-left pt-3 px-6">Finalise ton compte</h1>
                    <p className="px-6 pt-6">Entre un login et change ton avatar !</p>
                </div>

                <div className="flex flex-col px-6 md:w-1/2">
                    <ProfileStepForm form={{errors, control, register, handleSubmit, onSubmit, isLoading}} />
                </div>

                <OnBoardingFooter prevStep={prevStep} nextStep={nextStep} isFirstStep={isFirstStep} isFinalStep={isFinalStep} />

            </div>


        </div>
    );
};

export default ProfileStep;