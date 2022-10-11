import { useEffect, useState } from 'react';

export default function useSuscribeToEvent(url: string) {
  const [message, setMessage] = useState<any>();
  const [error, setError] = useState<Event>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const source = new EventSource(url);

    source.onopen = () => {
      setIsOpen(true);
    };

    source.onmessage = (event) => {
      setMessage(JSON.parse(event.data));
    };

    source.onerror = (e: Event) => {
      setError(e);
    };

    return () => {
      source.close();
    };
  }, [url]);

  return [message, error, isOpen];
}
