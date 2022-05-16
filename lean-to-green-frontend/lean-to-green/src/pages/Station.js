import react from 'react'
import Header from '../components/Header/Header'
import StationInfo from '../components/StationInfo/StationInfo'

function Station(data) {

    return (
        <div>
            <Header/>
            <StationInfo data={data}/>
        </div>
    )
}

export default Station
