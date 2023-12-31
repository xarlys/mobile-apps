import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

type ParticipantProps = {
  name: string
  onRemove: () => void
}

const Participant = ({ name, onRemove }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove} >
          <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

    </View>
  )
}

export { Participant }