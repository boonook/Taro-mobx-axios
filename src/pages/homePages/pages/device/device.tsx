import { ComponentType } from 'react'
import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react'
import { View,Text } from '@tarojs/components'
import './device.less';

function Device() {
  const [title,setTitle] = useState('测试')
  useEffect(()=>{
   setTitle('boonook')
  },[title])
  return (
    <View className='container'>
      <Text>{title}</Text>
    </View>
  )
}

Device.Config ={
  navigationBarTitleText:"设备管理"
}

export default Device  as ComponentType
