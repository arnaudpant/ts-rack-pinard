export interface Bottle {
    id: string,
    millesime: number,
    type: "vin" | "champagne" | "petillant" | "cidre" | "spiritueux" | "biere" ,
    couleur: "rouge" | "blanc" | "rose" | "blonde" | "brune" | "ambree" | "blanche" | "autre" | "doux" | "brut",
    pays: string,
    region: string,
    appellation: string,
    marque: string,
    alliance: string,
    prix: number,
    achat: Date
} 

export interface Rack {
    id: string,
    name: string,
    column: number,
    rows: number,
    bottles: Bottle[]
}
