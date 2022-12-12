import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList ,Button,TouchableOpacity} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import OrderItem from '../components/ShopComponent/OrderItem'
import * as orderActions from "../store/action/orderAction"
const OrderScreen = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state=>state.orders.orders)
useEffect(()=>{
dispatch(orderActions.fetchOrders())
},[dispatch])

    return (
        <View style={styles.container}>
          
        <FlatList 
        data={orders}
        renderItem={itemData=>
        
        <ProductItem
        id={itemData.item.id}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        description={itemData.item.description}
        price={itemData.item.price}
        navigation={props.navigation}
        itemData={itemData.item}
        >
   
        </ProductItem>}
       
       
       />
        
       </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
       
    },
    head:{
        marginTop:20,
       padding: 10
    },
    text:{
     fontSize:20
    },
   
})
