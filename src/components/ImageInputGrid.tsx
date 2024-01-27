import { DragEvent, DragEventHandler, useState } from "react";



export default function ImageInputGrid() {
    const [source, setSource] = useState()

    const handleDragover: DragEventHandler = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    
        console.log(e.dataTransfer.getData("image"))
    }
    
    const handleDrop: DragEventHandler = async (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    
        const files = e.dataTransfer.files
        const reader = new FileReader()
        reader.onload = () => {
            const result = reader.result;
            console.log('File reader result:', result); // Check if this logs correctly
            setSource(typeof result === "string" ? result : "");
          };
        console.log(files);
        const file = files.item(0)
        if(file != null) {
            reader.readAsDataURL(file);
        }
    
        
    }

    return <form role="list" onDragOver={handleDragover} onDrop={handleDrop}>
        <img src={source} />
    </form>

}