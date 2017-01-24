export const SELECT_FILTER = 'SELECT_FILTER'
export const SEARCH= 'SEARCH'


export const selectFilter = filter => ({
  type: SELECT_FILTER,
  filter
}) 
export const search = term => ({
  type: SEARCH,
  term
}) 