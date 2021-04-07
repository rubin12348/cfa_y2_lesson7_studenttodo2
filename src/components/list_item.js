import '../index.css';
import {FaTrash} from "react-icons/fa";
import React from "react";

/**
 *
 * @param id of list item used as key for component
 * @param checked property used to render checkbox as checked or not checked
 * @param title property of the item used to render title of item
 * @param content property of list item
 * @param onCheckedChange callback used to toggle checked state of the item
 * @param onDelete callback used to remove item from the list
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListItem({id,checked,title,content,onCheckedChange,onDelete}) {
    return (
        <div key={id} data-id={id} className="list-item">
            <div className="list-item-check">
                <label>
                    <input onChange={onCheckedChange}
                           defaultChecked={ checked?"checked":""}
                           type="checkbox"/>
                </label>
            </div>
            <div className="list-item-content">
                <label className="content-title">{title}</label>
                <label className="content-body">{content}</label>
            </div>
            <div className="list-item-action">
                <button className="image-button"
                        onClick={onDelete}>
                    <FaTrash/>
                </button>
            </div>
        </div>);
}