import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {props.boxes.map((box, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            backgroundColor: box.color,
                            height: "100px",
                            width: "100px",
                            display: "inline-block",
                            verticalAlign: "top",
                            textDecoration: box.status ? "line-through" : "none"
                        }}>
                        {box.color}
                        <input type="checkbox" 
                                checked={box.status}
                                onChange={(e) => props.updateBox(e, i)}
                            />
                        <button onClick={(e) => {props.deleteBox(e, i)}}>delete</button>
                    </div>
                )
            })}
        </fieldset>
    )
}

export default Display