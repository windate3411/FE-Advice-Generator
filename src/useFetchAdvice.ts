import { useState, useCallback } from "react";

type FetchAdviceResponse = {
  slip: {
    id: number;
    advice: string;
  };
};

const useFetchAdvice = (): [
  { advice: string | null; id: number | null },
  () => void
] => {
  const [adviceData, setAdviceData] = useState<{
    advice: string | null;
    id: number | null;
  }>({
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: 117,
  });

  const fetchAdvice = useCallback(async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data: FetchAdviceResponse = await response.json();
      setAdviceData({ advice: data.slip.advice, id: data.slip.id });
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdviceData({ advice: null, id: null });
    }
  }, []);

  return [adviceData, fetchAdvice];
};

export default useFetchAdvice;
