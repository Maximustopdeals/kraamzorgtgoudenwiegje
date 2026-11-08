import { Plus } from "lucide-react";

type FaqListProps = {
  items: { question: string; answer: string }[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq-list" data-reveal>
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>
            <span>{item.question}</span>
            <Plus aria-hidden="true" size={20} />
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
