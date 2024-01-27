import { DragEvent, DragEventHandler, useState, useTransition } from "react";
import ImageItem from "./ImageItem";

type Image = {
    id: string
    dataUrl: string
}

type FileError = {
    fileName: String
    error: String
}

export default function ImageInputGrid(props) {
    const [isLoading, startLoading] = useTransition()
    const [images, setImages] = useState<Array<Image>>([])
    
    const handleDrop: DragEventHandler = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    
        const files: FileList = e.dataTransfer.files
        let images: Array<Image>;
        let failedImages: Array<FileError>;
        startLoading(() => {
        [images, failedImages] = parseAndValidateFiles(files)
        console.log("Failed to load these dropped files", failedImages)
        setImages(images)
        });
    }

    const removeImageHandler = (id: string) => {
        console.log("Deleting image with id: " + id)
        setImages(images.filter((image: Image) => image.id !== id))
    }

    const handleDragOver: DragEventHandler = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    return <form className="image-items" role="list" onDrop={handleDrop} onDragOver={handleDragOver}>
    {images.map((image: Image) => (
        <ImageItem
            src={image.dataUrl}
            id={image.id}
            key={image.id}
            onClick={() => removeImageHandler(image.id)}
        />
        ))}
  </form>

}

function parseAndValidateFiles(files: FileList): [Image[], FileError[]] {
    const validImages: Image[] = [];
    const fileErrors: FileError[] = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name.toLowerCase();
        const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']; // Add more valid extensions if needed

        if (validExtensions.some(ext => fileName.endsWith(ext))) {
            // It's a valid image file
            const image: Image = {
                id: String(validImages.length),
                dataUrl: URL.createObjectURL(file),
            };
            validImages.push(image);
        } else {
            // It's not a valid image file
            const error: FileError = {
                fileName: file.name,
                error: 'Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.',
            };
            fileErrors.push(error);
        }
    }

    return [validImages, fileErrors];
}