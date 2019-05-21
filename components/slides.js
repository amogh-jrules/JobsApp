import React , {Component} from 'react';
import {View, Text,ScrollView,Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component{
    renderLastSlide(index){
        if(index=== this.props.data.length -1){
            return(
                <Button
                title = "Onwards"
                raised
                onPress={this.props.onComplete}                 
                buttonStyle={styles.buttonStyle}
                />
            );
        }
    }

    renderSlides(){
        return this.props.data.map((slide, index)=>{
           return( <View key={slide.text} style={[styles.slide,{backgroundColor:slide.color}]}>
               <Text style={styles.slideText}>{slide.text} </Text>
                {this.renderLastSlide(index)}
               </View>
           );
        })
    }
    render(){
        return (
            <ScrollView
            horizontal
            pagingEnabled
            style={{flex:1}}>

            {this.renderSlides()}

            </ScrollView>
        );
    }
}
const styles = {
    slideText:{
           
        fontSize:30,
        color:"white",
        justifyContent:"center",
        marginBottom:15
    },
    slide:{
        flex:1,
        alignItems:'center',
        justifyContent:'center' ,
        width:SCREEN_WIDTH
    },
    buttonStyle:{
       // backgroundColor:"#0288D1",
       // marginTop:15

    }
}
export default Slides;