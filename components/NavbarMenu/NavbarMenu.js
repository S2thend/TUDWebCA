import React from "react";


export default class NavbarMenu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            current:"account",
        }
    }


    render(){
        return(
                <nav className={this.props.status=="open"?"menu d-lg-none":"menu d-lg-none d-none"} aria-label="Person settings"  style={{"width":"100vw"}}> 
                    {
                        this.props.links.map(
                            link => <a 
                                        className="menu-item f2" 
                                        href="#url" 
                                        aria-current={link==this.state.current?"page":"false"}
                                        style={ {"text-align": 'center'} }
                                        key={link}
                                    >
                                        {link}
                                    </a>
                        )
                    }
                </nav>
        )
    }
}