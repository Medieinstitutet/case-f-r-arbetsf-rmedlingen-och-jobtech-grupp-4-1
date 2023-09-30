export interface ApiResponse {
    title: string;
    variables: Variable[];
}

interface Variable {
    code: string;
    text: string;
    values: string[];
    valueTexts: string[];
    time?: boolean;
}
