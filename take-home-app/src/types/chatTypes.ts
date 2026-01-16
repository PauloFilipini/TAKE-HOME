
export type MessageRole = "USER" | "AGENT";

export interface ConversationMessage {
  role: MessageRole;
  content: string;
}

export interface ConversationRequest {
  helpdeskId: number;
  projectName: string;
  messages: ConversationMessage[];
}

export type SectionType = "N1" | "N2";

export interface RetrievedSection {
  content: string;
  type: SectionType;
  score: number;
}

export interface ConversationResponse {
  messages: ConversationMessage[];
  handoverToHumanNeeded: boolean;
  sectionsRetrieved: RetrievedSection[];
}
