export interface TextDocContent {
    title: string;
    content: TextDocContentType[];
}

export type TextDocContentType = TextDocTextType | TextDocListType;

export interface TextDocTextType {
    type: "text" | "subtitle";
    text: string;
}

export interface TextDocListType {
    type: "list";
    text: string[];
}
