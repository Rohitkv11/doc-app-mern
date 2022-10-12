import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
} from "../../src/styles/banner";

const Home = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle sx={{ marginTop: "120px" }} variant="h2">
          SignDesk - Smart Automation Driven By Passion & Expertise
        </BannerTitle>
        <BannerDescription variant="subtitle">
          SignDesk is a trusted and award-winning provider of global SaaS-based
          digital documentation solutions, helping businesses solve large-scale
          documentation & productivity challenges using cutting-edge AI & ML
          technology. We ensure real-time compliance with regulations, make use
          of industry-grade techniques for client data security, and are
          leveraged by thousands of clients including nearly every major Indian
          bank & enterprises across industry segments.{" "}
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Home;
