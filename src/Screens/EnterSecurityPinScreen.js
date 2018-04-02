// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'


// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'
import Circle from '../Components/Circle'
import PinDots from '../Components/PinDots'

const { height, width } = Dimensions.get('window')
const { PanelLabels, Paddings, FontSizes, Colors, BorderRadii } = Constants


export default class CreateSecurityPinScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            headerText: 'Enter your Security Pin',
            completed: false,
            mismatched: false,
            securityPin: '474789'
        }
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    checkPin = (label, index, navigation) => {
        const { securityPin } = this.state
        let checkedPin = (securityPin.substr(index - 1, 1).includes(label) ? true : false)

        if (checkedPin) {
            this.setState({
                completed: true
            })
            this.goToScreen('AnswerSecurityQuestionScreen', navigation)
        } else {
            this.setState({
                mismatched: true,
                headerText: 'Incorrect,\nplease try again.'
            })
        }
    }

    render() {
        const dotIndex = 2
        const { navigation } = this.props
        const { mismatched, headerText } = this.state

        return (
            <View style={AppStyles.mainContainer}>
                {
                    !mismatched &&
                    <SecurityPinHeader
                        navigation={navigation}
                    />
                }
                {
                    mismatched &&
                    <SecurityPinHeader
                        headerType='RESET'
                        navigation={navigation}
                    />   
                }
                <View style={[styles.bodyContainer, AppStyles.hCenter]}>
                    <View style={styles.headerTextArea}>
                        <Text style={styles.headerText}>{headerText}</Text>
                    </View>
                    <View style={styles.dotArea}>
                        <PinDots dotIndex={dotIndex} />
                    </View>
                    <View style={styles.panelArea}>
                    {
                        PanelLabels.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.panel, AppStyles.center]}
                                    onPress={() => this.checkPin(item, dotIndex, navigation)}
                                >
                                    <Text style={styles.panelText}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        padding: Paddings.lP
    },

    headerTextArea: {
        height: 60,
        justifyContent: 'flex-end'
    },

    headerText: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: '600',
        textAlign: 'center'
    },

    dotArea: {
        width: width - 140,
        height: 60
    },

    panelArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width * 4 / 5 - width / 10
    },

    panel: {
        width: width / 5,
        height: width / 5,
        borderRadius: BorderRadii.buttonBR,
        backgroundColor: Colors.darkGreen,
        margin: 5
    },

    panelText: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: '600'
    },
})
