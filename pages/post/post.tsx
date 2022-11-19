import CenterLayout from "../../components/layouts/CenterLayout";
import React from "react";
import Center from "../Center/center";

export default function Post() {
    return (
        <div className="container">
            <h1>hello</h1>
        </div>
    )
}

Post.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <CenterLayout>{ page }</CenterLayout>
    )
}