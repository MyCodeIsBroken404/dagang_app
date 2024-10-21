import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Loading from "./Screens/Loading";
import Welcome from "./Screens/Welcome";
import AuthOptions from "./Screens/AuthOptions";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Success from "./Screens/Success";
import RoleOption from "./Screens/RoleOption";
import Beranda from "./Screens/Beranda";
import Favorite from "./Screens/Favorite";
import DetailDagangan from "./Screens/DetailDagangan";
import Permintaan from "./Screens/Permintaan";
import Beranda2 from "./Screens/Beranda2";
import Profil1 from "./Screens/Profil1";
import Profil2 from "./Screens/Profil2";
import ProfilPenjual from "./Screens/ProfilPenjual";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="AuthOptions" component={AuthOptions} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="RoleOption" component={RoleOption} />
          <Stack.Screen name="Beranda" component={Beranda} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="DetailDagangan" component={DetailDagangan} />
          <Stack.Screen name="Permintaan" component={Permintaan} />
          <Stack.Screen name="Beranda2" component={Beranda2} />
          <Stack.Screen name="Profil1" component={Profil1} />
          <Stack.Screen name="Profil2" component={Profil2} />
          <Stack.Screen name="ProfilPenjual" component={ProfilPenjual} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;