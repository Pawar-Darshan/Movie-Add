import React, { useState } from "react";

export function AddColor() {
    const [color, setColor] = useState("green");
    const styles = {
        fontSize: "24px",
        backgroundColor: color,
    };

    const [colorList, setcolorList] = useState(
        ["orange", "red", "Pink", "green"]
    );
    return (
        <div>
            <div className="add-color">
                <input onChange={(event) => { setColor(event.target.value); }} style={styles}
                    type="text"
                    placeholder="Enter a Color" value={color} />
                <button onClick={() => setcolorList([...colorList, color])}>Add Color</button>
            </div>
            {colorList.map((clr) => (<ColorBox color={clr} />))}
        </div>
    );
}
function ColorBox({ color }) {
    let styles = {
        backgroundColor: color,
        height: "35px",
        width: "300px",
        marginTop: "10px"
    };
    return (
        <div style={styles}>
        </div>
    );
}
