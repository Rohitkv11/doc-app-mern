import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  BannerExploreButton
} from "../../src/styles/banner";

const Home = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle sx={{marginTop:"120px"}} variant="h2">Flexible plans & fair pricing, tailored to your documentation needs</BannerTitle>
        <BannerDescription variant="subtitle">
        SignDesk offers a free Individual package with 3 documents, 3 templates & electronic signatures. Our paid packages all offer multiparty signing on documents, Aadhaar signatures & unlimited templates, along with email-based customer support. Want to digitally stamp your documents, utilize all-new video-based evidence creation & use API-driven documentation solutions? Talk to sales to find the best option for you.
        </BannerDescription>
        <BannerExploreButton color="primary">Explore Now</BannerExploreButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Home;
