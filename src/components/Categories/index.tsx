import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import AlienSvg from '../../assets/icons/alien.svg';
import AntiHeroSvg from '../../assets/icons/antihero.svg';
import HeroSvg from '../../assets/icons/hero.svg';
import HumanSvg from '../../assets/icons/human.svg';
import VillainSvg from '../../assets/icons/villain.svg';
import { styles } from './styles';

export default function Categories() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#005BEA', '#00C6FB']}
                style={styles.category}
            >
                <HeroSvg width={32} height={32} />
            </LinearGradient>
            <LinearGradient
                colors={['#ED1D24', '#ED1F69']}
                style={styles.category}
            >
                <VillainSvg width={32} height={32} />
            </LinearGradient>
            <LinearGradient
                colors={['#B224EF', '#7579FF']}
                style={styles.category}
            >
                <AntiHeroSvg width={32} height={32} />
            </LinearGradient>
            <LinearGradient
                colors={['#0BA360', '#3CBA92']}
                style={styles.category}
            >
                <AlienSvg width={32} height={32} />
            </LinearGradient>
            <LinearGradient
                colors={['#FF7EB3', '#FF758C']}
                style={styles.category}
            >
                <HumanSvg width={32} height={32} />
            </LinearGradient>
        </View>
    );
}
