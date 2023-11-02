/** COMPONENTS */
import OnBoardingFooter from "../components/OnBoardingFooter";
import OnBoardingTabs from "../components/OnBoardingTabs";
import ProfileStepForm from "./ProfileStepForm";
import UploadAvatar from "../components/UploadAvatar";
/** HOOKS */
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "../../../../hooks/useToggle";
/** CONTEXT */
import { useAuth } from "../../../../context/AuthUserContext";
/** TYPES */
import { BaseCoomponentProps } from "../../../../types/OnboardingStep";
import { OnboardingProfileFormType } from "../../../../types/Forms";
/** FIREBASE */
import { FirestoreUpdateDocument } from "../../../../api/Firestore";
import { StorageReference, UploadTask, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase/firebase.config";
/** API */
import { toast } from "react-toastify";



const ProfileStep = ({ nextStep, prevStep, isFirstStep, isFinalStep, getCurrentStep, stepList }: BaseCoomponentProps) => {

    const { authUser } = useAuth()
    const { value: isLoading, toggle } = useToggle()
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)
    const [uploadProgress, setUploadProgress] = useState<number>(0)

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue,
    } = useForm<OnboardingProfileFormType>()

    /** 1 Si données du formulaire deja dans firestore => affichage dans input
     * Mise en place pour possibilité d'ajouter des inputs plus tard
     */
    const { login } = authUser.userDocument
    useEffect(() => {
        const inputUpdateFromFirestore: ("login")[] = ["login"]
        for (const inputFirestore of inputUpdateFromFirestore) {
            setValue(inputFirestore, authUser.userDocument[inputFirestore])
        }
    }, [])

    /** 3 envoi des donnees dans firestore */
    const handleUpdateUserDocument = async (FormData: OnboardingProfileFormType) => {
        const { error } = await FirestoreUpdateDocument(
            "users", authUser.uid, FormData
        )
        if (error) {
            toggle()
            toast.error(error.message)
            return
        }
        toggle()
        reset()
        nextStep()
    }

    /** 2 Submit du formulaire 
     * Si données sont inchangées => Next
     * Si changées => handleUpdateUserDocument
    */
    const onSubmit: SubmitHandler<OnboardingProfileFormType> = async (FormData) => {
        toggle()

        if (login !== FormData.login) {
            handleUpdateUserDocument(FormData)
        }

        toggle()
        nextStep()
        handleImageUpload()
    }

    /** 4 Avatar en local */
    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedImage(file)
            const reader = new FileReader()
            reader.onload = (e) => {
                let imgDataUrl: string | ArrayBuffer | null = null
                if (e.target) {
                    imgDataUrl = e.target.result
                }
                setImagePreview(imgDataUrl)
            }
            reader.readAsDataURL(file)
        }
    }

    /** 5 Avatar en local */
    const handleImageUpload = () => {
        let storageRef: StorageReference
        let uploadTask: UploadTask

        if (selectedImage !== null) {
            toggle()
            storageRef = ref(
                storage, `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
            )
            uploadTask = uploadBytesResumable(storageRef, selectedImage)
            uploadTask.on(
                "state_changed", (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setUploadProgress(progress)
                },
                (error) => {
                    console.log('Erreur upload avatar', error)
                    toggle()
                    toast.error("Erreur au download de votre avatar")
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            updateUserDocument(downloadURL)
                        }
                    )
                }
            )
        } else {
            nextStep()
        }
    }

     /** 6 transfert Avatar en ligne */
    const updateUserDocument =async (photoURL: string) => {
        const body = {
            photoURL: photoURL
        }
        const {error} = await FirestoreUpdateDocument(
            "users",
            authUser.uid,
            body
        )
        if (error) {
            toggle()
            toast.error(error.message)
            return
        }
        toggle()
        nextStep()
    }


    return (
        
        <div className="h-[calc(100vh-64px)]">

            <OnBoardingTabs tabs={stepList} getCurrentStep={getCurrentStep} />


            <div className="relative h-[calc(100vh-102px)] md:h-[calc(100vh-130px)] pt-10 flex flex-col md:items-start items-center md:flex-row gap-y-4">

                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl text-center pt-3 px-6 md:text-5xl md:text-left">Finalise ton compte</h1>
                    <p className="px-6 pt-6 text-center md:text-left">Entre un login et change ton avatar !</p>
                </div>

                <div className="flex flex-col pt-3 pl-6 mr-6">
                    <div className="md:w-[300px]">
                        <ProfileStepForm form={{ errors, control, register, handleSubmit, onSubmit, isLoading }} />
                    </div>
                    <UploadAvatar handleImageSelect={handleImageSelect} imagePreview={imagePreview} uploadProgress={uploadProgress} isLoading={isLoading} />
                </div>

                <OnBoardingFooter prevStep={prevStep} nextStep={handleSubmit(onSubmit)} isFirstStep={isFirstStep} isFinalStep={isFinalStep} isLoading={isLoading} />

            </div>


        </div>
    );
};

export default ProfileStep;