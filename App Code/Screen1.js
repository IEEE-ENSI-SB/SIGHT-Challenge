import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();

  const navigateToWaterInventory = () => {
    navigation.navigate('Water inventory');
  };

  const navigateToWeather = () => {
    navigation.navigate('Weather');
  };

  const navigateToMyPlants = () => {
    navigation.navigate('My Plants');
  };

  const navigateToAddMyPlants = () => {
    navigation.navigate('Add a Plant');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>r</Text>
          <View style={styles.titleLine} />
        </View>
      </View>

      <View style={styles.header}>
        <Image source={require('./images/mainimg.webp')} style={styles.headerImage} />
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={navigateToWaterInventory}>
            <Image source={require('./images/waterr.png')} style={[styles.boxImage, styles.smallerImage]} />
            <Text style={[styles.boxTitle, styles.titleBorder]}>Water Inventory</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={navigateToWeather}>
            <Image source={require('./images/weather.jpg')} style={styles.boxImage} />
            <Text style={[styles.boxTitle, styles.titleBorder]}>Weather</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.biggerBox} onPress={navigateToMyPlants}>
            <Image source={require('./images/feuillz.jpg')} style={styles.biggerBoxImage} />
            <Text style={[styles.boxTitle, styles.titleBorder]}>My Plants</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.biggerBox} onPress={navigateToAddMyPlants}>
            <Image source={require('./images/fe.jpg')} style={styles.biggerBoxImage} />
            <Text style={[styles.boxTitle, styles.titleBorder]}>Add a Plant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -10,
    marginTop:-70,
  },
  titleImage: {
    width: 150,
    height: 150,
   marginBottom:10,
    borderRadius: 25,
    marginBottom:-100,
    marginLeft:50,
    
  },
  titleContent: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 37,
    color: '#5856D6',
    textAlign: 'center',
   
  },
  titleLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  header: {
    marginTop: 20,
  },
  headerImage: {
    width: 300,
    height: 200,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
  },
  boxContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  box: {
    alignItems: 'center',
    width: '45%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  smallerImage: {
    height: 100,
    width: 65,
  },
  biggerBox: {
    alignItems: 'center',
    width: '45%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  boxImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  biggerBoxImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  boxTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleBorder: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});

export default Screen1;
