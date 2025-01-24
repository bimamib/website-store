import getBanner from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const banner = await getBanner("bf9aea0d-f6b6-49ba-b272-b30987a68019");

  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Banner data={banner} />
      </div>
    </Container>
  );
};

export default HomePage;
