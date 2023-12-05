import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

const Screen5 = ({ navigation }) => {
 
  const plantData = [
    { id: 1, name: 'Rose' },
    { id: 2, name: 'Lily' },
    { id: 3, name: 'Orchid' },
    { id: 4, name: 'Tulip' },
    { id: 5, name: 'Sunflower' },
    { id: 6, name: 'Fern' },
    { id: 7, name: 'Aloe Vera' },
    { id: 8, name: 'Bamboo' },
  ];

 
  const handlePlantPress = (plant) => {
 
    console.log(`Navigate to details of ${plant.name}`);
  };


  const renderPlantItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePlantPress(item)}>
      <View style={[styles.plantItem, styles.plantContainer]}>
        <Text style={styles.plantName}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleSeeMore(item)} style={styles.seeMoreButton}>
          <Text style={styles.seeMoreButtonText}>More Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );


  const handleSeeMore = (plant) => {
   
    console.log(`See more for ${plant.name}`);
  };

  return (
    <ImageBackground source={require('./images/plants2.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.underlinedTitle]}>My Plants</Text>
        <FlatList
          data={plantData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPlantItem}
        />
      </View>
    </ImageBackground>
  );
};

export default Screen5;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 16,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  underlinedTitle: {
    textDecorationLine: 'underline',
  },
  plantItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  plantName: {
    fontSize: 34,
    color: 'black',
    margin: 8,
  },
  plantContainer: {
    borderWidth: 5,
    borderColor: '#006064',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginHorizontal: 20,
  },
  seeMoreButton: {
    backgroundColor: '#006064',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  seeMoreButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
