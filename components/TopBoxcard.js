import { View , Text} from 'react-native'
import { StyleSheet } from 'react-native'

const TopBoxcard = () => {
  return (
    <View style={styles.container}>
      <Text> hi there</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: "#111",
      },
})

export default TopBoxcard