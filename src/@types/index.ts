import { StackNavigationProp } from '@react-navigation/stack';

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

export interface ICharacterParams {
    data: ICharacters;
}

export interface IList {
    category: string;
    dataCategory: ICharacters[];
}

export type RootStackParamList = {
    Home: undefined;
    Character: { data: ICharacters };
};

export type homeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
export type characterScreenProps = StackNavigationProp<
    RootStackParamList,
    'Character'
>;

export interface ISkill {
    Ability: string;
}

export interface IMovie {
    item: string;
}
