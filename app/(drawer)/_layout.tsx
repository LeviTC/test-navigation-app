import CustomDrawer from '@/components/shared/CustomDrawer';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        // overlayColor: 'rgba(0, 0, 0, 0.2)',
        drawerActiveTintColor: '#49129C',
        sceneStyle: {
          backgroundColor: '#fff',
        },
        // headerShown: false,
      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen 
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: 'Tabs',
          title: 'Tabs',
          drawerIcon(props) {
            return <Ionicons name="apps" size={18} color="black" />
          },
        }}
      />
      <Drawer.Screen
        name="user/index" 
        options={{
          drawerLabel: 'User',
          title: 'User',
          drawerIcon(props) {
            return <Ionicons name="person" size={18} color="black" />
          },
        }}
      />
      <Drawer.Screen
        name="schedule/index" 
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule',
          drawerIcon(props) {
            return <Ionicons name="calendar" size={18} color="black" />
          },
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout