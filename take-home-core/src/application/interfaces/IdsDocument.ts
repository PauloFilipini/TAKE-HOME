export type IdsContentType = "N1" | "N2";

export interface IdsDocument {
  content: string;
  type: IdsContentType;
  score: number;
}
