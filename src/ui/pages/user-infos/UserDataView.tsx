import { Bottle } from "@/types/RacksTypes";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";

type Props = {
    fullBottles: Bottle[];
};

const UserDataView = ({ fullBottles }: Props) => {
    const emptyBottles = fullBottles.filter(
        (bottle) => bottle.type === "vide"
    ).length;
    const bottlesVin = fullBottles.filter(
        (bottle) => bottle.type === "vin"
    ).length;
    const bottlesChampagne = fullBottles.filter(
        (bottle) => bottle.type === "champagne"
    ).length;
    const bottlesBiere = fullBottles.filter(
        (bottle) => bottle.type === "biere"
    ).length;
     const bottlesRouge = fullBottles.filter(
         (bottle) => bottle.couleur === "rouge"
     ).length;
     const bottlesBlanc = fullBottles.filter(
         (bottle) => bottle.couleur === "blanc"
     ).length;
     const bottlesRose = fullBottles.filter(
         (bottle) => bottle.couleur === "rose"
     ).length;

    return (
        <div className="min-h-[calc(100vh-234px)]">
            <h2 className="text-3xl text-center pt-5">Mon espace</h2>
            <div className="container mx-auto p-4">
                <h3 className="text-vin pl-4 text-xl">Vos stocks</h3>
                <div>
                    <Table>
                        <TableCaption>
                            Données concernant vos bouteilles de vin
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Types</TableHead>
                                <TableHead>données</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">
                                    Nombre de cases à bouteilles
                                </TableCell>
                                <TableCell>{fullBottles.length}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Nombre de bouteilles
                                </TableCell>
                                <TableCell className="font-bold text-vin600">
                                    {fullBottles.length - emptyBottles}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Nombre de cases vides</TableCell>
                                <TableCell>{emptyBottles}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Nombre de bouteilles de vin
                                </TableCell>
                                <TableCell className="font-bold text-vin600">
                                    {bottlesVin}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de rouge</TableCell>
                                <TableCell>{bottlesRouge}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de blanc</TableCell>
                                <TableCell>{bottlesBlanc}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de rosé</TableCell>
                                <TableCell>{bottlesRose}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de champagne</TableCell>
                                <TableCell>{bottlesChampagne}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bière</TableCell>
                                <TableCell>{bottlesBiere}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UserDataView;
