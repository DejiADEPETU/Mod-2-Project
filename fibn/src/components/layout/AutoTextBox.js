import React from 'react';

class AutoTextBox extends React.Component{
    constructor (props){
        super(props);
        this.items=[
            'kyulk snyt',
            'SFtnyt',
            'wagrnyt',
            'y8ott',
            'BXWFf 6 snyt',
            'sdgdsnyt'
        ];
      
        this.state={
            suggestions:[],
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.items.sort().filter(v=>regex.test(v));
        }
        this.setState(()=> ({suggestions}));
    }

    renderSugeestions(){
        const{suggestions}=this.state;
        if (suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item) => <li>{item}</li>)}
            </ul>
        )

    }


    render(){
        return(
            <div className ="AutoTextBox">
                <input onChange={this.OnTextChanged} type="text" placeholder="be inspired: search here   " name="uName" required/>
                {this.renderSuggestions()}
            </div>
        );
    };
};
       
export default AutoTextBox;