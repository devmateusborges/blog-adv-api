import { Configuration, OpenAIApi } from "openai";
import { ConcatTextRequests } from "../service/service";

const configuration = new Configuration({
  apiKey: "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",
});

export class GptUseCase {
  async createNewQuery(
    questionAmount: "5" | "10" | "15",
    level: "easy" | "medium" | "hard",
    subject: string,
    alternativeAmount: "2" | "4" | "5"
  ): Promise<any> {
    const openai = new OpenAIApi(configuration);

    const prompt = ConcatTextRequests({
      level: level,
      questionAmount: questionAmount,
      subject: subject,
      alternativeAmount: alternativeAmount,
    });

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 2048,
      temperature: 1,
    });
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
  }
}
