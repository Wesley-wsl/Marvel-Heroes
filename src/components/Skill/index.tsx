import { View, Text } from 'react-native';

import { ISkill } from '../../@types';
import { styles } from './styles';

export default function Skill({ Ability, Dots }: ISkill) {
    const abilityDots: string[] = new Array(44).fill('');
    const power = Dots * 0.4;

    return (
        <View style={styles.container}>
            <Text style={styles.ability}>{Ability}</Text>
            {abilityDots.map((dot, index) =>
                power === index ? (
                    <View
                        style={[styles.dots, { height: 12 }]}
                        key={Math.random()}
                    />
                ) : (
                    <View
                        style={
                            index <= power
                                ? [styles.dots]
                                : [styles.dots, { opacity: 0.25 }]
                        }
                        key={Math.random()}
                    />
                ),
            )}
        </View>
    );
}
