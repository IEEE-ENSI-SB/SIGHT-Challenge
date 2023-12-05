import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [myPlants, setMyPlants] = useState([]);
  const [plantInterface, setPlantInterface] = useState("");

  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (photoUri) {
      setIsPreview(true);
    }
  }, [photoUri]);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = {
          quality: 0.5,
          base64: true,
          skipProcessing: true,
          flashMode: Camera.Constants.FlashMode.off, 
        };
        const data = await cameraRef.current.takePictureAsync(options);
        const source = data.uri;
        if (source) {
          await cameraRef.current.pausePreview();
          setPhotoUri(source);
          console.log("picture source", source);
        }
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  const generateRandomName = () => {
    const names = ["Ananace", "Ananace"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const generateRandomWateringNeeds = () => {
    return 322; 
  };

  const addToMyPlants = () => {
   
    const randomName = generateRandomName();
    const randomWateringNeeds = generateRandomWateringNeeds();

    const newPlant = {
      name: randomName,
      wateringNeeds: randomWateringNeeds,
      interface: plantInterface,
    };
    setMyPlants((prevPlants) => [...prevPlants, newPlant]);

 
    setPlantInterface("");
    setPhotoUri(null);
  };

  const recordVideo = async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            setVideoSource(source);
            console.log("video source", source);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const stopVideoRecording = () => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
    }
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const cancelPreview = async () => {
    if (cameraRef.current) {
      await cameraRef.current.resumePreview();
    }
  
    setIsPreview(false);
    setVideoSource(null);
    setPhotoUri(null);
    setPlantInterface("");
  };

  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      />
    </TouchableOpacity>
  );

  const renderVideoPlayer = () => (
    <Video
      source={{ uri: videoSource }}
      shouldPlay={true}
      style={styles.media}
    />
  );

  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Recording..."}</Text>
    </View>
  );

  const renderCaptureControl = () => (
    <View style={styles.captureControlContainer}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onLongPress={recordVideo}
        onPressOut={stopVideoRecording}
        onPress={takePicture}
        style={styles.capture}
      />
    </View>
  );

  const renderPlantInfoInput = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.underlineText}>Please write carefully:</Text>
      <TextInput
        style={styles.interfaceInput}
        placeholder="Enter plant interface"
        value={plantInterface}
        onChangeText={setPlantInterface}
        keyboardType="numeric" 
      />
      <TouchableOpacity
        onPress={addToMyPlants}
        style={styles.addToPlantsButton}
      >
        <Text style={styles.addToPlantsButtonText}>Add to My Plants</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTakenPhoto = () => (
    <View style={styles.takenPhotoContainer}>
      <Image source={{ uri: photoUri }} style={styles.takenPhoto} />
    </View>
  );

  const renderMyPlants = () => (
    <View style={styles.myPlantsContainer}>
      {myPlants.length > 0 && (
        <View style={styles.plantInfo}>
          <Text>{`Name: ${myPlants[myPlants.length - 1].name}, Watering Needs: ${myPlants[myPlants.length - 1].wateringNeeds}, Interface: ${myPlants[myPlants.length - 1].interface}`}</Text>
        </View>
      )}
    </View>
  );

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={cameraType}
          flashMode={Camera.Constants.FlashMode.off} 
          onCameraReady={onCameraReady}
          onMountError={(error) => {
            console.log("camera error", error);
          }}
        />

        {isVideoRecording && renderVideoRecordIndicator()}
        {videoSource && renderVideoPlayer()}
        {isPreview && renderCancelPreviewButton()}
        {!videoSource && !isPreview && renderCaptureControl()}
      </View>
      <View style={styles.inputContainer}>
        {isPreview && renderTakenPhoto()}
        {renderPlantInfoInput()}
        {renderMyPlants()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 100,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  media: {
    ...StyleSheet.absoluteFillObject,
  },
  underlineText: {
    textDecorationLine: "underline",
    marginTop:140,
    fontSize: 20,
    color: "#ff4162",
  },
  closeButton: {
    position: "absolute",
    left: 15,
    height: closeButtonSize,
    width: closeButtonSize,
    borderRadius: Math.floor(closeButtonSize / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
  closeCross: {
    width: "59%",
    height: 1,
    backgroundColor: "black",
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 150,
    color: "#ffffff",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
  captureControlContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#c4c5c4",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
    marginBottom: -90,
    left: -20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  input: {
    height: 40,  
    
    borderWidth: 2,
    margin: 10,
    width:300,
    padding: 10,
  },
  takenPhotoContainer: {
    position: "absolute",
    top: 10, 
    alignSelf: "center", 
  },
  takenPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
 
  },
  addToPlantsButton: {
    backgroundColor: "#BEDADC",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    alignItems: "center",
  },
  
  addToPlantsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  myPlantsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  myPlantsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  plantInfo: {
    marginVertical: 5,
  },
  
  
  interfaceInput: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    width: 300,
    padding: 10,
  },
});
