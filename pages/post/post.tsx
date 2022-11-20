import CenterLayout from "../../components/layouts/CenterLayout";
import React, {useState} from "react";
import styles from './post.module.css'
import {
    AlignTextBoth,
    AlignTextCenter,
    AlignTextLeft,
    AlignTextRight,
    Code, H1, H2, LinkOne, ListNumbers, ListTwo, PictureOne, Quote, Save, SendOne,
    TextBold,
    TextItalic,
    TextUnderline, VideoTwo
} from "@icon-park/react";

export default function Post() {
    const [toolName, setToolName] = useState('');

    const handleClick = (event) => {
        let currName = event.currentTarget.className;
        if(toolName === currName) {
            setToolName('');
        }else {
            setToolName(event.currentTarget.className);
        }
    }

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
                    <div className="tools" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "80%", height: "6rem", backgroundColor: "#ffb769", borderRadius: "2rem", paddingLeft: "2rem", margin: "2rem", marginTop: "4rem"}}>
                        <TextBold style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-text-bold' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <TextItalic style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-text-italic' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <TextUnderline style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-text-underline' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <Code style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-code' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <AlignTextLeft style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-align-text-left' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <AlignTextRight style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-align-text-right' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <AlignTextCenter style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-align-text-center' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <AlignTextBoth style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-align-text-both' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <H1 style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-h1' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <H2 style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-h2' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <LinkOne style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-link-one' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <ListNumbers style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-list-numbers' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <ListTwo style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-list-two' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <Quote style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-quote' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <VideoTwo style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-video-two' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                        <PictureOne style={{ margin: "0.6rem"}} theme="outline" size="24" fill={toolName === 'i-icon i-icon-picture-one' ? '#999' : '#333'} onClick={(event) => handleClick(event)}/>
                    </div>
                    <div className="textarea" style={{ width: "80%", flex: 1}}>
                        <div className={styles.contentArea} placeholder="在这里输入内容 ..." contentEditable="true" style={{ height: "100%"}}></div>
                    </div>
                </div>
                <div className="control" style={{ flex: 1, width: "80%", height: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                    <div className="save-button" style={{ width: "10rem", height: "4rem", backgroundColor: "#ffb769", marginRight: "1rem", borderRadius: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Save style={{ marginRight: "1rem"}} theme="outline" size="20" fill="#333"/>
                        <p style={{ margin: 0}}>保存</p>
                    </div>
                    <div className="sent-button" style={{ width: "10rem", height: "4rem", backgroundColor: "#ffb769", marginLeft: "1rem", borderRadius: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
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