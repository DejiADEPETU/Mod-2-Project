import React from 'react'

export default function searchResult(props) {
    console.log(props.arrayofResult, "from inside of searchResult component")
    return (
        <div>
            {

                props.arrayofResult.map(result => console.log(result))


            }
        </div>
    )
}
