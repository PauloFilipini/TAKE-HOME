import { IdsDocument } from "./IdsDocument";

export  interface IConversationRequest {
  helpdeskId: number;
  projectName: string;
  messages: {
    role: "USER" | "AGENT";
    content: string;
  }[];
}

export  interface IConversationResponse {
  messages: {
    role: "USER" | "AGENT";
    content: string;
  }[];
  handoverToHumanNeeded: boolean;
  sectionsRetrieved: IdsDocument[];
}
