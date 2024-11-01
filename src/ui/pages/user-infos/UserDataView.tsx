import { Bottle } from "@/types/RacksTypes";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { Separator } from "../../../components/ui/separator";

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
    const biereBlonde = fullBottles.filter(
        (bottle) => bottle.couleur === "blonde"
    ).length;
    const biereBrune = fullBottles.filter(
        (bottle) => bottle.couleur === "brune"
    ).length;
    const biereBlanche = fullBottles.filter(
        (bottle) => bottle.couleur === "blanche"
    ).length;
    const biereAmbree = fullBottles.filter(
        (bottle) => bottle.couleur === "ambree"
    ).length;

    return (
        <div className="min-h-[calc(100vh-232px)] container flex flex-col">
            <h2 className="text-3xl text-center py-8">Mon espace</h2>
            {/* Cave entiere */}
            <div className="max-w-sm mx-auto mb-8">
                <h3 className="text-vin py-2 text-xl">Vos stocks complets</h3>
                <Table>
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
                                Nombre de bouteilles dans vos racks
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
                            <TableCell className="font-bold text-vin600">
                                Bouteilles de champagne
                            </TableCell>
                            <TableCell className="font-bold text-vin600 text-center">
                                {bottlesChampagne}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-vin600">
                                Bouteilles de bière
                            </TableCell>
                            <TableCell className="font-bold text-vin600 text-center">
                                {bottlesBiere}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-vin600">
                                Bouteilles d'apéritif
                            </TableCell>
                            <TableCell className="font-bold text-vin600 text-center">
                                {bottlesAperitif}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-vin600">
                                Bouteilles de digestif
                            </TableCell>
                            <TableCell className="font-bold text-vin600 text-center">
                                {bottlesDigestif}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold text-vin600">
                                Bouteilles de cidre
                            </TableCell>
                            <TableCell className="font-bold text-vin600 text-center">
                                {bottlesCidre}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <Separator />
            {/* Détails par catégories de bouteilles */}
            <div className="flex flex-wrap items-start justify-center lg:justify-around gap-8 mb-10 mt-8">
                {/* Bouteilles de vin */}
                <div className="flex flex-col">
                    <h3 className="text-vin py-2 text-xl">Vin</h3>
                    <Table>
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
                                <TableCell className="">
                                    Bouteilles de vin rouge
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesRouge}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bouteilles de vin blanc
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesBlanc}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bouteilles de rosé
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesRose}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bouteilles à boire
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesABoire}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bouteilles à maturation
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesAMaturation}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bouteilles à faire vieillir
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesAGarder}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                {/* Bouteilles champagne */}
                <div className="flex flex-col">
                    <h3 className="text-vin py-2 text-xl">Vin à bulles</h3>
                    <Table>
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
                                <TableCell className="">
                                    Bouteilles de champagne
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesChampagne}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Mousseux, crément, pétillant
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottlesEffervescent}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                {/* Bouteilles bieres */}
                <div className="flex flex-col">
                    <h3 className="text-vin py-2 text-xl">Bières</h3>
                    <Table>
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
                                <TableCell className="">
                                    Bières blondes
                                </TableCell>
                                <TableCell className="text-center">
                                    {biereBlonde}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bières brunes
                                </TableCell>
                                <TableCell className="text-center">
                                    {biereBrune}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bières blanches
                                </TableCell>
                                <TableCell className="text-center">
                                    {biereBlanche}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="">
                                    Bières ambrées
                                </TableCell>
                                <TableCell className="text-center">
                                    {biereAmbree}
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
