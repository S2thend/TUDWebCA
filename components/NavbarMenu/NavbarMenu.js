import { useRouter } from 'next/router'
import Link from 'next/link';

export default function NavbarMenu (props){
    
    
    const router = useRouter()

        return(
                <nav className={props.status=="open"?"menu d-lg-none":"menu d-lg-none d-none"} aria-label="Person settings"  style={{"width":"100vw"}}> 
                    {
                        props.links.map(
                            link => <Link href={link.value} key={link.name}>
                                        <a 
                                            className="menu-item f2" 
                                            aria-current={router.pathname==link.value?"page":"false"}
                                            style={ {textAlign: 'center'} }
                                        >
                                            {link.name}
                                        </a>
                                    </Link>
                        )
                    }
                </nav>
        )

}