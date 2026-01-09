import { useState } from "react";
import { View } from "react-native";

interface WeatherData {
  temperature: number,
  windspeed : number,
  winddirection : number
}

export default function Index() {

  const [weather,setWeather] = useState<WeatherData | null>(null);
  const [loading,setLoading] = useState<boolean>(true);

  return (
    <View>
    </View>
  );
}
