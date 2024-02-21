import { Bottle } from "../src/types/RacksTypes";

export const fakeBottles: Bottle[] = [
    {
        id: "fake-bottle-a",
        millesime: 2024,
        type: "vin",
        couleur: "rouge",
        gout: "",
        pays: "France",
        appellation: "Bordeaux",
        exploitation: "Chateau Piquette",
        cuvee: "medaille argent",
        accords: [],
        prix: 25,
        achat: "2022-02-17",
        rackId: "314",
        index: 3,
        drink: "",
    },
    {
        id: "fake-bottle-b",
        millesime: 2012,
        type: "vin",
        couleur: "blanc",
        gout: "sec",
        pays: "France",
        appellation: "Montlouis",
        exploitation: "Benoit",
        cuvee: "",
        accords: [],
        prix: 12,
        achat: "2024-01-03",
        rackId: "314",
        index: 4,
        drink: "22/02/2024",
    },
];

export const fakeCaseEmpty: Bottle = {
    id: "fake-empty",
    millesime: null,
    type: "vide",
    couleur: "",
    gout: "",
    pays: null,
    appellation: null,
    exploitation: null,
    cuvee: null,
    accords: [],
    prix: null,
    achat: null,
    rackId: "314",
    index: 2,
    drink: ""
};

export const fakeBottle: Bottle = {
    id: "fake-bottle",
    millesime: 2024,
    type: "vin",
    couleur: "rouge",
    gout: "",
    pays: "France",
    appellation: "Bordeaux",
    exploitation: "Chateau Piquette",
    cuvee: "medaille argent",
    accords: [],
    prix: 25,
    achat: null,
    rackId: "314",
    index: 3,
    drink: ""
};

export const rackTest = {
    idrack: "testA",
    rackName: "Test A",
    columns: 3,
    rows: 4,
    bottles: [],
};