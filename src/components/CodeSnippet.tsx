import React from 'react';
import { Pre, Line, LineNo, LineContent } from "./CodeStyles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

type CodeSnippetProps = {
    code: string | string[];
    preventCopy?: boolean;
}

const CodeSnippet = ({ code, preventCopy = true }: CodeSnippetProps) => {
    if (Array.isArray(code)) code = code.join('\n')

    return (
        <Highlight {...defaultProps} theme={theme} code={code} language="python">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            <LineContent preventCopy={preventCopy}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
}

export default CodeSnippet;
