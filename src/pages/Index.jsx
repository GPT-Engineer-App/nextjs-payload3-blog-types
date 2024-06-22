import { Container, Text, VStack, Box, Heading, Link } from "@chakra-ui/react";
import medicalPosts from "../data/medicalPosts";
import spaPosts from "../data/spaPosts";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Our Blog</Text>
        <Text>Explore our latest posts and updates.</Text>
        <Box mt={10}>
          <Heading as="h3" size="lg" mb={4}>Featured Doctors</Heading>
          {medicalPosts.slice(0, 3).map(post => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px" mb={4}>
              <Heading fontSize="xl">{post.name}</Heading>
              <Text mt={4}>{post.description}</Text>
              <Text mt={2}><strong>Address:</strong> {post.address}</Text>
              <Text mt={2}><strong>Phone:</strong> {post.phone}</Text>
              <Text mt={2}><strong>Email:</strong> <Link href={`mailto:${post.email}`}>{post.email}</Link></Text>
              <Text mt={2}><strong>Website:</strong> <Link href={post.website} isExternal>{post.website}</Link></Text>
              <Text mt={2}><strong>Specialties:</strong> {post.specialties.join(", ")}</Text>
            </Box>
          ))}
        </Box>
        <Box mt={10}>
          <Heading as="h3" size="lg" mb={4}>Featured Spa Options</Heading>
          {spaPosts.slice(0, 3).map(post => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px" mb={4}>
              <Heading fontSize="xl">{post.name}</Heading>
              <Text mt={4}>{post.description}</Text>
              <Text mt={2}><strong>Address:</strong> {post.address}</Text>
              <Text mt={2}><strong>Phone:</strong> {post.phone}</Text>
              <Text mt={2}><strong>Email:</strong> <Link href={`mailto:${post.email}`}>{post.email}</Link></Text>
              <Text mt={2}><strong>Website:</strong> <Link href={post.website} isExternal>{post.website}</Link></Text>
              <Text mt={2}><strong>Specialties:</strong> {post.specialties.join(", ")}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;