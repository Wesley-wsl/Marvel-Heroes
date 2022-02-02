import { View, Image } from 'react-native';

import { IMovie } from '../../@types';
import { styles } from './styles';

export default function Movie({ item }: IMovie) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item }} style={styles.image} />
        </View>
    );
}
