import { Developer } from "./developer.model";
import { ExternalLink } from "./external-link.model";
import { Project } from "./project.model";
import { Repository } from "./repository.model";

export class Experience { 
    id: number;
    developer: Developer;
    title: string;
    company: string;
    place: string;
    startDate: Date;
    finishDate: Date;
    isPresent: boolean;
    description: string;
    project: Project;
    repository: Repository;
    extLink: ExternalLink[];
    isActive: boolean;
}
