import { Outlet, Link } from "react-router-dom";



export default function Root() {
    return <main>
        <nav>
            <Link to={''}>Home</Link>
            <Link to={'contest'}>Contest Page</Link>
            <Link to={'results'}>Results Page</Link>
        <Outlet />
        </nav>
    </main>
}