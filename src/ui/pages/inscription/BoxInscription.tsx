/** HOOKS */
import { useToggle } from "../../../hooks/useToggle.tsx";
/** COMPONENTS */
import { RegisterFormType } from "@/types/Forms";
import FormRegister from "./FormRegister.tsx";
/** FIREBASE */
import {
    firebaseCreateUser,
    sendEmailConfirmation,
} from "../../../api/Authentification.tsx";
import { FirestoreCreateDocument } from "../../../api/Firestore.tsx";
/** LIBRARY */
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BoxInscription: React.FC = () => {
    /** HOOKS */
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormType>();

    /** Etape 3 - Creation du user dans la collection users
     * Lancement de FirestoreUpdateDocument
     * Si pas d'erreur création du user dans la collection users avec ses données
     * Envoi d'un email de confirmation de connexion
     */
    const handleCreateUserAuthentification = async (
        collectionName: string,
        documentId: string,
        document: object
    ) => {
        const { error } = await FirestoreCreateDocument(
            collectionName,
            documentId,
            document
        );
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success("Bienvenu dans votre cave à pimard");
        setIsLoading(false);
        reset();
        sendEmailConfirmation();
    };

    /** Etape 2
     * On lance en async handleCreateUserAuth avec en param email et password
     * On await le return de firebaseCreateUser
     * firebaseCreateUser return soit une error soit les data de l'user si la creation dans firebase a reussi
     * Si return error on arrete le loading
     */
    const handleCreateUserAuth = async ({
        email,
        password,
    }: RegisterFormType) => {
        const { error, data } = await firebaseCreateUser(email, password);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        const userDocumentData = {
            email: email,
            uid: data.uid,
            inscription: new Date(),
            onBoardingisCompleted: false,
            photoURL: "",
            racks: [],
            bottlesFavoris: [],
            bottlesDrink: [],
        };
        handleCreateUserAuthentification("users", data.uid, userDocumentData);
    };

    /** Etape 1
     * Au submit on passe le btn en loader
     * On recupere email et password
     * Si le password fait moins de 6 caracteres mini on affiche un msg sans appel a Firebase
     * Sinon on lance handleCreateUserAuth avec formData = (email, password)
     */
    const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
        setIsLoading(true);
        const { password } = formData;

        if (password.length < 6) {
            setError("password", {
                type: "manuel",
                message: "Le mot de passe doit comporter 6 caractères minimum",
            });
            setIsLoading(false);
            return;
        }
        handleCreateUserAuth(formData);
    };

    return (
        <>
            <div className="w-72 mx-auto my-6 p-6 rounded-2xl shadow-card">
                <FormRegister
                    form={{
                        errors,
                        control,
                        register,
                        handleSubmit,
                        onSubmit,
                        isLoading,
                    }}
                />
            </div>
        </>
    );
};

export default BoxInscription;
