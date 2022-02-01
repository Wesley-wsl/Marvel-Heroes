import { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';

import { ICharacters } from '../../@types';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import List from '../../components/List';
import data from '../../utils/application.json';
import { styles } from './styles';

export default function Home() {
    const [heroes, setHeroes] = useState<ICharacters[]>([]);
    const [villains, setVillains] = useState<ICharacters[]>([]);
    const [antiHeroes, setAntiHeroes] = useState<ICharacters[]>([]);
    const [aliens, setAliens] = useState<ICharacters[]>([]);
    const [humans, setHumans] = useState<ICharacters[]>([]);

    useEffect(() => {
        setHeroes(data.heroes);
        setVillains(data.villains);
        setAntiHeroes(data.antiHeroes);
        setAliens(data.aliens);
        setHumans(data.humans);
    }, []);

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <Text style={styles.welcome}>Bem vindo ao Marvel Heroes</Text>
                <Text style={styles.title}>Escolha o seu {'\n'}personagem</Text>
                <Categories />

                <List category="Heróis" dataCategory={heroes} />
                <List category="Vilões" dataCategory={villains} />
                <List category="Anti-heróis" dataCategory={antiHeroes} />
                <List category="Alienígenas" dataCategory={aliens} />
                <List category="Humanos" dataCategory={humans} />
            </ScrollView>
        </>
    );
}
