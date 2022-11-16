import styles from './ControlItem.module.css'
import { useState } from "react";

function ControlItem({context}: ItemProps) {
    const [clickItem, setClickItem] = useState(false);

    const handleClick = () => {
        setClickItem(!clickItem);
    }

    return (
        <>
            <div className={`item ${ clickItem ? styles.change : styles.inactive }`} style={{ flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "24px 0 0 24px", marginBottom: "2.5rem"}} onClick={handleClick}>
                {context}
            </div>
        </>
    )
}

interface ItemProps {
    context: string
}

export default ControlItem;