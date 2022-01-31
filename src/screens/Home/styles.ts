import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 24,
        backgroundColor: theme.colors.primarySilver,
    },
    welcome: {
        color: theme.colors.primaryGrey,
        fontFamily: theme.fonts.GilroySemiBold,
        fontSize: 14,
        marginTop: 24,
    },
    title: {
        fontSize: 32,
        color: theme.colors.primaryDark,
        fontFamily: theme.fonts.GilroyHeavy,
        marginTop: 4,
    },
});
