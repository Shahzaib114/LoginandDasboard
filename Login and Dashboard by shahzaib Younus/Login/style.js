import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#8bc0d5',
    },
    lineStyle: {
        width: 88,
        height: 3,
        backgroundColor: 'white'
    },
    invalidPassView:{
       width:'80%',alignSelf:'center',padding:'1%',borderRadius:5
    },
    invalidLoginView:{
       width:'80%',alignSelf:'center',borderRadius:5,
    },
    invalidPassText:{
        fontSize:15,textAlign:'center',color:'red'
    },
    bottomImageView:{
        width: '100%', 
        paddingVertical: '15%'
    },
    leftImageStyle:{
        width: '100%', 
        height: '50%', 
            },
    rightImageStyle:{
        width: '100%',
        height: '40%', 
        marginTop: "4%"
    },
    lineView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '2%'
    },
    swimmingText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '600',
        lineHeight: 48,
    },
    LogoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign:'center'
    },
    andText:
    {
        fontSize: 32,
        width: 50,
        textAlign: 'center',
        color: 'white',
       
    },
    ImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '24%',


    },
    circle65:{
        height: 18, width: 18, marginLeft: 85, marginTop: 55
        },
    
    circle57:{
        height: 28, width: 28, marginLeft: 136, marginTop: 24,
    },
    
    circle59:{
        height: 37, width: 37, marginLeft: 280, marginTop: 7,
    },
    
    circle56:{
        height: 28, width: 28,marginLeft:-70,marginTop:-25
    },
    
    circle58:{
        height: 37, width: 37, marginLeft: 55, 
    },
    
    circle64:{
        height: 18, width: 18,marginLeft:235,marginTop:35
    },
    
    circle63:{
        height: 28, width: 28,marginTop:5
    },
    
    circle61:{
        height: 37, width: 37, marginLeft: 180, marginTop: 40,
    },
    
    circle60:{
        height: 38, width: 28,marginTop:5,marginLeft:300
    },
    
    circle62:{
        height: 26, width: 26,marginLeft:-30,marginTop:-35
    },
    
    ImageStyling: {
        // width: wp('62%'),
        // height: hp('11%'),
        borderRadius: 10,
        marginBottom: '2%'
    },
    BodySection: {
        marginTop: '25%',
        marginHorizontal: '10%',
        // backgroundColor:'black'
    },
    HeadingText: {
        color: 'white',
        fontSize: 17,
    },
    TextInputSection: {
        marginTop: '1%',
    },
    facebooklogo:{
        backgroundColor: '#8bc0d5', 
        borderRadius: 5, 
        borderColor: 'white',
        borderWidth: 2, 
        textAlign: 'center',
        alignContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        textAlignVertical: 'center' 
    },
    appleLogo:{
        backgroundColor: '#8bc0d5', 
        borderRadius: 5, 
        alignSelf: 'center', 
        padding: 8, 
        borderColor: 'white', 
        borderWidth: 2, 
        textAlign: 'center'
    },
    orLogInWith:{
        width: '90%', 
        justifyContent: "space-around", 
        alignItems: 'center', 
        margin: '5%'
    },
    logosView:{
        flexDirection: 'row', justifyContent: 'space-around', width: '90%', margin: '5%'
    },
   facebookTouch:{
    justifyContent: 'center', alignItems: 'center', alignContent: 'center'
   },
   AppleTouch:{

   },
   googleTouch:{

   },
    googleLogo:{
        backgroundColor: '#8bc0d5', 
        borderRadius: 5, 
        borderColor: 'white', 
        borderWidth: 2, 
        textAlign: 'center', 
        alignContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        textAlignVertical: 'center'
    },
    TextInputField: {
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        marginTop: '5%',
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#e49f3a',
        borderRadius: 15
    },
    PlaceholderStyling: {
        fontSize: 14,
        color: 'white',
        paddingHorizontal: 10,
    },
    ForgotPasswordSection: {
        alignItems: 'flex-end',
        marginHorizontal: '4%',
        textDecorationLine: 'underline',
        marginTop: '4%'
    },
    ForgotPasswordText: {
        color: 'white',
        fontSize: 13,
        borderBottomWidth: 1,
        borderBottomColor:  'white',
    },
    ButtonComponentStyling: {
        backgroundColor:  'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:  'white',
        padding: 15,
        elevation: 5,
        shadowColor:  'white',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 0.91,
        shadowRadius: 5,
    },
    ButtonSection: {
        marginTop: '10%',
        // marginBottom: '5%'
    },
    ButtonText: {
        color:  'red',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'NunitoSans-Bold',
    },
})
export default styles