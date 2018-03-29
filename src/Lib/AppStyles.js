import { StyleSheet, Dimensions } from 'react-native'
import Constants from './Constants'

const { height,width } = Dimensions.get('window')

const AppStyles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    vCenter: {
        justifyContent: 'center'
    },

    vEnd: {
        justifyContent: 'flex-end'
    },

    hCenter: {
        alignItems: 'center'
    },

    hEnd: {
        alignItems: 'flex-end'
    },

    mainContainer: {
        height: height,
        backgroundColor: Constants.Colors.primaryBgColor,
        paddingTop: 20
    }
})

export default AppStyles
