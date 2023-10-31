import { BaseCoomponentProps } from "../../../../types/OnboardingStep";
import OnBoardingFooter from "../components/OnBoardingFooter";
import OnBoardingTabs from "../components/OnBoardingTabs";
import ProfileStepForm from "./ProfileStepForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormType } from "../../../../types/Forms";
import { useToggle } from "../../../../hooks/useToggle";
import { FirestoreUpdateDocument } from "../../../../api/Firestore";
import { useAuth } from "../../../../context/AuthUserContext";
import { toast } from "react-toastify";

const ProfileStep = ({ nextStep, prevStep, isFirstStep, isFinalStep, getCurrentStep, stepList }: BaseCoomponentProps) => {

    const { authUser} = useAuth()
    console.log(authUser)
    const { value: isLoading, setValue: setLoading } = useToggle()

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        // setValue,
    } = useForm<OnboardingProfileFormType>()

    const handleUpdateUserDocument = async (FormData: OnboardingProfileFormType) => {
        const {error} = await FirestoreUpdateDocument(
            "users", authUser.uid, FormData
        )
        if (error) {
            setLoading(false)
            toast.error(error.message)
            return
        }
        setLoading(false)
        reset()
        nextStep()
    } 

    const onSubmit: SubmitHandler<OnboardingProfileFormType> = async (FormData) => {
        setLoading(true)
        handleUpdateUserDocument(FormData)

    }

    return (
        <div className="h-[calc(100vh-64px)]">

            <OnBoardingTabs tabs={stepList} getCurrentStep={getCurrentStep} />
            <div className="relative h-[calc(100vh-102px)] md:h-[calc(100vh-130px)] pt-10 flex flex-col md:items-start items-center md:flex-row gap-y-4">

                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl text-center pt-3 px-6 md:text-5xl md:text-left">Finalise ton compte</h1>
                    <p className="px-6 pt-6 text-center md:text-left">Entre un login et change ton avatar !</p>
                </div>

                <div className="flex flex-col pt-3 pl-6 mr-6 md:w-[300px] ">
                    <ProfileStepForm form={{errors, control, register, handleSubmit, onSubmit, isLoading}} />
                </div>

                <OnBoardingFooter prevStep={prevStep} nextStep={handleSubmit(onSubmit)} isFirstStep={isFirstStep} isFinalStep={isFinalStep} isLoading={isLoading} />

            </div>


        </div>
    );
};

export default ProfileStep;