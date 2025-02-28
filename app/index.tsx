import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

const Home = (): JSX.Element => {
    return <Redirect href = "/(auth)/welcome" />;
}

export default Home;