import React, { Component } from 'react'
import './Github.css'


class Github extends Component {
    render() {
        return (
            <div>
                <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github"/>
                <form>
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <button type="submit">Look Up Github User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Github