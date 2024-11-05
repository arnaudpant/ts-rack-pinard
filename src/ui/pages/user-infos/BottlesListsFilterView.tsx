import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Bottle } from "../../../types/RacksTypes";

type uniqueBottlesType = {
    uniqueBottles: (Bottle & {
        count: number;
    })[];
    getBottleKey?: (bottle: Bottle) => string;
};

const BottlesListsFilterView = ({
    uniqueBottles,
}: uniqueBottlesType) => {
    return (
        <div className="min-h-[calc(100vh-272px)] container flex flex-col">
            <h2>Liste des Bouteilles</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Bouteilles</TableHead>
                        <TableHead className="text-center">Type</TableHead>
                        <TableHead className="text-center">Couleur</TableHead>
                        <TableHead className="text-center">Saveur</TableHead>
                        <TableHead className="text-center">Nombre</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {uniqueBottles
                        .filter((bottle) => bottle.type !== "vide")
                        .map((bottle) => (
                            <TableRow key={bottle.id}>
                                <TableCell className="font-bold">
                                    {bottle.nom}
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottle.type}
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottle.couleur}
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottle.saveur}
                                </TableCell>
                                <TableCell className="text-center">
                                    {bottle.count}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BottlesListsFilterView;