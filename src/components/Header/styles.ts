import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: theme.colors.primarySilver,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
        paddingBottom: 19,
        alignItems: 'center',
    },
});
