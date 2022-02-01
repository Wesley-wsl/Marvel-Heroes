import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterInformation from '../screens/Character';
import Home from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Character" component={CharacterInformation} />
            </Navigator>
        </NavigationContainer>
    );
}
