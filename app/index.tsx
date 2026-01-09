import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface WeatherData {
  temperature: number,
  windspeed : number,
  winddirection : number
}

export default function Index() {

  const getWeather = async() => {
    try {
      const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=47.9026&longitude=20.3733&current_weather=true");
      const data = await response.json();
      console.log(data);
      setWeather(data.current_weather);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeather();
  },[]);

  const [weather,setWeather] = useState<WeatherData | null>(null);
  const [loading,setLoading] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      {
        loading ? <ActivityIndicator /> 
                : 
          weather ? (
            <View>
              <Text style={styles.location}>Eger időjárása</Text>
              <Text style={styles.temperature}>Hőmérséklet: {weather.temperature}°C</Text>
              <Text>Szélsebesség: {weather.windspeed} km/h</Text>
              <Text>Szélirány: {weather.winddirection}°</Text>
            </View>
          )
          :( <Text>Nem sikerült az időjárás adatot letölteni!</Text> )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex :1,
    justifyContent: "center",
    alignItems: "center"
  },
  location:{
    color: "magenta",
    fontSize: 67,
    textDecorationLine: "underline"
  },
  temperature: {
    color: "#FD8100",
    fontSize: 41,
    fontWeight: "bold"
  }

});
