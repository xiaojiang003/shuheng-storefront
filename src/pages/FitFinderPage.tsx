import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { getSilhouette } from '@/data/silhouettes';
import type { SilhouetteKey } from '@/types/silhouette';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 'use',
    question: 'Primary use case?',
    options: [
      { label: 'Sports / team', value: 'sports', scores: { 'six-panel-fitted': 3, 'performance-golf': 2, 'six-panel-snapback': 1 } },
      { label: 'Streetwear / retail', value: 'street', scores: { 'dad-hat': 3, 'six-panel-snapback': 2, 'five-panel-camp': 1 } },
      { label: 'Promo / events', value: 'promo', scores: { 'trucker-mesh': 3, 'bucket-hat': 2, 'dad-hat': 1 } },
    ],
  },
  {
    id: 'closure',
    question: 'Preferred closure?',
    options: [
      { label: 'Snapback', value: 'snap', scores: { 'six-panel-snapback': 3, 'trucker-mesh': 2 } },
      { label: 'Adjustable strap', value: 'strap', scores: { 'dad-hat': 3, 'five-panel-camp': 2 } },
      { label: 'Fitted', value: 'fitted', scores: { 'six-panel-fitted': 3 } },
    ],
  },
  {
    id: 'visor',
    question: 'Visor preference?',
    options: [
      { label: 'Flat', value: 'flat', scores: { 'six-panel-snapback': 2, 'six-panel-fitted': 2, 'five-panel-camp': 1 } },
      { label: 'Curved', value: 'curved', scores: { 'dad-hat': 3, 'performance-golf': 2 } },
      { label: 'No visor', value: 'none', scores: { 'knit-beanie': 3, 'bucket-hat': 2 } },
    ],
  },
] as const;

type Scores = Record<SilhouetteKey, number>;

function scoreResults(answers: string[]): SilhouetteKey[] {
  const totals = {} as Scores;
  QUESTIONS.forEach((q, qi) => {
    const answer = q.options.find((o) => o.value === answers[qi]);
    if (!answer) return;
    Object.entries(answer.scores).forEach(([key, pts]) => {
      const k = key as SilhouetteKey;
      totals[k] = (totals[k] ?? 0) + pts;
    });
  });
  return (Object.entries(totals) as [SilhouetteKey, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([k]) => k);
}

export function FitFinderPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<SilhouetteKey[] | null>(null);

  const current = QUESTIONS[step];
  const finished = results !== null;

  const select = (value: string) => {
    const next = [...answers.slice(0, step), value];
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setResults(scoreResults(next));
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResults(null);
  };

  return (
    <div className="container-content max-w-xl py-10">
      <title>Fit Finder — Shuheng</title>
      <h1 className="text-3xl font-bold text-brand">Find your silhouette</h1>
      <p className="mt-2 text-muted">Three quick questions — three recommended shapes.</p>

      {!finished && current && (
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Question {step + 1} of {QUESTIONS.length}
          </p>
          <h2 className="mt-2 text-xl font-bold">{current.question}</h2>
          <div className="mt-6 flex flex-col gap-3">
            {current.options.map((o) => (
              <Chip key={o.value} onClick={() => select(o.value)} className="justify-center py-3">
                {o.label}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {finished && (
        <div className="mt-10">
          <h2 className="text-xl font-bold">Your best matches</h2>
          <ol className="mt-6 space-y-4">
            {results?.map((key, i) => {
              const s = getSilhouette(key);
              if (!s) return null;
              return (
                <li key={key} className="rounded-card border border-border p-4">
                  {i === 0 && (
                    <span className="rounded-pill bg-accent px-2 py-0.5 text-xs font-bold text-white">
                      Best match
                    </span>
                  )}
                  <h3 className="mt-2 font-bold">{s.label}</h3>
                  <p className="text-sm text-muted">{s.bestFor}</p>
                  <Link to={`/silhouette/${key}`} className="mt-2 inline-block text-sm text-brand underline">
                    Learn more
                  </Link>
                </li>
              );
            })}
          </ol>
          <Button className="mt-8" tone="outline" onClick={reset}>
            Start over
          </Button>
        </div>
      )}
    </div>
  );
}
