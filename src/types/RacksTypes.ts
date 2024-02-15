export interface Bottle {
    id: string,
    millesime: number | null,
    type: "vin" | "champagne" | "mousseux" | "cidre" | "spiritueux" | "biere" | "vide" ,
    couleur: "rouge" | "blanc" | "rose" | "blonde" | "brune" | "ambree" | "blanche" | "pétillant" | "",
    gout: "sec" | "demi-sec" | "sucre" | "doux" | "brut" | "",
    pays: string | null,
    appellation: string | null,
    exploitation: string | null,
    cuvee: string | null,
    accords: string[],
    prix: number | null,
    achat: string | null,
    rackId: string,
    index: number,
    drink: string | number
} 

export interface Rack {
    idrack: string,
    rackName: string,
    columns: number,
    rows: number,
    bottles: Bottle[]
}

