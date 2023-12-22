export interface Bottle {
    id: string,
    millesime: number | null,
    type: "vin" | "champagne" | "petillant" | "cidre" | "spiritueux" | "biere" | "vide" ,
    couleur: "rouge" | "blanc" | "rose" | "blonde" | "brune" | "ambree" | "blanche" | "",
    gout: "sec" | "demi-sec" | "sucré" | "doux" | "brut" | null,
    pays: string | null,
    appellation: string | null,
    exploitation: string | null,
    cuvee: string | null,
    accords: string[],
    prix: number | null,
    achat: string | null,
    rack: string
} 

export interface Rack {
    idrack: string,
    rackName: string,
    columns: number,
    rows: number,
    bottles: Bottle[]
}


// millesime: annee
// exploitation: Domaine ... chateau ...
// 