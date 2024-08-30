export enum Status {
  ACTIVE,
  INACTIVE,
}

export interface Contact {
  id: string;
  firstname: string;
  lastname: string;
  status: Status;
}
