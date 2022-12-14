export interface ExpectedReturnModel {
  count : number,
  next : string | null,
  previous : string | null,
  results : [];
}

export interface PokemonModel {
  // count : number,
  // next : string | null,
  // previous : string | null,
  // results: [{
  //   name : string,
  //   url : string,
  //   price : 10
  // }]
  name : string,
  url : string,
  price : number;
}