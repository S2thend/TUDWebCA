export default function NavbarLinks(props){
    return (
        <div>
            {
                props.links.map(
                  link => <div className="Header-item f2">
                              <Link href="#" >
                                <a className="Header-link">{link}</a>
                              </Link>
                          </div>
                )
            }
        </div>
    )
}