import { StyleSheet, Text, View, Image } from 'react-native'
import Brand1 from "../assets/brand1.jpeg"
import Brand2 from "../assets/brand2.jpeg"
import Brand3 from "../assets/brand3.jpeg"
import Brand4 from "../assets/brand4.jpeg"


const Brands = () => {
  return (
    <View style={styles.container}>
     
        <Text style ={styles.title}>Today's Deals</Text>
        
        <View style={styles.row}>
            <View style={styles.brands}>
                <Image source={Brand1} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}> 20% off | Jewellery </Text>
            </View>
            <View style={styles.brands}>
                <Image source={Brand2} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}> 20% off | Titan Smart watches</Text>
            </View>       
        </View>

        <View style={styles.row}>
            <View style={styles.brands}>
                <Image source={Brand3} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}> 50% off | High heels</Text>
            </View>
            <View style={styles.brands}>
                <Image source={Brand4} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}> 20% off | Sony 60W Bluetooth Soundbar Speaker</Text>
            </View>       
        </View>

    </View>
  )
}

export default Brands

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: "#dddddd"
    },
    title: {
        fontSize: 18,
        color: "#000000",
        padding: 10,
        fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
    },
    brands: {
        width: '50%',
        padding: 4,
    },
    imgStyle: {
       height: 150,
       width: '100%',
       borderRadius: 10,
    },
    brandTitle: {
        color: "#000000",
        fontSize: 12,
        marginTop: 8,
    },
 
})