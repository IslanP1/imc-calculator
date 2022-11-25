import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Formulario from './formulario'

const Principal = () => {
  return (
    <View>
        <View>
            <Formulario/>
            <Text>Principal</Text>
        </View>
    </View>
  )
}

export default Principal

const styles = StyleSheet.create({})