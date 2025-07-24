import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  UIManager,
  View
} from 'react-native';
import { mockLLM } from './mockLLM';
import { useUIStore } from './useUIStore';



if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default function App() {

  const { backgroundColor, title, setBackgroundColor, setTitle, setButtonPosition, buttonPosition, reset } = useUIStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [command, setCommand] = useState('');

  const handleCommandSubmit = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const update = mockLLM(command);

    if (update) {
      if (update.backgroundColor) setBackgroundColor(update.backgroundColor);
      if (update.title) setTitle(update.title);
      if (update.buttonPosition) setButtonPosition(update.buttonPosition);
    } else {
      console.log('Unsupported command');
    }

    setCommand('');
  };



  return (

    
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >

        <View style={styles.helpBox}>
          <Text style={styles.helpTitle}>🧠 Try Commands Like:</Text>
          <Text style={styles.helpItem}>• Make the background red</Text>
          <Text style={styles.helpItem}>• Change the title to Settings</Text>
          <Text style={styles.helpItem}>• Move Save button to top</Text>
          <Text style={styles.helpItem}>• Reset</Text>
        </View>


        {buttonPosition === 'top' && (
          <View style={styles.buttonContainer}>
            <Button title="Save" onPress={() => {}} />
          </View>
        )}
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />



        <View style={styles.commandBar}>
          <TextInput
            placeholder="Type a command..."
            style={styles.commandInput}
            value={command}
            onChangeText={setCommand}
            onSubmitEditing={handleCommandSubmit}
            returnKeyType="done"
            />
        </View>

        {buttonPosition === 'bottom' && (
          <View style={styles.buttonContainer}>
            <Button title="Save" onPress={() => {}} />
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
    color: 'white',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  commandBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#ecf0f1',
    borderTopWidth: 1,
    borderColor: '#bdc3c7',
  },
  commandInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  helpBox: {
  backgroundColor: '#ffffff22',
  padding: 12,
  borderRadius: 10,
  marginBottom: 20,
},
helpTitle: {
  fontWeight: 'bold',
  color: 'white',
  marginBottom: 4,
},
helpItem: {
  color: 'white',
  fontSize: 14,
},

});
