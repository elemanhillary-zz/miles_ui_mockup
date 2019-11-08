import React, { Component } from 'react'
import LocationsCard from '../components/locationsCard'

class DropOffScreen extends Component {
    render() {
        return (
            <>
                <LocationsCard
                    cardTitle="Drop off location"
                    titleColor="#f64955"
                />
            </>
        )
    }
}

DropOffScreen.navigationOptions = {
    header: null,
}

export default DropOffScreen;