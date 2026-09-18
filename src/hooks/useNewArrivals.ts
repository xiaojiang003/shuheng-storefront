import { MERCHANT } from '@/config/merchant';
import { queryByFields } from '@/lib/queryByFields';
import { trackEvent } from '@/lib/analytics';
import { useQuery } from '@tanstack/react-query';

export function useNewArrivals() {
  return useQuery({
    queryKey: ['newArrivals', MERCHANT.companyId],
    queryFn: () =>
      queryByFields({
        minisiteId: MERCHANT.companyId,
        fieldNames: 'productsByRecommendStrategy',
        extendParams: { strategyName: 'modifyTimeDesc' },
      }),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
    retryDelay: 400,
    meta: {
      onError: (err: Error) => {
        trackEvent('new_arrivals_error', { message: err.message });
      },
    },
  });
}
