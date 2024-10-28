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

// type AccordsVinRouge = "boeuf" | "agneau" | "canard" | "porc" | " charcuterie" | "fromage dur" | "lasagnes" | "ratatouille" | "champignon" | "coq" | "bourguignon" | "cassoulet" | "pizza" | "pates bolognaise" | "chili" | "fromage bleu" | "Filet mignon" | "Osso buco"
// type AccordsVinBlanc = "poisson" | "fruits de mer" | "poulet" | "sushi" | "salade cesar" | "asperges" | "fromage chevre" | "moules" | "quiche" | "volaille" | "huitres" | "fondue fromage" | "choucroute"
// type AccordsVinRose = "salade" | "poisson" | "tapas" | "paella" | " tomates farcies" | "melon" | "pizza" | "barbecue" | "sushi" | "saumon" | "legumes grilles" | "bouillabaisse"


export interface Rack {
    idrack: string,
    rackName: string,
    columns: number,
    rows: number,
    bottles: Bottle[]
}

