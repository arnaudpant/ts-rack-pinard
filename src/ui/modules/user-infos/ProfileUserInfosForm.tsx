import Input from "../../../ui/design-syst/formulaire/Input";
import { userProfilFormtype } from "../../../types/Forms";

interface Props {
    form: userProfilFormtype
}
const ProfileUserInfosForm = ({ form }: Props) => {
    const { errors, register, isLoading } = form
    return (
        <form className="flex flex-col gap-1">
            <label htmlFor="displayName">Login:</label>
            <Input
                isLoading={isLoading}
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois entrer un login"
                placeholder="Tapez votre login"
                id="login"
            />
        </form>
    );
};

export default ProfileUserInfosForm;