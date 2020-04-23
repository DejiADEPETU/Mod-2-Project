import React, { createFactory } from 'react';

function SearchBox () {
    // state = {
    //     search:""
    //   };

    onchange = e => {
        this.setState({search: e.target.value});
    };

    // render(){ 
    //     const {search} = this.state;
        return (
            <center>
            {/*  
              <div className ="SearchR">
                    <Input/>
                        label=" Search Critaria Goes Here"
                        icon=" search"
                        onChange={this.onchange}
                    />
                </div>
            */}
            </center>
          );
    // }
}

export default SearchBox;