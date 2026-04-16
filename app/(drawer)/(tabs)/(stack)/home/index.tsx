import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, useNavigation } from 'expo-router'
import { View } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const onToggleDrawer = () => {
      navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <View className='p-10 gap-5'>

      <Link href="/products" asChild>
        <CustomButton >
          Products
        </CustomButton>
      </Link>

      <Link href="/profile" asChild>
        <CustomButton color='secondary' >
          Profile
        </CustomButton>
      </Link>

      <Link href="/settings" asChild>
        <CustomButton color='tertiary'>
          Settings
        </CustomButton>
      </Link>

      <Link href="/settings" asChild>
        <CustomButton color='primary' variant='text-only' >
          Productos
        </CustomButton>
      </Link>


      <CustomButton onPress={onToggleDrawer}>
        Abir menu
      </CustomButton>

    </View>
  )
}

export default HomeScreen