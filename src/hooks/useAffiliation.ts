import { getAffiliationView } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const useAffiliation = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const { data: affiliationView } = useQuery({
    queryKey: ["affiliationView"],
    queryFn: getAffiliationView,
  });

  const affiliations = affiliationView?.data.affiliation_view_result.affiliations;

  useEffect(() => {
    if (!query.trim()) {
      setResult([]);
      return;
    }

    const filtered = affiliations?.filter(item =>
      item.affiliation_name.includes(query)
    ) ?? [];

    setResult(filtered.map(item => item.affiliation_name));
  }, [query]);

  return { query, setQuery, result };
};