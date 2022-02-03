import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';

import { ICharacterParams } from '../../@types';
import AgeSvg from '../../assets/icons/age.svg';
import HeightSvg from '../../assets/icons/height.svg';
import UniverseSvg from '../../assets/icons/universe.svg';
import WeightSvg from '../../assets/icons/weight.svg';
import { HeaderBack } from '../../components/HeaderBack';
import Movie from '../../components/Movie';
import Skill from '../../components/Skill';
import { styles } from './styles';

export default function CharacterInformation() {
    const route = useRoute();
    const { data } = route.params as ICharacterParams;

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden />
            <ImageBackground
                source={{ uri: data.imagePath }}
                style={styles.background}
            >
                <HeaderBack />
                <LinearGradient
                    colors={['rgba(0,0,0,0)', '#000000']}
                    locations={[0.3, 1.0]}
                    style={styles.gradient}
                />

                <View style={styles.nameContainer}>
                    <Text style={styles.personName}>{data.alterEgo}</Text>
                    <Text style={styles.heroName}>{data.name}</Text>
                </View>

                <View style={styles.informationContainer}>
                    <View style={styles.shortInformations}>
                        <AgeSvg />
                        <Text style={styles.information}>
                            {data.caracteristics.birth}
                        </Text>
                    </View>
                    <View style={styles.shortInformations}>
                        <WeightSvg />
                        <Text style={styles.information}>
                            {data.caracteristics.weight.value}kg
                        </Text>
                    </View>
                    <View style={styles.shortInformations}>
                        <HeightSvg />
                        <Text style={styles.information}>
                            {data.caracteristics.height.value}m
                        </Text>
                    </View>
                    <View style={styles.shortInformations}>
                        <UniverseSvg />
                        <Text style={styles.information}>
                            {data.caracteristics.universe}
                        </Text>
                    </View>
                </View>

                <Text style={styles.details}>{data.biography}</Text>
            </ImageBackground>

            <View style={styles.abilityContainer}>
                <Text style={styles.introAbility}>Habilidades</Text>
                <Skill Ability="Força" Dots={data.abilities.force} />
                <Skill
                    Ability="Inteligência"
                    Dots={data.abilities.intelligence}
                />
                <Skill Ability="Agilidade" Dots={data.abilities.agility} />
                <Skill Ability="Resistência" Dots={data.abilities.endurance} />
                <Skill Ability="Velocidade" Dots={data.abilities.velocity} />
            </View>

            <View style={styles.movieContainer}>
                <Text style={styles.movies}>Filmes</Text>

                <FlatList
                    data={data.movies}
                    renderItem={props => <Movie {...props} />}
                    keyExtractor={item => Math.random() + item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
}
