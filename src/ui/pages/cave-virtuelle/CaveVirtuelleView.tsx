import { Bottle } from "../../../types/RacksTypes";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import AddBootleToCaveVirtuelle from "../../../ui/modules/modal/AddBootleToCaveVirtuelle";

type Props = {
    bottlesForLater: Bottle[];
    handleDelete: (id: string) => void;
};

const CaveVirtuelleView = ({ bottlesForLater, handleDelete }: Props) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClickModal = () => {
        setModalShow((v) => !v);
    };
    return (
        <div className="container mx-auto flex flex-col items-center p-4 min-h-[calc(100vh-234px)]">
            <div className="py-4">
                <button
                    className="text-fond bg-vin hover:bg-fond hover:text-vin px-4 py-1 border-2 border-vin hover:border-vin rounded-full"
                    onClick={handleClickModal}
                >
                    Ajouter une bouteille
                </button>
            </div>
            <h2 className="text-2xl pt-5 pb-4 text-center text-vin">
                Liste des bouteilles à sauvegarder
            </h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Bouteilles</TableHead>
                        <TableHead>Type de vin</TableHead>
                        <TableHead>Appellation</TableHead>
                        <TableHead>Exploitation</TableHead>
                        <TableHead>Millésime</TableHead>
                        <TableHead>Supprimer</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bottlesForLater.map((bottle: Bottle) => (
                        <TableRow key={bottle.id}>
                            <TableCell className="font-medium">
                                {bottle.type}
                            </TableCell>
                            <TableCell>{bottle.couleur}</TableCell>
                            <TableCell>{bottle.appellation}</TableCell>
                            <TableCell>{bottle.exploitation}</TableCell>
                            <TableCell>{bottle.millesime}</TableCell>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() => handleDelete(bottle.id)}
                            >
                                <Trash2 className="text-vin" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {modalShow && (
                <AddBootleToCaveVirtuelle handleClickModal={handleClickModal} />
            )}
        </div>
    );
};

export default CaveVirtuelleView;
