import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import BackSvg from '../../assets/icons/back.svg';
import { styles } from './styles';

export function HeaderBack() {
    const navigation = useNavigation();
    const Back = () => navigation.goBack();

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={Back} style={styles.button}>
                <BackSvg />
            </BorderlessButton>
        </View>
    );
}
