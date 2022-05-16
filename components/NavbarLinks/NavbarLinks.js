import Link from 'next/link';

export default function NavbarLinks(props){
    return (
        <>
            {
                props.links.map(
                  link => <div className="Header-item f2 d-none d-lg-inline-block" key={link}>
                              <Link href="#" >
                                <a className="Header-link">{link}</a>
                              </Link>
                          </div>
                )
            }
        </>
    )
}