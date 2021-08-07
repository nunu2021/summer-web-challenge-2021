import React from 'react';
import { mentorsRequest } from '../Requests';
import Mentor from './mentor';
import'./../style/style.css'


class MentorPage extends React.Component{
    constructor(props) {
        super(props)
        this.updateState = this.updateState.bind(this)

        this.state = {
            mentors: []

        }

    }
// function for updating state variables
    updateState(key, val){
        this.state[key] = val;
        this.setState(this.state)
    }

    componentDidMount(){
        mentorsRequest('/upload/blobstore/mentors/', 'GET', {}, d => {
            this.updateState('mentors', d.data)
        })
    }

    
    render(){

        var mentors = []
        var key = 0

        var mentorList = this.state.mentors
        console.log(mentorList)
        
        mentorList.map(c => {
            mentors.push(<Mentor description={c.description} firstName={c.firstName} lastName={c.lastName} profile={c.profile} key={key}></Mentor>)
            key+= 1;
        })


        return(
            <div className='mentor-page' style={{height:window.innerHeight}}>
                {mentors}
            </div>
        );
    }
}

export default MentorPage
