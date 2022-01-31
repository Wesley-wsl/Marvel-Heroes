export interface ICharacters {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: ICaracteristics;
    abilities: IAbilities;
    movies: string[];
}

export interface IDataCategory {
    item: ICharacters;
}

interface IAbilities {
    force: number;
    intelligence: number;
    agility: number;
    endurance: number;
    velocity: number;
}

interface ICaracteristics {
    birth: string;
    weight: {
        value: number;
        unity: string;
    };
    height: {
        value: number;
        unity: string;
    };
    universe: string;
}

export interface IList {
    category: string;
    dataCategory: ICharacters[];
}
