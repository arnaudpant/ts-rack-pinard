import clsx from 'clsx';
import Avatar from '../../../../ui/design-syst/avatar/Avatar';
import { Image } from 'lucide-react'
import { useAuth } from '../../../../context/AuthUserContext';

interface Props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null;
    isLoading: boolean;
    uploadProgress?: number
}


const UploadAvatar = ({
    handleImageSelect,
    imagePreview,
    isLoading,
    
}: Props) => {
    const { authUser } = useAuth();

    return (
        <div className="flex items-center mt-4">
            <label
                className={clsx(
                    isLoading ? "cursor-not-allowed" : "cursor-pointer",
                    "inline-block bg-vin text-fond text-md px-4 py-2 mr-3 rounded-md "
                )}
            >
                <div className="flex items-center gap-2">
                    <Image />
                    <span>Choisir un fichier</span>
                </div>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleImageSelect}
                    disabled={isLoading}
                />
            </label>

            <Avatar
                size="16"
                alt="avatar"
                src={
                    imagePreview
                        ? typeof imagePreview === "string"
                            ? imagePreview
                            : String(imagePreview)
                        : authUser.userDocument.photoURL
                        ? authUser.userDocument.photoURL
                        : "/camera.svg"
                }
                width="16"
                height="16"
            />
        </div>
    );
};

export default UploadAvatar;

//'/camera.svg'