import { FITTED_SIZING } from '@/data/sizingChart';
import type { SizingRow } from '@/types/product';
import { useQuery } from '@tanstack/react-query';

async function fetchSizingChart(): Promise<SizingRow[]> {
  const endpoint = import.meta.env.VITE_SIZING_API_URL;
  if (!endpoint) return FITTED_SIZING;
  const res = await fetch(endpoint);
  if (!res.ok) return FITTED_SIZING;
  return res.json() as Promise<SizingRow[]>;
}

export function useSizingChart() {
  return useQuery({
    queryKey: ['sizingChart'],
    queryFn: fetchSizingChart,
    staleTime: Infinity,
  });
}
