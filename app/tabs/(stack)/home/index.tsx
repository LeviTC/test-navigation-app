import CustomButton from '@/components/shared/CustomButton'
import { Link } from 'expo-router'
import { View } from 'react-native'

const HomeScreen = () => {
  return (
    <View className='p-10 gap-5'>

      <Link href="/tabs/products" asChild>
        <CustomButton >
          Products
        </CustomButton>
      </Link>

      <Link href="/tabs/profile" asChild>
        <CustomButton color='secondary' >
          Profile
        </CustomButton>
      </Link>

      <Link href="/tabs/settings" asChild>
        <CustomButton color='tertiary'>
          Settings
        </CustomButton>
      </Link>

      <Link href="/tabs/settings" asChild>
        <CustomButton color='primary' variant='text-only' >
          Productos
        </CustomButton>
      </Link>

    </View>
  )
}

export default HomeScreen