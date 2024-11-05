import { useAuth } from "../../../../../context/AuthUserContext";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { FirestoreUpdateDocument } from "../../../../../api/Firestore";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const ValidationStep = () => {
    const { authUser } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            fire();
        }, 600);
    }, []);

    const handleCloseOnboarding = async () => {
        setIsLoading(true);
        const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
            onBoardingisCompleted: true,
        });
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        setIsLoading(false);

        return <Navigate to="/home-racks" />;
    };

    /** CONFETTIS */
    const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio: number, opts: any) => {
        if (refAnimationInstance.current !== null) {
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio),
            });
        }
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        makeShot(0.2, {
            spread: 60,
        });
        makeShot(0.35, {
            spread: 90,
            decay: 0.91,
            scalar: 0.8,
        });
    }, []);

    return (
        <>
            {authUser.userDocument.onBoardingisCompleted === true ? (
                <Navigate to="/home-racks" replace={true} />
            ) : (
                <>
                    <ReactCanvasConfetti
                        refConfetti={getInstance}
                        style={{
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            top: "-80",
                            left: "0",
                        }}
                    />

                    <div className="relative min-h-[calc(100vh-232px)]">
                        <div className="flex flex-col items-center pt-10">
                            <img
                                src="/wine-bottle.svg"
                                className="h-40 shadow-lg rounded-full"
                            />
                            <h2 className="text-2xl text-center md:text-5xl pt-5 px-6">
                                Félicitations !
                            </h2>
                            <p className="px-6 pt-6 md:text-xl">
                                Tu es maintenant prêt pour gérer ta cave à vin.
                            </p>
                            <p className="px-6 pt-3 md:text-xl">
                                A consommer sans modération (l'appli, pas le
                                pinard) 🥴
                            </p>
                            <div className="mt-10 cursor-not-allowed">
                                <button
                                    type="button"
                                    onClick={handleCloseOnboarding}
                                    className={clsx(
                                        isLoading
                                            ? "cursor-not-allowed"
                                            : "cursor-pointer",
                                        "h-12 w-[140px] bg-vin text-fond font-bold text-lg rounded-lg shadow-sm px-3 py-1"
                                    )}
                                >
                                    Ma cave
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ValidationStep;
