import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 24,
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    ability: {
        color: '#fff',
        fontFamily: theme.fonts.GilroyRegular,
        fontSize: 12,
        width: 70,
    },
    dots: {
        width: 1,
        height: 8,
        marginRight: 4,
        backgroundColor: '#fff',
    },
});
