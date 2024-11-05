import { Bottle, Rack } from "../../../types/RacksTypes";
import { useAuth } from "../../../context/AuthUserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { FirestoreUpdateDocument } from "../../../api/Firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
    rackName: z.string().min(1, "Le nom du rack est requis"),
    columns: z.preprocess(
        (val) => Number(val),
        z
            .number()
            .min(1, { message: "1 colonne minimum" })
            .max(10, { message: "10 colonnes maximum" })
    ),
    rows: z.preprocess(
        (val) => Number(val),
        z.number().min(1, { message: "1 rangée minimum" })
    ),
});

type FormValues = z.infer<typeof FormSchema>;

const MAX_COLUMNS = 10;

const AddRackPage = () => {
    const { authUser } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
    });

    const newRack: Rack = {
        idrack: uuidv4(),
        rackName: "",
        columns: 1,
        rows: 1,
        bottles: [],
    };

    const bottleEmpty: Bottle = {
        id: "",
        nom: "",
        millesime: null,
        appellation: null,
        exploitation: null,
        cepage: null,
        pays: null,
        type: "vide",
        couleur: null,
        saveur: null,
        corps: null,
        potentiel: null,
        status: null,
        degre: null,
        accords: null,
        prix: null,
        achat: null,
        rackId: newRack.idrack,
        index: 0,
        drink: null,
        favoris: false,
    };

    const addNewRackUserDocument = async (racks: Rack[]) => {
        const { error } = await FirestoreUpdateDocument("users", authUser.uid, {
            ...authUser.userDocument,
            racks: racks,
        });
        if (error) {
            toast.error(error.message);

            return;
        }
        toast.success("Nouveau rack ajouté", { autoClose: 2000 });
        navigate("/");
    };

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (data.columns > MAX_COLUMNS) {
            return;
        }
        const calculNumberOfBottle: number = data.columns * data.rows;

        // AJOUT X BOUTEILLES VIDES
        let arrBottlesVide: (typeof bottleEmpty)[] | [] = [];
        for (let i = 0; i < calculNumberOfBottle; i++) {
            const bottleEmptyWithNewId = {
                ...bottleEmpty,
                id: uuidv4(),
                index: i,
            };
            arrBottlesVide = [...arrBottlesVide, bottleEmptyWithNewId];
        }

        // AJOUT RACKS AVEC BOUTEILLES VIDE + INFOS
        const rackWithBottlesEmpty = {
            ...newRack,
            rackName: data.rackName,
            columns: Number(data.columns),
            rows: Number(data.rows),
            bottles: arrBottlesVide,
        };

        if (authUser.userDocument.racks.length === 0) {
            addNewRackUserDocument([rackWithBottlesEmpty]);
        } else {
            const oldAndNewRacks = authUser.userDocument.racks;
            const racks = [...oldAndNewRacks, rackWithBottlesEmpty];
            addNewRackUserDocument(racks);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-[calc(100vh-272px)] shadow-xl p-4 ">
            <h2 className="text-2xl text-vin my-6">Ajouter un rack</h2>
            <p className="text-sm text-center pb-6">
                Reproduisez votre cave, casiers, rack ou autre
            </p>

            <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col mb-4">
                    <label htmlFor="rackName">Entrez un nom</label>
                    <input
                        type="text"
                        id="rackName"
                        {...register("rackName")}
                        placeholder="Donnez un nom au rack"
                        className="p-2 rounded-md bg-fond text-sm"
                    />
                    {errors.rackName && (
                        <p className="text-xs text-vin_rouge text-center pt-1">
                            {errors.rackName.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="colonnes">
                        Entrez le nombre de colonnes (max:10)
                    </label>
                    <input
                        type="number"
                        id="columns"
                        {...register("columns", {
                            required: {
                                value: true,
                                message: "Ce champ est requis",
                            },
                        })}
                        placeholder="Nombre de colonnes"
                        className="p-2 rounded-md bg-fond text-sm"
                    />
                    {errors.columns && (
                        <p className="text-xs text-vin_rouge text-center pt-1">
                            {errors.columns.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col mb-6">
                    <label htmlFor="rangees">Entrez le nombre de rangées</label>
                    <input
                        type="number"
                        id="rows"
                        {...register("rows", {
                            required: {
                                value: true,
                                message: "Ce champ est requis",
                            },
                        })}
                        placeholder="Nombre de rangées"
                        className="p-2 rounded-md bg-fond text-sm"
                    />
                    {errors.rows && (
                        <p className="text-xs text-vin_rouge text-center pt-1">
                            {errors.rows.message}
                        </p>
                    )}
                </div>

                <div>
                    <img src="/info-rack.png" alt="informations racks" />
                </div>

                <button
                    type="submit"
                    className="px-4 py-1 bg-fond rounded-full my-4 text-vin hover:bg-vin600 hover:text-fond"
                >
                    AJOUTER
                </button>
                <Link
                    to="/"
                    className="px-4 py-1 bg-vin/30 rounded-full mt-2 mb-6 text-vin hover:bg-vin600/80 hover:text-fond text-center"
                >
                    ANNULER
                </Link>
            </form>
        </div>
    );
};

export default AddRackPage;
