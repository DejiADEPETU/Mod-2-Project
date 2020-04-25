import React from 'react';

class AutoTextBox extends React.Component{
    constructor (props){
        super(props);
        this.items=[
            'dsf',
            'fdfs',
            'gerg',
            'ege',
            'trheh',
        ];
      
        this.state={
            suggestions:[],
            text:'',
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
            if (value.length > 0){
                const regex = new RegExp(`^${value}`, 'i');
                suggestions = this.items.sort().filter(v => regex.test(v));
            }
        this.setState(()=> ({ suggestions, text: value }));
    }

    suggestionSelected (value) {
        this.setState(()=>({
            text: value,
            suggestions: [],
        }))
    }


    renderSuggestions(){
        const{suggestions}=this.state;
        if (suggestions.length ===0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item) => <li onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render(){
        const {text} = this.state;
        return(
            <div className ="AutoTextBox">
                <input value={text} onChange={this.OnTextChanged} type="text" placeholder=" be inspired: search here   " style={portableAutoTextStyle}/>
                {this.renderSuggestions()}
            </div>
        );
    };
};
       

const portableAutoTextStyle = {   //The AutoTextBox  is styled here (and not in SASS) in order to maintain portability & reuseability of the AutoTextBoxComponent

    background: 'lightgrey',
    border: 'dash',
    padding: '5px 15% 8px 10% ',
    // cursor: 'pointer',
    float: 'center'
}




export default AutoTextBox;