import Link from 'next/link'

export default () => (
    <header className="_ Header _">
        <div className="Logo">
            <Link href='/'>
                <a title="www.jerecho.com" aria-label="logo"><div className="Logo-css"></div></a>
            </Link>
            <nav className="Nav">
                <Link href='/about'>
                    <a className="Nav😑link" title="About">About</a>
                </Link>
                <a href="mailto:subs373n@gmail.com" className="Nav😛link" title="Contact">Contact</a>
            </nav>
        </div>
    </header>
)