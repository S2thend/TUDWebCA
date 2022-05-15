import React from "react";


export default class NavbarMenu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            current:"account"
        }
    }


    render(){
        return(
                <nav className="menu" aria-label="Person settings">
                    {
                        this.props.links.map(
                            link => <a 
                                        className="menu-item" 
                                        href="#url" 
                                        aria-current={link==this.state.current?"page":"false"}
                                    >
                                        {link}
                                    </a>
                        )
                    }
                </nav>
        )
    }
}