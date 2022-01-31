import { Text, View, FlatList } from 'react-native';

import { IList } from '../../@types';
import Character from '../Character';
import { styles } from './styles';

export default function List({ category, dataCategory }: IList) {
    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.title}>{category}</Text>
                <Text style={styles.seeAll}>Ver tudo</Text>
            </View>
            <FlatList
                data={dataCategory}
                renderItem={Character}
                keyExtractor={item => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
