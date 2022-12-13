import styles from './ItemTag.module.css'
import {
    Save, SendOne, Export, Tag
} from "@icon-park/react";

export default function ItemTag({ TagName }: TagType) {

    return (
        <>
            <div className="tag" style={{ marginTop: "4rem", marginBottom: "2rem"}}>
                <h3 className={styles.element}>
                    <Tag theme="outline" size="24" fill="#333" style={{ position: "absolute", left: "1.5rem"}}/>
                    <div className="text">{TagName ? TagName: "这是测试文字"}</div>
                </h3>
            </div>
        </>
    )
}

interface TagType {
    TagName ?: string,
}