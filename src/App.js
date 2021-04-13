import './App.css';
import React from "react"
import {FaTrash} from 'react-icons/fa';
import ListItem from "./components/list_item";

/**
 *
 * @type {({checked: boolean, id: number, title: string, content: string})[]}
 * @property checked : mapped to a checkbox, defines if an item is checked or not
 * @property title : mapped to a text, renders the title of item
 * @property content mapped to a text, renders the content of item ,
 * @property id , is used as key and is unique id of the item, is used also to find item and make specific updates on it like toggling and checking
 */
const data = [
    {id: 0, title: "Title 1", content: "Content 1 is here this is a simple example", checked: false},
    {id: 1, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true},
    {id: 2, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true},
    {id: 3, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true},
    {id: 4, title: "Title 1", content: "Content 1 is here this is a simple example", checked: true}
];

function App() {
    /**
     *  top level state hooks
     */
    const [items, setItems] = React.useState(data);
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    /**
     * add item function, take data from title and content hooks and update items hook
     */
        // todo 2 complete the handle_add_item function
        // first calculate the id of the new item
        // then read data from the title and content hook that user has entered
        // use that data to construct a new item object {title:"title",content:"content",checked:false,id:232}
        // update state, set the state to a new list that has all old object but also the new object
        // you can use a function to update state instead of a value
        // old=>[newItem,...old];


        {items.map(
            item => (
                <div key={item.id} className="list-item">
                    <input onChange={() => toggle_item(item.id)}
                        defaultChecked={item.checked ? "checked" : ""}
                        type="checkbox"/>
                    <label className="list-item-content">
                        {item.note}
                    </label>
                </div>
        ),
        )} 
    const handle_add_item = () => {
        const newId = Math.random();
        const newItem = {id,note:"Content 1 is here this is a simple example",checked:true};
        setItems(old=>[newItem,...old]);


        setTitle("");
        // do the sime also for the content hook as is done for the title one
        //setItems(/** you can use a function to update the state */);
    }

    
    const delete_item = (id) => {
        
        setItems(old=>old.filter(
            item=>item.id!=id

        ));
    }

    // todo 5 complete the toggle item function
    // this function changes the checked property of the object from true to  false and reverse
    // this corresponds to the checkbox state on ui, once you change this value you update the state
    // you can use foreach function to loop through elements and update the one with that specific id

    const toggle_item = (id) => {
        setItems((old) => {
            const newList = [...old];
            for(let i=0;i<newList.length;i++){
                if(newList[i].id===id){
                    newList[i] = {...newList[i],checked: !newList[i].checked}
                    break;
                }
            }
            return newList;
        });
    }

    // todo 6 complete the delete all function
    const delete_all = (e) => {
        window.alert("deleting items");
        // setItems(...)
    };

    return (
        <div className="App">
            <section className="App-Header">
                <h3> App</h3>
                <div className="App-Header-Action">
                    <button onClick={ delete_all }
                        className="btn"
                        style={{"background-color": "red"}}>
                        Clear All
                    </button>
                
                </div>
            </section>
            <section className="form">
                <div className="form-group">
                    <div className="form-inline">
                        <label className="form-inline-label">Title</label>
                        {/** check example below for todo 1 */}
                        <input onChange={e => setTitle(e.target.value)}
                            value={title}
                            className="form-inline-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-inline">
                        <label className="form-inline-label">Content</label>
                        {/*  //Todo 1 bind the StateHook to text area, similar as upper input */}
                        <textarea /** onChange={  } */
                            /*value={ }**/
                            rows="3"
                            className="form-inline-control">
                    </textarea>
                    </div>
                </div>
                <div className="form-inline">
                    <div className="form-inline-label"></div>
                    <button onClick={handle_add_item}>
                        Add
                    </button>

                </div>
            </section>
            <main className="list">
                {
                    /** //Todo 7 (optional), Can you use conditional rendering to display a message
                     *  when no item is in the items list?  **/
                    items.map(
                        item => (
                            // todo 8  can you create create a new component ListItem and use that component instead of using
                            // jsx here on map function? you can pass item props and specific functions as props.
                            <div key={item.id} className="list-item">
                                <div className="list-item-check">
                                    <label>
                                        <input onChange={()=>toggle_item(item.id)}
                                            defaultChecked={item.checked ? "checked" : ""}
                                            type="checkbox"/>
                                    </label>
                                </div>
                                <div className="list-item-content">
                                    <label className="content-title">{item.title}</label>
                                    <label className="content-body">{item.content}</label>
                                </div>
                                <div className="list-item-action">
                                    <button className="image-button"
                                            onClick={(e)=>delete_item(item.id)}>
                                        <FaTrash/>
                                    </button>
                                </div>
                            </div>)
                    )
                }
            </main>
        </div>
    );
}

export default App;
