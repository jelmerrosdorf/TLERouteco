import react from "react"
import reactDom from "react-dom"
import { StyleSheet } from "react-native"

//export the style varibles seperate from the stylesheet? or as an array?
// export const StyleVar = 
// export const placeholderEmail = "Email"
// export const placeholderPassword = "Password"
// export const placeholderName = "Name"
export const MainStyles = StyleSheet.create({
    title:{
        fontSize:30,
        alignSelf: "center"
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
        borderWidth: 1
    },
    image:{
        height:'80%',
        width:'80%',
        alignSelf:'center',
        margin:'10%'
    },

    
})