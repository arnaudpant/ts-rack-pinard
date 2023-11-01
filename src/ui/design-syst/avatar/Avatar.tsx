import clsx from "clsx";

interface Props {
    size: string,
    alt?: string,
    src: string
}

const Avatar = ({size, alt, src}: Props) => {
    return (
        <div className={clsx(`w-${size} h-${size}`)}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default Avatar;