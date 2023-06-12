import Link from 'next/link'

const navbarStyles = {
    width: '100%',
    height: '75px', 
    borderBottom: '1px solid #fff'
}

export default function Navbar() {
    return (
        <>
            <div className="navbar" style={navbarStyles}>
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/about">About Us</Link>
            </div> 
        </>
    )
}