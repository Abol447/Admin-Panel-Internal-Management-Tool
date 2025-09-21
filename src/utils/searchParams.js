export class SearchParams {
  constructor(searchParams, setSearchParams) {
    this.searchParams = searchParams;
    this.setSearchParams = setSearchParams;
  }
  get(key) {
    return this.searchParams.get(key);
  }

  set(key, value) {
    this.searchParams.set(key, value);
    this.setSearchParams(this.searchParams);
  }
}
