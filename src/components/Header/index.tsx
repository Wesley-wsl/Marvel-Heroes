import { View } from 'react-native';

import MarvelSvg from '../../assets/icons/marvel.svg';
import MenuSvg from '../../assets/icons/menu.svg';
import SearchSvg from '../../assets/icons/search.svg';
import { styles } from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <MenuSvg width={24} height={24} />
            <MarvelSvg width={71} height={26} />
            <SearchSvg width={20} height={20} />
        </View>
    );
}
