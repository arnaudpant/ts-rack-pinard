export interface Bottle {
    millesime: number,
    type: "vin" | "champagne" | "cidre" | "spiritueux" | "biere" ,
    couleur: "rouge" | "blanc" | "rose" | "blonde" | "brune" | "ambree" | "blanche" | "autre",
    pays: string,
    region: string,
    appellation: string,
    marque: string,
    alliance: string,
    prix: number,
    achat: Date
} 

export interface Rack {
    name: string,
    column: number,
    rows: number,
    bottles: Bottle[]
}
