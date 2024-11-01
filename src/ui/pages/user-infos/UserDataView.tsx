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
    const bottlesEffervescent = fullBottles.filter(
        (bottle) => bottle.type === "effervescent"
    ).length;
    const bottlesCidre = fullBottles.filter(
        (bottle) => bottle.type === "cidre"
    ).length;
    const bottlesAperitif = fullBottles.filter(
        (bottle) => bottle.type === "aperitif"
    ).length;
    const bottlesDigestif = fullBottles.filter(
        (bottle) => bottle.type === "digestif"
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
    const bottlesABoire = fullBottles.filter(
        (bottle) => bottle.status === "A boire"
    ).length;
    const bottlesAMaturation = fullBottles.filter(
        (bottle) => bottle.status === "A maturation"
    ).length;
    const bottlesAGarder = fullBottles.filter(
        (bottle) => bottle.status === "A garder"
    ).length;

    return (
        <div className="min-h-[calc(100vh-232px)] container">
            <h2 className="text-3xl text-center pt-5 pb-2">Mon espace</h2>
            <div className="mx-auto p-4">
                <h3 className="text-vin pl-4 text-xl">Vos stocks</h3>
                <div>
                    <Table>
                        <TableCaption className="pb-10">
                            Données concernant vos bouteilles de vin
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Types</TableHead>
                                <TableHead className="text-center">
                                    Nombre
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Nombre de bouteilles
                                </TableCell>
                                <TableCell className="font-bold text-vin600 text-center">
                                    {fullBottles.length - emptyBottles}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Nombre de bouteilles de vin
                                </TableCell>
                                <TableCell className="font-bold text-vin600 text-center">
                                    {bottlesVin}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de rouge</TableCell>
                                <TableCell className="text-center">
                                    {bottlesRouge}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de blanc</TableCell>
                                <TableCell className="text-center">
                                    {bottlesBlanc}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de rosé</TableCell>
                                <TableCell className="text-center">
                                    {bottlesRose}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles a boire</TableCell>
                                <TableCell className="text-center">
                                    {bottlesABoire}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles a maturation</TableCell>
                                <TableCell className="text-center">
                                    {bottlesAMaturation}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles a garder</TableCell>
                                <TableCell className="text-center">
                                    {bottlesAGarder}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Bouteilles de champagne
                                </TableCell>
                                <TableCell className="font-bold text-vin600 text-center">
                                    {bottlesChampagne}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Bouteilles de pétillant</TableCell>
                                <TableCell className="text-center">
                                    {bottlesEffervescent}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Bière
                                </TableCell>
                                <TableCell className="font-bold text-vin600 text-center">
                                    {bottlesBiere}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Apéritif
                                </TableCell>
                                <TableCell className="font-bold text-vin600 text-center">
                                    {bottlesAperitif}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Digestif
                                </TableCell>
                                <TableCell className="font-bold text-vin600 text-center">
                                    {bottlesDigestif}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold text-vin600">
                                    Cidre
                                </TableCell>
                                <TableCell className="font-bold text-vin600 text-center">
                                    {bottlesCidre}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UserDataView;
