import { Container, CountryList, Heading, Section } from 'components';
import { Loader } from 'components';
import useFetchCountries from '../hooks/useFetchCountries';

const Home = () => {
const { countries, isLoading, error } = useFetchCountries();
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Sorry, something went wrong" bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default Home;
