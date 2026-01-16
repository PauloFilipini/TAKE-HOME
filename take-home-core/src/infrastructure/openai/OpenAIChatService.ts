import { openAIClient } from "./OpenAIClient";
import { IdsDocument } from "../../application/interfaces/IdsDocument";

interface ChatResponse {
  answer: string;
  handoverToHumanNeeded: boolean;
}

export class OpenAIChatService {
  async generateAnswer(
    userMessage: string,
    idsDocuments: IdsDocument[]
  ): Promise<ChatResponse> {
    const hasN2Content = idsDocuments.some((doc) => doc.type === "N2");

    const systemPrompt = `
You are a customer support assistant.

IMPORTANT RULES:
- You must answer ONLY using the information provided in the IDS content below.
- Do NOT use any external knowledge.
- If the IDS does not contain enough information, ask the user for clarification.
- Be polite, concise, and helpful.

IDS CONTENT:
${idsDocuments.map((doc) => `- ${doc.content}`).join("\n")}
`;

    const completion = await openAIClient.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    return {
      answer: completion.choices[0].message.content ?? "",
      handoverToHumanNeeded: hasN2Content,
    };
  }
}
