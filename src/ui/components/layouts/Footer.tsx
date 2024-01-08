import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex justify-around w-full p-2 bg-vin text-fond ">
            <div className="flex flex-col text-sm">
                <Link to="/CGU">CGU</Link>
                <Link to="/politique">Politique de confidentialité</Link>
            </div>
            <div className="text-xs text-vin100">Version 1.0</div>
        </footer>
    );
};

export default Footer;
