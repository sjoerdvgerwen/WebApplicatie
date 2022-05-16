import { AlertTitle } from '@mui/material'
import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         Id: '',
         Name: '',
         Latitude: '',
         Longitude: '',
         Address: '',
         Zipcode: '',
         City: '',
         IsActive: Boolean,
         Price: '',
         Photo: ''    
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://localhost:5001/api/hydrogen', this.state)
        .then(response => {
        })
        .catch(error => {
            console.log(error)
        })
    }
    

    render() {
        const {Id, Name, Latitude, Longitude, Address, Zipcode, City, IsActive, Price, Photo} = this.state 
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="Id" value={Id} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="Name" value={Name} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
