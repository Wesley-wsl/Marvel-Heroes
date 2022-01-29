import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import GilroyBold from './assets/fonts/gilroy-bold.ttf';
import GilroyHeavy from './assets/fonts/gilroy-heavy.ttf';
import GilroyMedium from './assets/fonts/gilroy-medium.ttf';
import GilroyRegular from './assets/fonts/gilroy-regular.ttf';
import GilroySemiBold from './assets/fonts/gilroy-semibold.ttf';
import Routes from './src/routes';

export default function App() {
    const [loaded] = useFonts({
        GilroyBold,
        GilroyHeavy,
        GilroyMedium,
        GilroyRegular,
        GilroySemiBold,
    });

    if (!loaded) return <AppLoading />;

    return (
        <>
            <Routes />
            <StatusBar style="auto" />
        </>
    );
}
