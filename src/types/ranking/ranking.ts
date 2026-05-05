export interface Ranking {
  member_id: number;
  rank: number;
  nick_name: string;
  one_month_statistics: number;
  affiliation_name: string;
  profile_image: string;
}

export interface RankingResponse {
  message: string;
  status: string;
  data: Ranking[];
}