export interface Bottle {
    id: string,
    nom: string | null,
    millesime: number | null,
    appellation: string | null, // Désigne l'origine géographique du vin Chablis, Bordeaux
    exploitation: string | null,
    cepage: string | null,
    pays: string | null,
    type: "vin" | "champagne" | "mousseux" | "petillant" | "crement" | "cidre" | "aperitif" | "digestif" | "biere" | "vide",
    couleur: "rouge" | "blanc" | "rose" | "blonde" | "brune" | "ambree" | "blanche" | null,
    saveur: "sec" | "demi-sec" | "sucre" | "doux" | "brut" | null,
    corps: 'leger' | "moyen" | "corse" | null,
    potentiel: "court" | "moyen" | "long" | null,
    status: "boire" | "garder" | "maturation" | null,
    degre: number | null,
    accords: AccordsVinRouge[] | AccordsVinBlanc[] | AccordsVinRose[] | [],
    prix: number | null,
    achat: string | null,
    rackId: string,
    index: number,
    drink: string | number | null
}

type AccordsVinRouge = "boeuf" | "agneau" | "canard" | "porc" | " charcuterie" | "fromage dur" | "lasagnes" | "ratatouille" | "champignon" | "coq" | "bourguignon" | "cassoulet" | "pizza" | "pates bolognaise" | "chili" | "fromage bleu"
type AccordsVinBlanc = "poisson" | "fruits de mer" | "poulet" | "sushi" | "salade cesar" | "asperges" | "fromage chevre" | "moules" | "quiche" | "volaille" | "huitres" | "fondue fromage" | "choucroute"
type AccordsVinRose = "salade" | "poisson" | "tapas" | "paella" | " tomates farcies" | "melon" | "pizza" | "barbecue" | "sushi" | "saumon" | "legumes grilles" | "bouillabaisse"


/**
 * 
Type : rouge, blanc, rosé, mousseux, pétillants, Champagne, Crements, Whisky, vodka, rhum, gin
Couleur: rouge blanc rose | Blonde, ambrée, brune,
Cépages: (Merlot, Cabernet Sauvignon, Chardonnay) N'est pas lié à une zone géographique spécifique
Millesime:
Aromes: Fruités, floraux, boisés, épicés, autres
Saveurs: Sec, demi-sec, moelleux, doux, Brut, demi-sec
Corps : Léger, moyen, corsé
Potentiel de garde : Court, moyen ou long terme
Teneur en alcool:

 */

export interface Rack {
    idrack: string,
    rackName: string,
    columns: number,
    rows: number,
    bottles: Bottle[]
}

