import styles from './ControlItem.module.css'
import { useState, useEffect } from "react";
import {Router, useRouter} from "next/router";

function ControlItem({context, itemKey, currIndex, handleIndex, functionLink}: ItemProps) {
    const [clickItem, setClickItem] = useState(false);
    const router = useRouter();


    useEffect(() => {
        if(itemKey === currIndex) {
            setClickItem(true);
        }else {
            setClickItem(false);
        }
    }, [currIndex]);

    const handleClick = () => {
        handleIndex(itemKey);
        if(functionLink) {
            router.push(functionLink);
        }
    }

    return (
        <>
            <div className={`item ${ clickItem ? styles.change : styles.inactive }`} style={{ flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "white", borderRadius: "3rem 0 0 3rem", marginBottom: "2.5rem", cursor: "default"}} onClick={handleClick}>
                {context}
            </div>
        </>
    )
}

interface ItemProps {
    context: string,
    itemKey: string,
    currIndex: string,
    handleIndex: any,
    functionLink?: string,
}

export default ControlItem;