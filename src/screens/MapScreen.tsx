import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper/ScreenWrapper'
import { GlobalColors } from '../infrastructure/GlobalColors'
import MapView, { Callout, Marker } from 'react-native-maps'
import GlobalCaption from '../components/GlobalTexts/GlobalCaption'

import * as Location from "expo-location";
import { Snackbar, Text } from 'react-native-paper'
import { DUMMY_DATA } from '../data/DUMMY_DATA'

const MapScreen = () => {
  
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const onOpenSnack = () => {
    setIsSnackBarVisible(!isSnackBarVisible);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      var { latitude, longitude } = coords;
      setLatitude(latitude);
      setLongitude(longitude);
    })();
  }, []);
  return (
    <ScreenWrapper>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.029,
        }}
      >
        {DUMMY_DATA.map((place) => {
          return (
            <> 
              <Marker
                key={place.id.toString()}
                title={place.place}
                coordinate={{
                  latitude: place.coords.latitude,
                  longitude: place.coords.longitude,
                }}
              >
                <Callout onPress={onOpenSnack}>
                  <Text>{place.place}</Text>
                </Callout>
              </Marker>
            </>
          );
        })}
      </MapView>

      <Snackbar
        style={styles.snack}
        visible={isSnackBarVisible}
        onDismiss={onOpenSnack}
        duration={200000}
        action={{
          label: "X",
          onPress: onOpenSnack,
        }}
      >
        This Bus stop is located on your right in about 4km
      </Snackbar>
    </ScreenWrapper>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  con: {
    backgroundColor: GlobalColors.white,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
  },
  map: {
    height: "100%",
    width: "100%",
  },
  snack: {
    backgroundColor: GlobalColors.bg,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  icon:{
    paddingHorizontal:5
  }
})