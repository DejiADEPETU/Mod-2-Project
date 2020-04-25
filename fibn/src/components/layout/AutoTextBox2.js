import React from 'react'

export default function AutoTextBox2() {
    return (
        <div>
            {//////////



$(() => {
    $('form').on('submit', (event)=>{
        event.preventDefault();

        const userInput = $('input[type="text"]').val(); // (10)
 
        let response = null
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
            type: "GET",
            data: {
              "$limit" : 100,
              "$$app_token" : "GK6bBl6WPG94rv04QvIaCVM9D"
            }
        }).done(function(data) {
          console.log("Retrieved " + data.length + " records from the dataset!");
          response = data;
        });
 
        // $.ajax({            // url : "https://data.cityofnewyork.us/resource/erm2-nwe9.json",              // }).then(             // (data)=> {

// const boroughButtons = document.getElementsByClassName("buttons");
        
        cx=null;      // if (userInput <= 0 or userInput == NAN){userInput = 10};
        while (cx < userInput){

            var button = document.createElement('input');
            button.setAttribute('type', 'submit');
            button.setAttribute('ID', 'btnSendMailClone');
            button.setAttribute('value', 'WHAT DID THE POLICE DO?');
            button.setAttribute('onclick', 'btnSendMail_Click()');
            button.setAttribute('form', 'myform');
            document.body.appendChild(button);
            button.setAttribute("class", "btn btn-primary");
            $('#button').addClass('myClass');
            $('#btnSendMailClone').css("margin-right", "100px")
            $('#btnSendMailClone').css("width", "98");

            function btnSendMail_Click() {
                console.log("WHAT DID THE POLICE DO?");
                $('#nypd').html(data.Agency);   //GET DATA
                $('#complaints').html(data.complaints);
                $('#latitude').html(data.Year);
                $('#longitude').html(data.Rated);
                $('#address').html(data.Rated);
            }

        cx++
        }
    });

});


            {/////////////
        </div>
    )
}

















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
    float: 'center'
}




export default AutoTextBox;