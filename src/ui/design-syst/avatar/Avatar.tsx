import clsx from "clsx";

interface Props {
    size?: string,
    width: string,
    height: string
    alt?  : string,
    src: string | undefined,
}

const Avatar = ({size, alt, src, width, height}: Props) => {
    return (
        <div className={clsx(`w-${size} h-${size} rounded-full overflow-hidden`)}>
            <img src={src} alt={alt} className={clsx(`w-${width} h-${height} object-cover`)} />
        </div>
    );
};

export default Avatar;