import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../../components/ui/table";
import { Bottle } from "@/types/RacksTypes";

type Props = {
    bottles: Bottle[];
};

const RackSoloInfos = ({ bottles }: Props) => {
    const nbrCases = bottles.length;
    const nbrBouteilles = bottles.filter(
        (bottle) => bottle.type !== "vide"
    ).length;
    const nbrBouteillesVin = bottles.filter(
        (bottle) => bottle.type === "vin"
    ).length;
    const nbrBouteillesChampagne = bottles.filter(
        (bottle) => bottle.type === "champagne"
    ).length;
    const nbrBouteillesBiere = bottles.filter(
        (bottle) => bottle.type === "biere"
    ).length;
    const nbrBouteillesRouge = bottles.filter(
        (bottle) => bottle.couleur === "rouge"
    ).length;
    const nbrBouteillesBlanc = bottles.filter(
        (bottle) => bottle.couleur === "blanc"
    ).length;
    const nbrBouteillesRose = bottles.filter(
        (bottle) => bottle.couleur === "rose"
    ).length;

    return (
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
                        <TableHead className="w-[200px]">Bouteilles</TableHead>
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
                        <TableCell>{nbrCases - nbrBouteilles}</TableCell>
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
                        <TableCell>Bouteilles de champagne</TableCell>
                        <TableCell>{nbrBouteillesChampagne}</TableCell>
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
    );
};

export default RackSoloInfos;
