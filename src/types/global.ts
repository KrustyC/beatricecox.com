export enum REST_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

// @TODO All of these needs to properly aligned once I know what a project looks like

export type ProjectLink<T> = Partial<T> & {
  _id: string;
};

export type FormProjectImage = {
  image: string;
};

export type FormProject = {
  _id?: number;
  img: string;
  title: string;
  category: string;
  year: number;

  description: string;
  intro: string;
  images: FormProjectImage[];
};

export interface Project {
  _id?: number;
  img: string;
  title: string;
  category: string;
  year: number;

  // @TODO This May need to be removed
  intro: string;
  description: string;
  images: string[];
}
