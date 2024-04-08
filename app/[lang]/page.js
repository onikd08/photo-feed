import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const response = await fetch(`${process.env.API_BASE_URL}/photos`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}
