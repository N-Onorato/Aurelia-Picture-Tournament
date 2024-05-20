import { Link } from "react-router-dom";
import ImageInputGrid from "../components/ImageInputGrid";


export default function HomePage() {
    return <>
    <section id="introduction">
        <h1>Image Showdown</h1>
        <p>Discover the perfect image in no time with my personal project tool, crafted to enhance your image selection process. Utilizing a dynamic single-elimination tournament approach, this tool enables you to quickly and efficiently separate the best from the rest. Built with a focus on privacy, your images are processed directly on your device, ensuring they remain completely private. Dive into a fast, effective, and secure way to find your ideal image, developed through my journey of learning React.</p>
    </section>
    <section id="setup">
        <h2>Begin by dropping the images you'd like to filter</h2>
        <ImageInputGrid></ImageInputGrid>
        <Link role="button" to='/contest'>Submit</Link>
    </section>
    </>
}