import { Bottle, Rack } from "@/types/RacksTypes";
import BottlePinard from "./bottles/BottlePinard";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../../components/ui/table";

type Props = {
    rack: Rack;
};

const RackSoloView = ({ rack }: Props) => {
    const [classGrid, setClassGrid] = useState<string>("");

    const nbrCases = rack.bottles.length
    const nbrBouteilles = rack.bottles.filter(
        (bottle) => bottle.type !== "vide"
    ).length;
    const nbrBouteillesVin = rack.bottles.filter(
        (bottle) => bottle.type === "vin"
    ).length;
    const nbrBouteillesChampagne = rack.bottles.filter(
        (bottle) => bottle.type === "champagne"
    ).length;
    const nbrBouteillesBiere = rack.bottles.filter(
        (bottle) => bottle.type === "biere"
    ).length;
    const nbrBouteillesRouge = rack.bottles.filter(
        (bottle) => bottle.couleur === "rouge"
    ).length;
    const nbrBouteillesBlanc = rack.bottles.filter(
        (bottle) => bottle.couleur === "blanc"
    ).length;
    const nbrBouteillesRose = rack.bottles.filter(
        (bottle) => bottle.couleur === "rose"
    ).length;

    useEffect(() => {
        switch (rack.columns) {
            case 1:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-1 gap-1 w-full max-w-screen-md"
                );
                break;

            case 2:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-2 gap-1 w-full max-w-screen-md"
                );
                break;

            case 3:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-3 gap-1 w-full max-w-screen-md"
                );
                break;

            case 4:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-4 gap-1 w-full max-w-screen-md"
                );
                break;

            case 5:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-5 gap-1 w-full max-w-screen-lg"
                );
                break;

            case 6:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-6 gap-1 w-full max-w-screen-lg"
                );
                break;

            case 7:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-7 gap-1 w-full max-w-screen-lg"
                );
                break;

            case 8:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-8 gap-1 w-full max-w-screen-xl"
                );
                break;

            case 9:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-9 gap-1 w-full max-w-screen-xl"
                );
                break;

            case 10:
                setClassGrid(
                    "bg-gris_fonce p-2 grid grid-cols-10 gap-1 w-full max-w-screen-2xl"
                );
                break;
        }
    }, [rack]);

    return (
        <div className="flex flex-col items-center w-full px-2 pt-4 mb-10">
            {/* Rack complet */}
            <div className="flex justify-center w-full">
                {rack && classGrid !== "" && (
                    // Cases
                    <div className={`${classGrid}`}>
                        {rack.bottles.map((bottle: Bottle) => (
                            <BottlePinard
                                bottle={bottle}
                                key={bottle.id}
                                nbrColums={rack.columns}
                            />
                        ))}
                    </div>
                )}
            </div>
            {/* INFOS RACK */}
            <div>
                {rack.bottles.length > 0 && (
                    <>
                        <h2 className="text-2xl pt-5 pb-2 text-center text-vin">
                            Informations
                        </h2>

                        <Table>
                            <TableCaption>
                                Les informations concernant votre rack à pinard
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[200px]">
                                        Bouteilles
                                    </TableHead>
                                    <TableHead>Nombre</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Nombre de cases
                                    </TableCell>
                                    <TableCell>{nbrCases}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Nombre de cases vides
                                    </TableCell>
                                    <TableCell>
                                        {nbrCases - nbrBouteilles}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold text-vin600">
                                        Nombre de bouteilles
                                    </TableCell>
                                    <TableCell className="font-bold text-vin600">
                                        {nbrBouteilles}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Bouteilles de vin</TableCell>
                                    <TableCell>{nbrBouteillesVin}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Bouteilles de champagne
                                    </TableCell>
                                    <TableCell>
                                        {nbrBouteillesChampagne}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rouge</TableCell>
                                    <TableCell>{nbrBouteillesRouge}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Blanc</TableCell>
                                    <TableCell>{nbrBouteillesBlanc}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rosé</TableCell>
                                    <TableCell>{nbrBouteillesRose}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Bière</TableCell>
                                    <TableCell>{nbrBouteillesBiere}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </>
                )}
            </div>
        </div>
    );
};

export default RackSoloView;
