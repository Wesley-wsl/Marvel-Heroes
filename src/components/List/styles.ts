import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 40,
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.GilroyBold,
        color: theme.colors.primaryRed,
    },
    seeAll: {
        fontSize: 14,
        fontFamily: theme.fonts.GilroyMedium,
        color: theme.colors.primaryGrey,
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingRight: 24,
    },
});
