import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';
import 'moment/locale/en-gb'; 


const Screen2 = ({ navigation }) => {
  const [initialWaterAmount, setInitialWaterAmount] = useState(1000);
  const [userInput, setUserInput] = useState('');
  const [reservedWater, setReservedWater] = useState([]);
  const currentDate = moment().locale('en').format('LL');

  const handleWaterAmountChange = (text) => {
    if (!isNaN(text)) {
      setUserInput(text);
    }
  };

  const calculateReservedWater = () => {
    const userAmount = parseInt(userInput) || 0;
    const totalReservedWater = reservedWater.reduce((acc, amount) => acc + amount, 0);
    const reservedWaterAmount = totalReservedWater + userAmount;
    return initialWaterAmount - reservedWaterAmount < 0 ? 0 : initialWaterAmount - reservedWaterAmount;
  };

  const reserveWater = () => {
    const userAmount = parseInt(userInput) || 0;
    setReservedWater([...reservedWater, userAmount]);
    setUserInput('');
  };

  const cancelReservation = (index) => {
    const updatedReservedWater = [...reservedWater];
    updatedReservedWater.splice(index, 1);
    setReservedWater(updatedReservedWater);
  };

  const useReservedWater = (index) => {
    const userAmount = reservedWater[index] || 0;
    const updatedWaterAmount = initialWaterAmount - userAmount;
    setInitialWaterAmount(updatedWaterAmount);

    const updatedReservedWater = reservedWater.filter((_, i) => i !== index);
    setReservedWater(updatedReservedWater);

    setUserInput('');
  };

  const renderReservedItem = ({ item, index }) => (
    <View style={styles.reservedItem}>
      <Text>Reserved Water: {item} m³</Text>
      <TouchableOpacity onPress={() => cancelReservation(index)} style={[styles.actionButton, styles.cancelButton]}>
        <Text style={styles.actionButtonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => useReservedWater(index)} style={[styles.actionButton, styles.useButton]}>
        <Text style={styles.actionButtonText}>Use</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Water Inventory</Text>
      <Text style={styles.todayDate}>Today's Date: {currentDate}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/water2.jpg')}
          style={styles.photo}
        />
      </View>
      <Text style={styles.waterAmount}>Water Quantity: {calculateReservedWater()} m³</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter water quantity"
        keyboardType="numeric"
        onChangeText={handleWaterAmountChange}
        value={userInput}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={reserveWater} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Water Reserve</Text>
        </TouchableOpacity>
        <FlatList
          data={reservedWater}
          renderItem={renderReservedItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 260,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
    color: '#292224',
  },
  todayDate: {
    fontSize: 16,
    marginBottom: 30,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
  photo: {
    width: 300,
    height: 200,
  },
  waterAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
  },
  input: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#F78DA7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reservedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#BF4040', 
  },
  useButton: {
    backgroundColor: '#2D8630', 
  },
});

export default Screen2;
