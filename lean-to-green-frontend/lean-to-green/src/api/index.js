import axios from 'axios';

export const GetMarkerDataAxios = async (type) => {
    try {
        console.log(type);
        let res = await axios.get(`https://localhost:5001/api/${type}`);
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const GetStationDetails = async (type, id) => {
    try {
        let res = await axios.get(`https://localhost:5001/api/${type}/GetStation/${id}`);
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

    export const GetComments = async (id) => {
        try {
            let res = await axios.get(`https://localhost:5001/api/Comment/StationComments/${id}`);
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    export const GetUserData = async (id) => {
        try {
            let res = await axios.get(`https://localhost:5001/api/Comment/StationComments/${id}`);
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    export const getPromission = async (id) => {
        try {
            let res = await axios.get(`https://localhost:5001/api/Comment/StationComments/${id}`);
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }


    


