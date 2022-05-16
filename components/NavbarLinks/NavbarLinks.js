import Link from 'next/link';
import Home from '../../pages';

export default function NavbarLinks({links}){
    return (
        <>
            {
                links.map(
                  link => <div className="Header-item f2 d-none d-lg-inline-block" key={link.name}>
                              <Link href={link.value}>
                                <a className="Header-link">{link.name}</a>
                              </Link>
                          </div>
                )
            }
        </>
    )
}