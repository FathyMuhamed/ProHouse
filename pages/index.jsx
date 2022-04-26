import { Flex, Box } from "@chakra-ui/react"
import { fetchApi, baseUrl } from '../utils/fetchApi'
import Property from '../components/Property';
import Banner from './../components/Banner';



export default function Home({ propsForSale, propsForRent }) {
  console.log(propsForRent);
  return (
    <Box>
      <Banner
        purpose="Rent a Home"
        title1="Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments, villas,Homes"
        desc2="and more."
        buttonText="Explore Renting"
        linkName="/search"
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/180732345/e7ecc7987d5c474783febb52cecd860b"
      />
      <Flex flexWrap="wrap" justifyContent="center" >
        {
          propsForRent.map(property => <Property property={property} key={property.id} />)
        }
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center">
        {
          propsForSale.map(property => <Property property={property} key={property.id} />)
        }
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propsForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=3`);
  const propsForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=3`);
  return {
    props: {
      propsForSale: propsForSale?.hits,
      propsForRent: propsForRent?.hits,
    }
  };
}
