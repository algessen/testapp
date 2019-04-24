import React, { Component } from 'react';
import * as monaco from 'monaco-editor';


export default class MonacoEditor extends Component {

    componentDidMount() {
        this.initEditor();
    }

    componentWillUnmount() {
        this.destroyEditor();
    }

    initEditor() {
        monaco.editor.create(document.getElementById("container"), {
            value: "function hello() {\n\talert('Hello world!');\n}",
            language: "javascript"
        });
    }

    destroyEditor() {
        if (this.editor) {
            this.editor.dispose();
        }
    }

    render() {
        return (
            <div
                style={{height: '300px', width: '400px'}}
                id='container'
            />
        );
    }
}