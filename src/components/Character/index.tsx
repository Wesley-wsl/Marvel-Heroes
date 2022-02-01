import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { characterScreenProps, IDataCategory } from '../../@types';
import { styles } from './styles';

export default function Character({ item }: IDataCategory) {
    const navigation = useNavigation<characterScreenProps>();

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(`Character`, { data: item })}
        >
            <Image source={{ uri: item.imagePath }} style={styles.image} />

            <LinearGradient
                colors={['rgba(0,0,0,0)', '#000000']}
                locations={[0.5, 1.0]}
                style={styles.gradient}
            />

            <View style={styles.name}>
                <Text style={styles.cast}>{item.alterEgo}</Text>
                <Text style={styles.character}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}
