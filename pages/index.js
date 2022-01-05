import Link from 'next/link';
import Image from 'next/image'
import { Flex, Box, Text, Button} from '@chakra-ui/react';
import { baseUrl, fetchApi} from '../utils/fetchApi';
import Property from '../components/Property'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" >
    <Image src={imageUrl} width={500} height={300} alt="first image uploaded" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="bold">{purpose}</Text>
      <Text fontSize="2xl" fontWeight="bold">{title1}<br /> {title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br /> {desc2}</Text>
      <Button fontSize="x1">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertyForSale,propertyForRent}) {

  return (
    <Box>
      <Banner
       purpose="Rent A Home"
       title1="Rental Homes for"
       title2="Everyone"
       desc1="Explore Apartaments, Villas, Homes"
       desc2="and more"
       buttonText="Explore Renting"
       linkName="/search?purpose=for-rent"
       imageUrl="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
       />
      <Flex flexWrap="wrap">
        {/* Fetch all the properties and map over them */}
        {propertyForRent.map((property)=> <Property property={property} key={property.id} />)}
      </Flex>
      <Banner
       purpose="Buy A Home"
       title1="Find, Buy & Own Your"
       title2="Dream Home"
       desc1="Explore Apartaments, Villas, Homes"
       desc2="and more"
       buttonText="Explore Buying"
       linkName="/search?purpose=for-sale"
       imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
       />
       <Flex flexWrap="wrap">
       {propertyForSale.map((property)=> <Property property={property} key={property.id} />)}
       </Flex>
    </Box>
  )
}


export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
        props: {
              propertyForSale: propertyForSale?.hits,
              propertyForRent: propertyForRent?.hits,
        }
  }
}