import { Developer } from "./developer.model";

export class Language {
    id: number;
    developer: Developer;
    title: string;
    proficiency: number;
    isActive: boolean;
}