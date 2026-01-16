export const buildRagPrompt = (
  context: string,
  question: string
): string => {
  return `
You are a customer support assistant.

Rules:
- Answer ONLY using the context below.
- If the answer is not in the context, say you don't have enough information.

Context:
${context}

Question:
${question}
`;
};
