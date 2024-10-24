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

type BottleCount = {
    label: string;
    count: number;
    isBold?: boolean;
};

const RackSoloInfos: React.FC<Props> = ({ bottles }) => {
    const countBottles = (predicate: (bottle: Bottle) => boolean): number =>
        bottles.filter(predicate).length;

    const bottleCounts: BottleCount[] = [
        {
            label: "Nombre de bouteilles",
            count: countBottles((b) => b.type !== "vide"),
            isBold: true,
        },

        {
            label: "Bouteilles de vin",
            count: countBottles((b) => b.type === "vin"),
            isBold: true,
        },
        { label: "Rouge", count: countBottles((b) => b.couleur === "rouge") },
        { label: "Blanc", count: countBottles((b) => b.couleur === "blanc") },
        {
            label: "Rosé",
            count: countBottles(
                (b) => b.couleur === "rose" && b.type === "vin"
            ),
        },
        {
            label: "Bouteilles de champagne",
            count: countBottles((b) => b.type === "champagne"),
            isBold: true,
        },
        {
            label: "Bouteilles de pétillant",
            count: countBottles((b) => b.type === "effervescent"),
            isBold: true,
        },
        {
            label: "Apéritif",
            count: countBottles((b) => b.type === "aperitif"),
            isBold: true,
        },
        {
            label: "Digestif",
            count: countBottles((b) => b.type === "digestif"),
            isBold: true,
        },
        {
            label: "Bière",
            count: countBottles((b) => b.type === "biere"),
            isBold: true,
        },
        { label: "Blonde", count: countBottles((b) => b.couleur === "blonde") },
        { label: "Brune", count: countBottles((b) => b.couleur === "brune") },
        { label: "Ambrée", count: countBottles((b) => b.couleur === "ambree") },
        {
            label: "Blanche",
            count: countBottles((b) => b.couleur === "blanche"),
        },
        {
            label: "Cidre",
            count: countBottles((b) => b.type === "cidre"),
            isBold: true,
        },
    ];

    return (
        <div>
            <h2 className="text-2xl pt-5 pb-2 text-center text-vin">
                Informations
            </h2>

            <Table>
                <TableCaption>
                    Les informations concernant votre rack à pinard
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Bouteilles</TableHead>
                        <TableHead>Nombre</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bottleCounts.map(({ label, count, isBold }, index) => (
                        <TableRow key={index}>
                            <TableCell
                                className={
                                    isBold
                                        ? "font-bold text-vin600"
                                        : "font-medium"
                                }
                            >
                                {label}
                            </TableCell>
                            <TableCell
                                className={
                                    isBold
                                        ? "font-bold text-vin600 text-center"
                                        : "text-center"
                                }
                            >
                                {count}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default RackSoloInfos;
