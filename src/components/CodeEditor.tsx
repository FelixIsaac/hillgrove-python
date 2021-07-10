import React, { Fragment, useState } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Kbd } from "@chakra-ui/layout";

const CodeEditor = ({ code: initCode }) => {
    const [code, updateCode] = useState(initCode.join('\n'))

    const highlight = (code) => (
        <Highlight {...defaultProps} theme={theme} code={code} language="py">
            {({ tokens, getLineProps, getTokenProps }) => (
                <Fragment>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </Fragment>
            )}
        </Highlight>
    );

    return (
        <Fragment>
            <p style={{ margin: "36px 0 8px 0" }}>
                <strong>Code Editor: </strong>
                <Kbd bg="red.100">Copy your solution from Replit and paste it here.</Kbd>
            </p>
            <Editor
                value={code}
                onValueChange={updateCode}
                highlight={highlight}
                padding={10}
                style={{
                    boxSizing: "border-box",
                    fontFamily: '"Dank Mono", "Fira Code", monospace',
                    ...theme.plain
                }}
                className="container__editor"
            />
        </Fragment>
    );
}

export default CodeEditor;
