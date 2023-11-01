import Avatar from '../../../../ui/design-syst/avatar/Avatar';
import { Image } from 'lucide-react'

const UploadAvatar = () => {
    return (
        <div className="flex items-center gap-5 mt-4">
            <label className='inline-block bg-vin text-fond text-lg px-4 py-2 rounded-md cursor-pointer'>
                <div className="flex items-center gap-2">
                    <Image />
                    <span>Choisir un fichier</span>
                </div>
                <input type="file" className='hidden'/>
            </label>
            <Avatar size='20' alt='avatar' src='/camera.svg' />
        </div>
    );
};

export default UploadAvatar;