import React,{useEffect} from 'react';
import { Button, StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { connect } from 'react-redux';
import GoToButton from "../goToButton";
import { setMntORders } from "../../store/reducers/mntOrders";
import Database from "../sqliteMode/dataBase";

const db = new Database()
 const MntOdersList = (props)=> {

  useEffect(()=>{
    db.listOrders().then(orders =>{setMntORders(orders)})
  },[])
  
  return (
    <View>
        <View>
            {
              props.mntOrders.map((order,idx) =>{
                return <Text key={idx}>{order.orderNumber}</Text>
              })
            }
        </View>
        <View>
            {/* <Button title="Add new Order" onPress={() => navigation.navigate('Details')}></Button> */}
            <GoToButton title="Add new Order" screenName="MntOrder"></GoToButton>
        </View>
    </View>
  );
}
const mapStateToProps = state => (
  {
      mntOrders: state.mntOrders.mntOrders,
  }
);
const mapDispatchToProps = { setMntORders };
export default connect(mapStateToProps, mapDispatchToProps)(MntOdersList);
// export default MntOdersList;