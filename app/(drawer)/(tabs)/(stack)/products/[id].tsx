import { products } from '@/data/products.data'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const ProductScreen = () => {
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title,
    })
  }, [navigation, product?.title])

  if (!product) {
    return <Redirect href="/products" />
  }

  return (
    <View className='px-5 mt-10'>
      <Text className='text-2xl font-extrabold'>{product.title}</Text>
      <Text className='text-gray-500'>{product.description}</Text>
      <Text className='text-xl font-extrabold'>{product.price}</Text>

    </View>
  )
}

export default ProductScreen
