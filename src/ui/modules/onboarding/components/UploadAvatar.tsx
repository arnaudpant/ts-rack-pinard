import Avatar from '../../../../ui/design-syst/avatar/Avatar';
import { Image } from 'lucide-react'

interface Props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void,
    imagePreview: string | ArrayBuffer | null
}

const UploadAvatar = ({ handleImageSelect, imagePreview }: Props) => {
    return (
        <div className="flex items-center gap-5 mt-4">
            <label className='inline-block bg-vin text-fond text-lg px-4 py-2 rounded-md cursor-pointer'>
                <div className="flex items-center gap-2">
                    <Image />
                    <span>Choisir un fichier</span>
                </div>
                <input type="file" className='hidden' onChange={handleImageSelect} />
            </label>
            <Avatar size='20' alt='avatar' src={
                imagePreview ? typeof imagePreview === "string" ? imagePreview : String(imagePreview) : '/camera.svg'
            } width="80" height="80" />
        </div>
    );
};

export default UploadAvatar;

//'/camera.svg'