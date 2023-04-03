import { Divider, Heading, Select, Spacer, Box, Grid } from "@chakra-ui/react";

function Filter({ brands, selectedBrand, setSelectedBrand }) {
  const handleChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <>
      <Grid gap={3}>
        <Heading as="h2" size="md">
          Filter By:
        </Heading>
        <Divider />
        <Heading as="h3" size="sm">
          Brand:
        </Heading>
        <Select
          value={selectedBrand}
          onChange={handleChange}
          placeholder="Filter by brand"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </Select>
        <Heading as="h3" size="sm">
          Rating :
        </Heading>
        <Divider />
        <Select>
          <option>All Ratings</option>
          <option>1 & Aboove Rating</option>
          <option>2 & Aboove Rating</option>
          <option>3 & Aboove Rating</option>
          <option>4 & Aboove Rating</option>
        </Select>
        <Heading as="h3" size="sm">
          Current Offers :
        </Heading>
        <Divider />
        <Select>
          <option>All Offers</option>
          <option>CrainBaits</option>
          <option>Jerbaits</option>
          <option>Top Water</option>
          <option>Lipless</option>
          <option>Saltwater Baits</option>
          <option>Swimbaits</option>
        </Select>
        <Heading as="h3" size="sm">
          Max Diving Speed
        </Heading>
        <Divider />
        <Select>
          <option>All Spped :</option>
          <option>1 (51)</option>
          <option>2 (51)</option>
          <option>3 (51)</option>
          <option>4 (51)</option>
        </Select>
        <Heading as="h3" size="sm">
          Classification
        </Heading>
        <Divider />
        <Select>
          <option>All Classification :</option>
          <option>1 & Aboove Rating</option>
          <option>2 & Aboove Rating</option>
          <option>3 & Aboove Rating</option>
          <option>4 & Aboove Rating</option>
        </Select>
        <Heading as="h3" size="sm">
          Lure Style
        </Heading>
        <Divider />
        <Select>
          <option>All Length</option>
          <option>1 & Aboove Rating</option>
          <option>2 & Aboove Rating</option>
          <option>3 & Aboove Rating</option>
          <option>4 & Aboove Rating</option>
        </Select>
        <Heading as="h3" size="sm">
          byoanci :
        </Heading>
        <Divider />
        <Select>
          <option>byoanci :</option>
          <option>byoanci</option>
          <option>2 & Aboove Rating</option>
          <option>3 & Aboove Rating</option>
          <option>4 & Aboove Rating</option>
        </Select>
        <Divider />
      </Grid>
    </>
  );
}

export default Filter;
