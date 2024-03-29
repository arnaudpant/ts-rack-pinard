import { Bottle } from "@/types/RacksTypes";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { Trash2 } from "lucide-react";
import { dateFormater } from "../../../utils/utils";

type Props = {
    bottlesDrink: Bottle[];
    handleDelete: (id: string) => any;
};

const BottlesDrinkView = ({ bottlesDrink, handleDelete }: Props) => {

    return (
        <div className="container mx-auto p-4 min-h-[calc(100vh-234px)]">
            <h2 className="text-2xl pt-5 pb-2 text-center text-vin">
                Liste des bouteilles consommées
            </h2>
                {bottlesDrink.length > 0 ? (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Bouteilles</TableHead>
                        <TableHead>Type de vin</TableHead>
                        <TableHead>Appellation</TableHead>
                        <TableHead>Exploitation</TableHead>
                        <TableHead>Date achat</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>Supprimer</TableHead>
                    </TableRow>
                </TableHeader>
                    <TableBody>
                        {bottlesDrink.map((bottle: Bottle) => (
                                <TableRow key={bottle.id}>
                                    <TableCell className="font-medium">
                                        {bottle.type}
                                    </TableCell>
                                    <TableCell>{bottle.couleur}</TableCell>
                                    <TableCell>{bottle.appellation}</TableCell>
                                    <TableCell>{bottle.exploitation}</TableCell>
                                    <TableCell>
                                        {dateFormater(bottle.achat)}
                                    </TableCell>
                                    <TableCell>{bottle.prix}€</TableCell>
                                    <TableCell
                                        className="cursor-pointer"
                                        onClick={() => handleDelete(bottle.id)}
                                        data-testid="supprimer"
                                    >
                                        <Trash2 className="text-vin" />
                                    </TableCell>
                                </TableRow>
                        ))}
                    </TableBody>
            </Table>
                ) : (
                    <div className="text-center text-xl pt-10">Aucunes bouteilles consommées pour le moment</div>
                )}
        </div>
    );
};

export default BottlesDrinkView;
