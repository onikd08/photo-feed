import PhotoDetails from "@/components/PhotoDetails";
import { getDictionary } from "../../dictionaries";

const PhotoDetailsPage = async ({ params: { lang, id } }) => {
  const dict = await getDictionary(lang);

  const response = await fetch(`${process.env.API_BASE_URL}/photos/${id}`);
  const photo = await response.json();

  return <PhotoDetails photo={photo} dict={dict} />;
};

export default PhotoDetailsPage;
