import { MouseEventHandler } from "react";

type ImageItemProps = {
    id: string;
    src: string;
    showHeader?: boolean;
    onClick: MouseEventHandler
  };

export default function ImageItem(props: ImageItemProps) {
    return <div id={props.id} key={props.id} className="image-item">
        {props.showHeader && <p>{props.id}</p>}
        <img src={props.src} />
        <button role="button" className="image-item-btn" onClick={props.onClick}></button>
    </div>
}