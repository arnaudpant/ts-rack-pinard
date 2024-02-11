import clsx from "clsx";
import Avatar from "../../../../design-syst/avatar/Avatar";
import { Image } from "lucide-react";
import { useAuth } from "../../../../../context/AuthUserContext";

interface Props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null;
    uploadProgress?: number;
    isLoading: boolean;
}

const UploadAvatar = ({
    handleImageSelect,
    imagePreview,
    uploadProgress,
    isLoading,
}: Props) => {
    let progressBarStyle: string = "";
    if (uploadProgress) {
        progressBarStyle = `fixed top-36 left-0 w-full h-1 bg-vin ${
            uploadProgress > 0 ? "" : "hidden"
        }`;
    }
    const { authUser } = useAuth();

    return (
        <div className="flex items-center mt-4">
            <div
                className={progressBarStyle}
                style={{ width: `${uploadProgress}%` }}
            ></div>

            <label
                className={clsx(
                    isLoading ? "cursor-not-allowed" : "cursor-pointer",
                    "inline-block bg-vin text-fond text-lg px-4 py-2 mr-3 rounded-md "
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
                size="20"
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
                width="20"
                height="20"
            />
        </div>
    );
};

export default UploadAvatar;

//'/camera.svg'
