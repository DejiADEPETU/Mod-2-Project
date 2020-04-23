import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Footer color="grey">
                    <p className="footer-copyright mb-0">
                        &copy; {new Date().getFullYear()} Copyright
                    </p>
                </Footer>
            </div>
        )
    }
}
