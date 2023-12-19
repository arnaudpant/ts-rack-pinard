export interface Bottle {
    id: string,
    millesime: number,
    type: "vin" | "champagne" | "petillant" | "cidre" | "spiritueux" | "biere" | "vide" ,
    couleur: "rouge" | "blanc" | "rose" | "blonde" | "brune" | "ambree" | "blanche" | "",
    gout?: "sec" | "demi-sec" | "sucré" | "doux" | "brut",
    pays?: string,
    appellation: string,
    exploitation: string,
    cuvee?: string,
    accords?: string[],
    prix?: number | 0,
    achat?: string,
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