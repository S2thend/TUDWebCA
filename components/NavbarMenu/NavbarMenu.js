import { useRouter } from 'next/router'


export default function NavbarMenu (props){
    
    
    const router = useRouter()
    console.log(router.pathname)



        return(
                <nav className={props.status=="open"?"menu d-lg-none":"menu d-lg-none d-none"} aria-label="Person settings"  style={{"width":"100vw"}}> 
                    {
                        props.links.map(
                            link => <a 
                                        className="menu-item f2" 
                                        href={link.value}
                                        aria-current={router.pathname==link.value?"page":"false"}
                                        style={ {textAlign: 'center'} }
                                        key={link.name}
                                    >
                                        {link.name}
                                    </a>
                        )
                    }
                </nav>
        )

}