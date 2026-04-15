import { products } from '@/data/products.data'
import { Redirect, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProductScreen = () => {

  const { id } = useLocalSearchParams()
  const product = products.find((product) => product.id === id);

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
