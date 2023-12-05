import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Screen4 = () => {
  const weatherData = [
    { day: 'Sunday', temperature: '25°C', wind: '5 m/s', humidity: '60%' },
    { day: 'Monday', temperature: '22°C', wind: '4 m/s', humidity: '55%' },
    { day: 'Tuesday', temperature: '20°C', wind: '3 m/s', humidity: '50%' },
    { day: 'Wednesday', temperature: '23°C', wind: '6 m/s', humidity: '65%' },
    { day: 'Thursday', temperature: '18°C', wind: '2 m/s', humidity: '45%' },
    { day: 'Friday', temperature: '21°C', wind: '4 m/s', humidity: '55%' },
    { day: 'Saturday', temperature: '24°C', wind: '5 m/s', humidity: '60%' },
  ];

  const currentDate = new Date();
  const currentDay = weatherData[currentDate.getDay()];

  return (
    <View style={styles.container}>
      <Image source={require('./images/sky1.jpg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <View style={styles.rowContainer}>
          <View style={styles.iconContainer}>
            <Icon name="enviromento" size={35} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.locationText}>Tunisia Manouba</Text>
          </View>
        </View>
        <View style={styles.weatherContainer}>
          <Text style={styles.dateText}>{currentDay.day}</Text>
          <Text style={styles.temperatureText}>{currentDay.temperature}</Text>
          <Text style={styles.weatherDescriptionText}>Clear Sky</Text>
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoText}>Wind  |  {currentDay.wind}</Text>
            <Text style={styles.additionalInfoText}>Humidity  |  {currentDay.humidity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 20,
  },
  textContainer: {},
  locationText: {
    fontSize: 24,
    color: '#fff',
  },
  weatherContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 30,
    width: '80%', 
  },
  dateText: {
    fontSize: 39,
    marginBottom: 20,
    color: '#fff',
  },
  temperatureText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  weatherDescriptionText: {
    fontSize: 24,
    color: '#fff',
  },
  additionalInfoContainer: {
    marginTop: 20,
  },
  additionalInfoText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
});
