import React from 'react';

class AutoTextBox extends React.Component{
    constructor (props){
        super(props);
        this.items=[
            // 'get.from database',
        ];
    }

    render(){
        return(
            <div className ="AutoTextBox">
                <input type="text" placeholder="be inspired: search here   " name="uName" required/>
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        );
    };
};
       
export default AutoTextBox;