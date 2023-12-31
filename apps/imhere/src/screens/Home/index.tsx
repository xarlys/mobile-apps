import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const handleParticipantAdd = () => {
    if(participants.includes(name)) {
      Alert.alert('Exist participant', 'participant already exists')
      return 
    }
    setParticipants([...participants, name])
    setName('')
  }

  const handleParticipantRemove = (name: string) => {
    
    Alert.alert('Remove participant', `Deseja remover o participante ${name} ?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter(participant => participant !== name))
        }
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>Name to event</Text>
      
      <Text style={styles.eventName}>saturdae, 30 dezember de 2023</Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Name participant" 
          placeholderTextColor={'#6B6B6B'}
          onChangeText={e => setName(e)}
          value={name}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item} 
              name={item} 
              onRemove={() => handleParticipantRemove(item)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicine participantes a sua lista de eventos.
          </Text>
        )}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false} >
        {
          participants.map((participant, index) => (
            
            <Participant 
              key={index} 
              name={participant} 
              onRemove={handleParticipantRemove} 
            />
          ))
        }
      </ScrollView> */}
    </View>
  )
}

export { Home }