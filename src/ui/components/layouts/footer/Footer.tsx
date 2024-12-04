import { Link } from "react-router-dom";


const Footer = () => {
    const yearFooter = new Date().getFullYear();
    return (
        <footer className="flex justify-around w-full p-2 bg-vin text-fond ">
            <div className="flex flex-col text-sm">
                <Link to="/CGU" className="hover:text-vin100">
                    CGU
                </Link>
                <Link to="/politique" className="hover:text-vin100">
                    Politique de confidentialité
                </Link>
            </div>
            <div className="text-xs text-vin100">
                <p>Version 3 | Dec 24</p>
                <p>&copy; {yearFooter} Rack a pinard. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
