import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Index() {
  const [msg, setMsg] = useState('Hello world!');
  useEffect(() => {
    setMsg('Hello world!');
  });
  return <View className='index'>
    <Text>{msg}</Text>
  </View>;
}
