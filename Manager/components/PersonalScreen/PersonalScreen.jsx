import React, { useContext } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'
import { commonStyles } from '../../commonStyles'

import teacher from '../../assets/3d/teacher.png'
export default function PersonalScreen() {
  const { correctColors } = useContext(Storage)
  const colorNumber = correctColors - 1
  const navigation = useNavigation()
  return (
    <ScrollView style={{flex: 1, padding: 8}}>
      <View style={{marginVertical: 32, alignItems: 'center'}}>
        <Text style={{textAlign: 'center', fontSize:  28, color: colors.white[colorNumber]}}>Welcome to <Text style={{color: colors.green}}>True</Text> or <Text style={{color: colors.red}}>False</Text>.</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color: colors.white[0], marginVertical: 16}}>Let's test your skills on how observant you are in your work!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Questions')} style={{backgroundColor: colors.middle[colorNumber], paddingHorizontal: 32, paddingVertical: 8, borderRadius: 8}}>
          <Text style={{textAlign: 'center', fontSize: 24, color: colors.buttonColor[colorNumber]}}>Start Test</Text>
        </TouchableOpacity>
        <View style={[commonStyles.imgCon, {marginVertical: 32}]}>
          <Image source={teacher} style={commonStyles.img} />
        </View>
      </View>
    </ScrollView>
  )
}