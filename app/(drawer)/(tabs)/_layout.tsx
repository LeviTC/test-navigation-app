import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#49129C', 
      }}
    >
      <Tabs.Screen 
        name="(stack)"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bars" color={color} size={28} />
          ),
        }}
      />

      <Tabs.Screen 
        name="home/index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen 
        name="favorites/index" 
        options={{ 
          title: 'Favorites',
          tabBarIcon: ({ color }) => (
          <FontAwesome name="star" color={color} size={28} />
        ),
      }} />
    </Tabs>
  )
}

export default TabsLayout