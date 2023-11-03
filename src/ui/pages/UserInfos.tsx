/** COMPONENTS */
import UploadAvatar from "../modules/onboarding/components/UploadAvatar";
/** HOOKS */
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
/** CONTEXT */
import { useAuth } from "../../context/AuthUserContext";
/** TYPES */
import { OnboardingProfileFormType } from "../../types/Forms";
/** FIREBASE */
import { FirestoreUpdateDocument } from "../../api/Firestore";
import { StorageReference, UploadTask, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/firebase.config";
/** API */
import { toast } from "react-toastify";
import ProfileUserInfosForm from "../modules/user-infos/ProfileUserInfosForm";
import { Link } from "react-router-dom";
//import { Navigate } from "react-router-dom";


const UserInfos = () => {
    const { authUser } = useAuth()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
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
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        setIsLoading(false)
    }

    /** 2 Submit du formulaire 
     * Si données sont inchangées => Next
     * Si changées => handleUpdateUserDocument
    */
    const onSubmit: SubmitHandler<OnboardingProfileFormType> = async (FormData) => {
        setIsLoading(true)
        if (login !== FormData.login) {
            handleUpdateUserDocument(FormData)
        }
        setIsLoading(false)

        handleImageUpload()
    }

    /** 4 Avatar dans component */
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
            setIsLoading(true)
            storageRef = ref(
                storage, `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
            )
            uploadTask = uploadBytesResumable(storageRef, selectedImage)
            uploadTask.on(
                "state_changed", () => {

                },
                (error) => {
                    console.log('Erreur upload avatar', error)
                    setIsLoading(false)
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
            setIsLoading(false)
            toast.success("Mise a jour du profil réussie")
        }
    }

    /** 6 transfert Avatar en ligne */
    const updateUserDocument = async (photoURL: string) => {
        const body = {
            photoURL: photoURL
        }
        const { error } = await FirestoreUpdateDocument(
            "users",
            authUser.uid,
            body
        )
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("Mise a jour de l'avatar réussi")
        setIsLoading(false)
    }

    return (
        <div className="flex flex-col justify-start">

            <div className="my-5">
                <h2 className="text-3xl text-center">
                    Compte utilisateur
                </h2>
            </div>

            <div className="flex flex-col">
                <div className="w-[280px] pl-5">
                    <ProfileUserInfosForm form={{ errors, control, register, handleSubmit, onSubmit, isLoading }} />
                </div>

                <div className="pt-1 pl-5">
                    <UploadAvatar handleImageSelect={handleImageSelect} imagePreview={imagePreview} isLoading={isLoading} />
                </div>

                <div className="flex justify-start mt-8 ml-5">
                    <button className="px-5 py-3 bg-vin text-fond rounded-lg shadow-sm" onClick={handleSubmit(onSubmit)} >VALIDER</button>
                </div>
            </div>

            <div className="mt-20 mx-auto">
                <Link to='/container-racks' className="px-5 py-3 bg-vin text-fond rounded-lg shadow-sm" >MES RACKS</Link>
            </div>

        </div>
    );
};

export default UserInfos;