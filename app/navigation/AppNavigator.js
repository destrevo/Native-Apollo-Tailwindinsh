import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Todo from "../screens/Todo";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }} />
        <Tab.Screen name="Todo" component={Todo} options={({navigation})=> ({
            headerShown: false,
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="calendar" color={color} size={size} />
        })} />
        <Tab.Screen name="Account" component={Profile} options={{
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size} />
            }} />
    </Tab.Navigator>
);

export default AppNavigator;