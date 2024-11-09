import { Bottle } from "../types/RacksTypes";


export const fakeBottles: Bottle[] = [
    {
        id: "fake-bottle-a",
        nom: "Château Margaux",
        millesime: 2015,
        appellation: "Margaux AOC",
        exploitation: "Château Margaux",
        cepage: "Cabernet Sauvignon",
        pays: "France",
        type: "vin",
        couleur: "rouge",
        saveur: null,
        corps: "plein",
        potentiel: "moyen",
        status: "A boire",
        degre: 13.5,
        accords: "agneau",
        prix: 600,
        achat: "2022-02-17",
        rackId: "314",
        index: 3,
        drink: "",
        favoris: false
    },
    {
        id: "fake-bottle-b",
        nom: "Chablis Grand Cru AOC",
        millesime: 2019,
        appellation: "Chablis",
        exploitation: "Domaine William Fèvre",
        cepage: "Chardonnay",
        pays: "France",
        type: "vin",
        couleur: "blanc",
        saveur: "sec",
        corps: "moyen",
        potentiel: "moyen",
        status: "A boire",
        degre: 13,
        accords: "huitres",
        prix: 80,
        achat: "2021-06-21",
        rackId: "314",
        index: 4,
        drink: "",
        favoris: false
    },
];

export const fakeCaseEmpty: Bottle = {
    id: "fake-empty",
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
    rackId: "314",
    index: 2,
    drink: null,
    favoris: false
};

export const fakeBottle: Bottle = {
    id: "fake-bottle",
    nom: "Château Margaux",
    millesime: 2015,
    appellation: "Margaux AOC",
    exploitation: "Château Margaux",
    cepage: "Cabernet Sauvignon",
    pays: "France",
    type: "vin",
    couleur: "rouge",
    saveur: null,
    corps: "plein",
    potentiel: "moyen",
    status: "A boire",
    degre: 13.5,
    accords: "agneau",
    prix: 600,
    achat: "2022-02-17",
    rackId: "314",
    index: 3,
    drink: null,
    favoris: false
};

export const rackTest = {
    idrack: "testA",
    rackName: "Test A",
    columns: 3,
    rows: 4,
    bottles: [],
};


export const authUserfake = {
    uid: "123",
    email: "fake@test.fr",
    displayName: "fake-user",
    emailVerified: false,
    photoURL: "https://maFakeAvatar.jpeg",
    userDocument: {
        photoURL: "https://maFakeAvatar.jpeg",
        uid: "321",
        email: "fake@test.fr",
        onBoardingisCompleted: true,
        login: "fake-user",
        racks: [rackTest],
        bottlesFavoris: [],
        bottlesDrink: []
    } 
}