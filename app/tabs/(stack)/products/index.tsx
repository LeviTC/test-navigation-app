import { products } from '@/data/products.data'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View
      className='flex flex-1'
    >
      <FlatList 
        data={products}
        ItemSeparatorComponent={() => <View className='h-10' />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <View className='gap-2'>
            <Text className='text-2xl font-extrabold'>{item.title}</Text>
            <Text className=' text-gray-500'>{item.description}</Text>

            <View className='flex-row justify-between'>
              <Text className='text-xl font-extrabold'>{item.price}</Text>
              <Link href={`/tabs/products/${item.id}`} className='text-xl font-bold text-primary'>Ver detalle</Link>
            </View>
          </View>
        }
      />
    </View>
  )
}

export default ProductsScreen