import React from 'react';
import './ExploreContainer.css';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    //add "props"
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        })
    }

    render(){
        return(
            <tbody>
                {
                    this.state.users.map(
                        user =>
                        <tr key= {user.id}>
                            <td>{user.real_name}</td>
                            <td>{user.country}</td>
                        </tr>
                    )
                }
            </tbody>
        )
    }
}

export default UserComponent;