import { IdsDocument } from "../../application/interfaces/IdsDocument";


export class EscalationPolicy {
  static shouldHandover(documents: IdsDocument[]): boolean {
    return documents.some((doc) => doc.type === "N2");
  }
}
