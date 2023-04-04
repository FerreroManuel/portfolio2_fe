import { Developer } from "./developer.model";
import { ExternalLink } from "./external-link.model";
import { ProjectCategory } from "./project-category.model";
import { ProjectImage } from "./project-image.model";
import { ProjectLanguage } from "./project-language.model";
import { Repository } from "./repository.model";

export class Project {
  id: number;
  developer: Developer;
  title: string;
  category: ProjectCategory;
  client: string;
  startDate: Date;
  languages: ProjectLanguage[];
  description: string;
  project_images: ProjectImage[];
  repository: Repository;
  extLink: ExternalLink[];
  status: string;
  isActive: boolean;
}
