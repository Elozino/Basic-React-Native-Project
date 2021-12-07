import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItems = (props) => {
  return (
    <View style={styles.item}>
     <View style={styles.ItemLeft}>
      <View style={styles.square}>
      </View>
      <Text style={styles.textItem}>{props.text}</Text>
     </View>
     <View style={styles.circular}>
     </View>
    </View>
  )
}

export default ListItems

const styles = StyleSheet.create({
  item:{
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ItemLeft:{
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap", 
  },
  square:{
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  textItem: {
    maxWidth: "80%",
  },
  circular:{
    width: 18,
    height: 18,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5
  },
})
