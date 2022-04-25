import { Flex } from "@chakra-ui/react"
import { fetchApi, baseUrl } from '../utils/fetchApi'
import Property from '../components/Property';
import Banner from './../components/Banner';



export default function Home({ propsForSale, propsForRent }) {
  return (
    <div>
      <Banner
        purpose="Rent a Home"
        title1="Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments, villas,Homes"
        desc2="and more."
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {
          propsForSale.map(property => <Property property={property} key={property.id} />)
        }
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imgUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {
          propsForRent.map(property => <Property property={property} key={property.id} />)
        }
      </Flex>
    </div>
  )
}

export async function getStaticProps() {
  const propsForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propsForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  return {
    props: {
      propsForSale: propsForSale?.hits,
      propsForRent: propsForRent?.hits,
    }
  };
}
