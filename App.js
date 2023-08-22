import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a5f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello Valentina</Text>
        <Text>Good evening, wash your hands</Text>
      </View>
      
      <FlatList
       data={DATA}
       horizontal
       keyExtractor={item => item.id}
       contentContainerStyle={{columnGap: 10}}
       renderItem={({item}) => <TouchableOpacity title={item.title} style={styles.card}
       
       >
       <View style={styles.cardHeader}>
         <Text>6% -13%</Text>
         <TouchableOpacity>
           <Text>Explore</Text>
         </TouchableOpacity>
       </View>
      <View>
      <Text>Total Savings</Text>
       <Text>$144,000</Text>
      </View>
     </TouchableOpacity>}
      
      />
      
      

      <View>
        <Text>Open up App.js to start working on your app o!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "red", 
    flexDirection: "column",
    justifyContent:'space-between',
    padding: 10,
    borderRadius: 3,
    width:300,
    height:150
  },
  cardHeader:{
    display:'flex',
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "center",
  }
});
