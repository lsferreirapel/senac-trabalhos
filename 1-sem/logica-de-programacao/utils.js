import PromptSync from "prompt-sync";

export const prompt = PromptSync();

export const { format: formatCurrency } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

export function transformDaysInHours(days) {
  return days * 24
}
