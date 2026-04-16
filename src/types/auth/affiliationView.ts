export interface AffiliationView {
  id: number;
  affiliation_name: string;
}

export interface AffiliationViewResult {
  data: {
    affiliation_view_result: {
      affiliations: AffiliationView[];
    };
  };
}