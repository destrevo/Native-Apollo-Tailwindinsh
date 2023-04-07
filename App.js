import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './app/navigation/AppNavigator';
import ApolloClientProvider from "./app/API/ApolloClient";

export default function App() {
  return (
    <ApolloClientProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ApolloClientProvider>
  );
}

