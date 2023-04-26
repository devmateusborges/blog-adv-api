export interface ConcatOptionsQuestion {
  questionAmount: "5" | "10" | "15";
  level: "easy" | "medium" | "hard";
  subject: string;
  alternativeAmount: "2" | "4" | "5";
}

// EXEMPLo

const exempleFormatZero = [
  {
    id: "1",
    question: "1 + 1 ?",
    alternatives: [{ A: "1" }, { B: "2" }],
    toCurrentResponse: "B",
  },
];
const exempleFormatOne = [
  {
    id: "1",
    question: "2 + 4 ?",
    alternatives: [{ A: "1" }, { B: "5" }, { C: "7" }, { D: "6" }],
    toCurrentResponse: "D",
  },
];
const exempleFormatTwo = [
  {
    id: "1",
    question: " 7 + 1 ?",
    alternatives: [{ A: "8" }, { B: "6" }, { C: "10" }, { D: "6" }, { E: "7" }],
    toCurrentResponse: "A",
  },
];

export function ConcatTextRequests({
  questionAmount,
  level,
  subject,
  alternativeAmount,
}: ConcatOptionsQuestion) {
  const amountValue: any =
    (alternativeAmount == "2" && exempleFormatZero) ||
    (alternativeAmount == "4" && exempleFormatOne) ||
    (alternativeAmount == "5" && exempleFormatTwo) ||
    0;

  const responseConcat =
    "em brasileiro, Sem explicar crie em json sem quebras de linha, (" +
    questionAmount +
    ") perguntas em json com esse layout idendico ,( " +
    JSON.stringify(amountValue) +
    " ), com ( " +
    alternativeAmount +
    " ) alternativas, não deve repitir nehuma resposta de alternativa, com nivel de dificuldade (" +
    level +
    ") sobre o assunto (" +
    subject +
    "). ";

  return responseConcat;
}
