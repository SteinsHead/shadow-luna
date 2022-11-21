import CenterLayout from "../../components/layouts/CenterLayout";
import React from "react";
import styles from './post.module.css'
import EditBarTool from "../../components/fragment/editBarTool";
import {
    Save, SendOne,
} from "@icon-park/react";

export default function Post() {

    return (
        <>
            <div className="container" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
                <div className="page-title" style={{ marginTop: "3rem", fontSize: "26px", fontWeight: 550}}>
                    <p>博文写作</p>
                </div>
                <div className="title" style={{ flex: 1, width: "80%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="textarea" style={{ width: "100%"}}>
                        <div className={styles.titleArea} placeholder="在这里输入标题 ..." contentEditable="true" style={{ height: "80%"}}></div>
                    </div>
                </div>
                <div className="content" style={{ flex: 6, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%"}}>
                    <EditBarTool />
                    <div className="textarea" style={{ width: "80%", flex: 1}}>
                        <div className={styles.contentArea} placeholder="在这里输入内容 ..." contentEditable="true" style={{ height: "100%"}}></div>
                    </div>
                </div>
                <div className="control" style={{ flex: 1, width: "80%", height: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                    <div className={ styles.saveButton }>
                        <Save style={{ marginRight: "1rem"}} theme="outline" size="20" fill="#333"/>
                        <p style={{ margin: 0}}>保存</p>
                    </div>
                    <div className={ styles.sentButton }>
                        <SendOne style={{ marginRight: "1rem"}} theme="outline" size="20" fill="#333"/>
                        <p style={{ margin: 0}}>发送</p>
                    </div>
                </div>
            </div>
        </>
    )
}

Post.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <CenterLayout>{ page }</CenterLayout>
    )
}