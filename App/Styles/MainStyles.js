import react from "react"
import reactDom from "react-dom"
import { StyleSheet } from "react-native"

// export the style varibles seperate from the stylesheet? or as an array?
// export const StyleVar=[
//      placeholderEmail = "Email",
//      placeholderPassword = "Password",
//      placeholderName = "Name"
// ]
// module.exports = StyleVar;

export const MainStyles = StyleSheet.create({
    title:{
        fontSize:30,
        alignSelf: "center",
        color:"white"
    },
    button:{
        backgroundColor: "green",
        height:50,
        width:'70%',
        alignSelf: "center",
        justifyContent:"center"
    },
    buttonText:{
        alignSelf:"center",
        color:"white"
    },
    TextInputBox:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor:"white",
        opacity: 0.5
    },
    image:{
        height:'80%',
        width:'80%',
        alignSelf:'center',
        margin:'10%'
    },
    imageBackground:{
        flex: 1,
        justifyContent: "center"
    },
    container:{
        flex:1,
    },
    mapContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

    
})