import { StyleSheet,Dimensions } from "react-native";
import Colors from '../../Theme/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../../Theme/Fonts";


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:'#8bc0d5',
        // height: '100%',
    
    },
    ImageContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'74%',
        // marginHorizontal:'15%',
        // marginLeft: '3%',
        // position: 'absolute',
        // top: '80%'
    },
    ImageStyling:{
        width:110,
        height:30
    },
    lineStyle:{
        width:88, 
        height: 2, 
        backgroundColor: 'white'
    },
    lineView:{
        flexDirection: 'row', 
        alignItems: 'center',
        margin:'2%'
    },
    andText:
    {
        fontSize:32,
        width: 50, 
        textAlign: 'center', 
        color:'white',
        fontFamily: Fonts.Poppins,

        // fontWeight:'bold'
    },
    leftImageStyle:{
        width: '100%', 
        height: '55%', 
        marginTop: 10
    },
    rightImageStyle:{
        width: '100%',
        height: '40%', 
        marginTop: "6%"
    },
    OriginStyling:{
        marginTop: '63%',
        marginBottom: '19%',
        zIndex:1,
        // flex:1,
        // marginTop:'50%',
        // height:'60'
        alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'black'
    },
    swimmingText:{
        color: Colors.WHITE,
        fontSize: 32,
        fontWeight:'600',
        fontFamily: Fonts.Poppins,
        lineHeight:48,
    },
    FromText:{
        color: Colors.WHITE,
        fontSize: 22,
        fontWeight:"bold",
        fontFamily: Fonts.Montserrat,
        textAlignVertical:"top",
        lineHeight:21.94,
        letterSpacing:-.3
    },
    LogoText:{
        color: Colors.WHITE,
        fontSize: 25,
        fontWeight:'600',
        fontFamily: Fonts.Poppins,
    },
    SvgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
})
export default styles;