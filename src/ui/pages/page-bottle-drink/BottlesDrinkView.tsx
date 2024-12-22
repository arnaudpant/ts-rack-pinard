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
    handleDelete: (id: string) => void;
};

const tableHeaders = [
    "Bouteilles",
    "Type de vin",
    "Couleur",
    "Appellation",
    "Date achat",
    "Date consommation",
    "Prix",
    "Supprimer",
];

const BottlesDrinkView: React.FC<Props> = ({ bottlesDrink, handleDelete }) => {
    const renderTableHeader = () => (
        <TableHeader>
            <TableRow>
                {tableHeaders.map((header) => (
                    <TableHead key={header}>{header}</TableHead>
                ))}
            </TableRow>
        </TableHeader>
    );

    const renderTableBody = () => (
        <TableBody>
            {bottlesDrink.map((bottle: Bottle) => (
                <TableRow key={bottle.id}>
                    <TableCell className="font-medium">{bottle.nom}</TableCell>
                    <TableCell>{bottle.type}</TableCell>
                    <TableCell>{bottle.couleur}</TableCell>
                    <TableCell>{bottle.appellation}</TableCell>
                    <TableCell>
                        {bottle.achat ? dateFormater(bottle.achat) : ""}
                    </TableCell>

                    <TableCell>
                        {bottle.drinkDate ? bottle.drinkDate : null}
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
    );

    return (
        <div className="container mx-auto p-4 min-h-[calc(100vh-272px)]">
            <h2 className="text-2xl pt-5 pb-2 text-center text-vin">
                Liste des bouteilles consommées
            </h2>
            {bottlesDrink.length > 0 ? (
                <Table>
                    {renderTableHeader()}
                    {renderTableBody()}
                </Table>
            ) : (
                <div className="text-center text-xl pt-10">
                    Aucunes bouteilles consommées pour le moment
                </div>
            )}
        </div>
    );
};

export default BottlesDrinkView;
