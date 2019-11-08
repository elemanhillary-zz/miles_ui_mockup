import React, { Component } from 'react'
import LocationsCard from '../components/locationsCard'

class PickUpScreen extends Component {
    render() {
        return (
            <>
                <LocationsCard
                    cardTitle="Pickup location"
                    titleColor="#57e6b7"
                />
            </>
        )
    }
}

PickUpScreen.navigationOptions = {
    header: null,
}

export default PickUpScreen;