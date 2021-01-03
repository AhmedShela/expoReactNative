import React,{useState} from 'react';
import { Alert, Button, StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { connect } from 'react-redux';
import GoToButton from "../goToButton";
import { TextInput } from 'react-native-gesture-handler';
import { addOrder } from "../../store/reducers/mntOrders";
import Database from "../sqliteMode/dataBase";

const db = new Database();
 const MntOder = (props)=> {
     const [orderNumber,setOrderNumber] = useState('1')

     const handleAddOrder = ()=>{
         let obj = {orderNumber};
         db.saveOrder(obj).then(result =>{
             console.log('Result : ',result);
             props.addOrder(obj);
             Alert.alert('Success',"Done")
         })
     }
  return (
    <View>
        <View>
            <Text>MntOder</Text>
            <TextInput defaultValue={orderNumber} onChangeText={(orderNumber)=>{setOrderNumber(orderNumber)}}></TextInput>
        </View>
        <View>
            {/* <Button title="Add new Order" onPress={() => navigation.navigate('MntOrderList')}></Button> */}
            <GoToButton title="View List" screenName="MntOrderList"></GoToButton>
            <Button title="Add new Order" onPress={handleAddOrder}></Button>
        </View>
    </View>
  );
}
const mapStateToProps = state => (
    {
        mntOrders: state.mntOrders.mntOrders,
    }
  );
  const mapDispatchToProps = { addOrder };
  export default connect(mapStateToProps, mapDispatchToProps)(MntOder);
// export default MntOder;