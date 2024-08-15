export interface Movie {
  Title: string;
  Year : string;
  ImdbId : string;
  Type : string;
  Poster : string;

}
export interface ApiResponse {
 data:{ Search: Movie[]}
}