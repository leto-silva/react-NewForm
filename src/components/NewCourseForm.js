import React, { Component } from 'react';


class NewCourseForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            image:''
        }
    }


    render(){
        const { props, state } = this;

        return(
            <form className="course-form">
                <label>
                    <span>Nome:</span>
                    <input name="name" value={status.name}/>
                </label>
                <label>
                    <span>Imagem:</span>
                    <input name="image" value={state.image} />
                </label>

            </form> 
        );
    }
}

export default NewCourseForm;