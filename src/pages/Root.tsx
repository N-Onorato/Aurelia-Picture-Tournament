import { Outlet, Link } from "react-router-dom";
import { ImageProvider } from "../ImageContext";



export default function Root() {
    return <main>
        <ImageProvider>
            <nav>
                <Link to={''}>Home</Link>
                <Link to={'contest'}>Contest Page</Link>
                <Link to={'results'}>Results Page</Link>
            <Outlet />
            </nav>
        </ImageProvider>
    </main>
}