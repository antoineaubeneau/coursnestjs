export declare const startIdentifier = "/*DOC";
export declare const endIdentifier = "*/";
export declare const mdBlankLine = "\n\n";
export declare const mdSeparator: string;
interface Comment {
    text: string;
    line: number | null;
}
export declare function getCommentsFromText(text: string): Comment[];
export declare function createMarkdownFromComments(comments: Comment[]): string;
export declare const generateDocumentation: (text: string) => string;
export {};
