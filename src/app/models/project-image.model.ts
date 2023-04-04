import { Project } from "./project.model";

export class ProjectImage { 
    id: number;
    project: Project;
    image: string;
    altText: string;
    isFeature: boolean;
}