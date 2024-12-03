import { HeartOff } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Bottle } from "../../../types/RacksTypes";

type Props = {
    allBottlesFavorisList: Bottle[];
    handleRemoveBottleFromFavorisList: (bottle: Bottle) => void;
};

const FavorisBottlesView = ({
    allBottlesFavorisList,
    handleRemoveBottleFromFavorisList,
}: Props) => {
    return (
        <div className="container mx-auto flex flex-col items-center p-4 min-h-[calc(100vh-272px)]">
            <h2 className="text-2xl pt-5 pb-4 text-center text-vin">
                Liste de vos bouteilles favorites
            </h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Bouteilles</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Couleur</TableHead>
                        <TableHead>Appellation</TableHead>
                        <TableHead>Exploitation</TableHead>
                        <TableHead>Millésime</TableHead>
                        <TableHead>Retirer</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allBottlesFavorisList.map((bottle: Bottle) => (
                        <TableRow key={bottle.id}>
                            <TableCell className="font-medium">
                                {bottle.nom}
                            </TableCell>
                            <TableCell>{bottle.type}</TableCell>
                            <TableCell>{bottle.couleur}</TableCell>
                            <TableCell>{bottle.appellation}</TableCell>
                            <TableCell>{bottle.exploitation}</TableCell>
                            <TableCell>{bottle.millesime}</TableCell>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() =>
                                    handleRemoveBottleFromFavorisList(bottle)
                                }
                                data-testid="supprimer"
                            >
                                <HeartOff className="text-vin" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default FavorisBottlesView;