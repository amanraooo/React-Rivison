import React, { useState } from 'react'

const Todo_App_Prac = () => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('')
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedText, setEditedText] = useState('')

    const addItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem])
            setNewItem('')
        }
    }

    const deleteItems = (index) => {
        setItems(items.filter((x, i) => i !== index))
    }

    const edit = (index) => {
        setEditingIndex(index);
        setEditedText(items[index]);
    }

    const saveItem = () => {
        const updatedItems = [...items];
        updatedItems[editingIndex] = editedText;
        setItems(updatedItems);
        setEditingIndex(null);
        setEditedText('')
    }
    return (
        <div>
            <h1>ToDo App</h1>
            <input
                value={newItem}
                placeholder='add item'
                onChange={(e) => setNewItem(e.target.value)}
                type="text" />

            <button onClick={addItem}>Add </button>

            <ul>
                {
                    items.map((item, i) => (
                        <li key={i}>
                            {
                                editingIndex === i ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editedText}
                                            placeholder="edit"
                                            onChange={(e) => setEditedText(e.target.value)}
                                        />
                                        <button onClick={saveItem} disabled={editedText.trim() === ''}>Save</button>

                                    </>
                                ) : (
                                    <>
                                        {item}
                                        <button onClick={() => edit(i)}>edit</button>
                                        <button onClick={() => deleteItems(i)}>❌</button>
                                    </>
                                )

                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo_App_Prac
