import {z} from "zod"

export interface Bottle {
    id: string,
    nom: string,
    millesime: number | null,
    appellation: string | null, // Désigne l'origine géographique du vin Chablis, Bordeaux
    exploitation: string | null,
    cepage: string | null,
    pays: string | null,
    type: "vin" | "champagne" | "effervescent" | "cidre" | "aperitif" | "digestif" | "biere" | "vide",
    couleur: "rouge" | "blanc" | "rose" | "blonde" | "brune" | "ambree" | "blanche" | null,
    saveur: "sec" | "demi-sec" | "sucre" | "doux" | "brut" | "fruite" | "floral" |null,
    corps: 'leger' | "moyen" | "corse" | "plein" |null,
    potentiel: "court" | "moyen" | "long" | null,
    status: "A boire" | "A garder" | "A maturation" | null,
    degre: number | null,
    accords: string | null,
    prix: number | null,
    achat: string | null,
    rackId: string,
    index: number,
    drink: string | number | null,
    drinkDate?: string | null,
    favoris: boolean
}

export interface Rack {
    idrack: string,
    rackName: string,
    columns: number,
    rows: number,
    bottles: Bottle[]
}


export const BottleSchema = z.object({
    id: z.string({required_error: "Le champ est requis"}),
    nom: z.string(),
    millesime: z.number({invalid_type_error: "Entrez une année"}).nullable(),
    appellation: z.string().nullable(),
    exploitation: z.string().nullable(),
    cepage: z.string().nullable(),
    pays: z.string().nullable(),
    type: z.enum(["vin", "champagne", "effervescent", "cidre", "aperitif", "digestif", "biere", "vide"]),
    couleur: z.enum(["rouge", "blanc", "rose", "blonde", "brune", "ambree", "blanche"]).nullable(),
    saveur: z.enum(["sec", "demi-sec", "sucre", "doux", "brut", "fruite", "floral"]).nullable(),
    corps: z.enum(['leger', "moyen", "corse", "plein"]).nullable(),
    potentiel: z.enum(["court", "moyen", "long"]).nullable(),
    status: z.enum(["A boire", "A garder", "A maturation"]).nullable(),
    degre: z.number().nullable(),
    accords: z.string().nullable(),
    prix: z.number().nullable(),
    achat: z.string().nullable(),
    rackId: z.string(),
    index: z.number(),
    drink: z.string().nullable(),
    drinkDate: z.string().nullable().optional(),
    favoris: z.boolean()
})

export const RackSchema = z.object({
    idrack: z.string(),
    rackName: z.string(),
    columns: z.number().min(1).max(10),
    rows: z.number().min(1),
    bottles: z.array(BottleSchema)
})