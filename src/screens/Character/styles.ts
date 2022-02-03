import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        position: 'relative',
        backgroundColor: '#000',
    },
    background: {
        flex: 1,
        width: '100%',
        height: 812,
    },
    nameContainer: {
        marginTop: 230,
        paddingLeft: 24,
        marginBottom: 48,
    },
    personName: {
        color: theme.colors.primaryGrey,
        fontFamily: theme.fonts.GilroyMedium,
        fontSize: 14,
        marginBottom: 4,
    },
    heroName: {
        color: '#fff',
        fontSize: 40,
        fontFamily: theme.fonts.GilroyHeavy,
        maxWidth: 180,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 10,
    },
    backgroundContainer: {
        position: 'relative',
    },
    informationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 24,
    },
    shortInformations: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    information: {
        color: '#fff',
        marginTop: 12,
        fontSize: 12,
        fontFamily: theme.fonts.GilroyMedium,
    },
    details: {
        fontSize: 14,
        fontFamily: theme.fonts.GilroyMedium,
        color: '#fff',
        paddingLeft: 24,
        paddingRight: 24,
    },
    abilityContainer: {
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 10,
    },
    introAbility: {
        color: '#fff',
        fontFamily: theme.fonts.GilroyBold,
        fontSize: 18,
    },
    movies: {
        color: '#fff',
        fontFamily: theme.fonts.GilroyBold,
        fontSize: 18,
        marginBottom: 24,
    },
    movieContainer: {
        marginLeft: 24,
        marginBottom: 48,
    },
});
