import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 230,
        position: 'relative',
        marginRight: 16,
    },
    image: {
        width: 140,
        height: 230,
        borderRadius: 10,
    },
    name: {
        position: 'absolute',
        bottom: 12,
        left: 12,
        height: 60,
        width: 100,
    },
    cast: {
        color: '#fff',
        marginBottom: 2,
        fontFamily: theme.fonts.GilroyMedium,
        fontSize: 10,
    },
    character: {
        color: '#fff',
        fontFamily: theme.fonts.GilroyHeavy,
        fontSize: 20,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: '100%',
        borderRadius: 10,
    },
});
