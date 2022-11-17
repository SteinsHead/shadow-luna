import styles from './ControlItem.module.css'
import { useState, useEffect } from "react";

function ControlItem({context, itemKey, currIndex, handleIndex}: ItemProps) {
    const [clickItem, setClickItem] = useState(false);

    useEffect(() => {
        if(itemKey === currIndex) {
            setClickItem(true);
        }else {
            setClickItem(false);
        }
    }, [currIndex]);

    return (
        <>
            <div className={`item ${ clickItem ? styles.change : styles.inactive }`} style={{ flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "3rem 0 0 3rem", marginBottom: "2.5rem"}} onClick={() => handleIndex(itemKey)}>
                {context}
            </div>
        </>
    )
}

interface ItemProps {
    context: string,
    itemKey: string,
    currIndex: string,
    handleIndex: any

}

export default ControlItem;