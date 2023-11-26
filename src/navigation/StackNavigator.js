import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Search from "../screens/Search";
import Restaurantpage from "../screens/Restaurantpage";
import Maps from "../screens/Maps";
import SeeMoreTopRated from "../screens/SeeMoreTopRated";

const RootStack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <RootStack.Navigator initialRouteName="main">
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="main"
                    component={TabNavigator}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="search"
                    component={Search}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="restaurantpage"
                    component={Restaurantpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="maps"
                    component={Maps}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="seemoretoprated"
                    component={SeeMoreTopRated}
                />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StackNavigator;
