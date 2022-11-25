import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const Formulario = () => {
  return (
    <View>
        <View>
            <Text>Altura metros</Text>
            <TextInput
            placeholder='Ex: 1.72'
            keyboardType='numeric'
            />
            <Text>Peso kg</Text>
            <TextInput
            placeholder='Ex: 80.5'
            keyboardType='numeric'
            />
        </View>
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({})