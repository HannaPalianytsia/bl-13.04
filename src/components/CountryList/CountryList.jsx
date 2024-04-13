import { Grid, GridItem } from "..";

export const CountryList = ({ countries }) => {
  return <Grid>{countries.map(({ id, flag, country }) => (
    <GridItem key={id}><img src={flag} alt={country} /></GridItem>
  ))}</Grid>;
};
