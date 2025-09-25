import { useEffect, useState } from 'react';

/**
 * Hook to detect if the component is running on the client side
 * Helps prevent hydration mismatches by ensuring consistent rendering
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
