import './App.css';
import React from "react"
import { FaTrash } from 'react-icons/fa';
import ListItem from "./components/list_item";
const data = [
    {id:0,title:"Title 1",content:"Content 1 is here this is a simple example",checked:false},
    {id:1,title:"Title 1",content:"Content 1 is here this is a simple example",checked:true},
    {id:2,title:"Title 1",content:"Content 1 is here this is a simple example",checked:true},
    {id:3,title:"Title 1",content:"Content 1 is here this is a simple example",checked:true},
    {id:4,title:"Title 1",content:"Content 1 is here this is a simple example",checked:true}
];

function App() {
    /**
     *  top level state hooks
     */
    const [items,setItems] = React.useState(data);
    const [title,setTitle] = React.useState("");
    const [content,setContent] = React.useState("");

    /**
     * add item function, take data from title and content hooks and update items hook
     */
    const handle_add_item= ()=>{
        const max = 0;// calculate the new id of the item
        const item = {/** add properties to the item  */};
        // update the state for input field, flush their content to ""
        // update state of list, add new items using function
        //  example  old=>[item,...old]
    }

    const delete_item = (id)=>{
        // update state, filter only items with id diffrent from id function
        // takes as argument calling function filter
    }

    const toggle_item = (id)=>{
        setItems((old)=>{
           // update the checked property of the item with id
            // use foreach function of the list to iterate to the list items
                // update toggle property of the item with id toggle_item function takes as argument

            return old;
        });
    }

    // deleting all items just by steting state as an empty list
    const delete_all = (e)=>{
        // setItems(...)
    };

  return (
    <div className="App">
        <section className="App-Header">
            <h3>Todo App</h3>
            <div className="App-Header-Action">
                <button /*onClick={ bind with delete_all function }*/
                        className="btn"
                        style={{"background-color":"red"}}>
                   Clear All
                </button>
            </div>
        </section>
        <section className="form">
            <div className="form-group">
                <div className="form-inline">
                    <label className="form-inline-label">Title</label>
                    <input onChange={e=>setTitle(e.target.value)}
                           value={title}
                           className="form-inline-control"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-inline">
                    <label className="form-inline-label">Content</label>
                    <textarea /** onChange={ bind change function with textarea onChange Property } */
                              /*value={ bind value property to state hook }**/
                              rows="3"
                              className="form-inline-control">
                    </textarea>
                </div>
            </div>
            <div className="form-inline">
                <div className="form-inline-label"></div>
                <button /** bind handel_add_item_function here using onClick={...} **/
                        className="btn form-inline-control"> Add
                </button>
            </div>
        </section>
        <main className="list">
            {
                items?.length?
                    items.map(
                        item=> <ListItem
                            /**
                            * pass item properties to the list item component
                            * make sure to bind toggle_item and delete_item function
                            * to onCheckedChange and onDelete  for example...
                            * onCheckedChange={(e)=>toggle_item(item.id) } }
                            */
                                        />
                        )
                    :
                    <span className="form-group">
                        No Items Added Yet
                    </span>
            }
        </main>
    </div>
  );
}
export default App;
