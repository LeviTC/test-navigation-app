import Ionicons from '@expo/vector-icons/build/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { Pressable } from 'react-native';

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onHeaderPress = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <Stack
    screenOptions={{
      // headerShown: false,
      headerLeft: ({canGoBack }) => (
        <Pressable onPress={() => onHeaderPress(canGoBack)}>
          <Ionicons name={canGoBack ? "arrow-back" : "menu"} size={24} color="black" />
        </Pressable>
      ),
    }}
    >
      <Stack.Screen 
        name="home/index" 
        options={{ 
          title: 'Home', 
          // headerLeft: ({tintColor, canGoBack}) => (
          //   <Pressable onPress={() => onHeaderPress(canGoBack)}>
          //     <Ionicons name="menu" size={24} color="black" />
          //   </Pressable>
          // ),
        }} 
      />

      <Stack.Screen 
        name="products/index" 
        options={{ 
          title: 'Products',
        }} 
      />

      <Stack.Screen 
        name="profile/index" 
        options={{ title: 'Profile' }} 
      />

      <Stack.Screen 
        name="settings/index" 
        options={{ title: 'Settings' }} 
      />
    </Stack>
  )
}

export default StackLayout