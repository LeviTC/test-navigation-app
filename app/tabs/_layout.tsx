import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#49129C', 
        headerShown: false,
      }}
    >
      <Tabs.Screen 
        name="(stack)"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bars" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen 
        name="home/index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen 
        name="favorites/index" 
        options={{ 
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => (
          <FontAwesome name="heart" color={color} size={28} />
        ),
      }} />
    </Tabs>
  )
}

export default TabsLayout