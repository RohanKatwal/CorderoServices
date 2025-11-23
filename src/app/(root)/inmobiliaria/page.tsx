import Contact from "@/components/shared/contact/Contact";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import Stats from "@/components/shared/Stats";
import Video from "@/components/shared/Video";
import { getVideos } from "@/lib/actions/firebaseVideos";

export const metadata = {
  title: "Inmobiliaria",
  icons: {
    icon: "/images/inmo-logo.ico",
  },
};

const InmobiliariaPage = async () => {
  const videos = await getVideos();
  return (
    <>
      <Navbar pageName="inmobiliaria" />
      <HeroSection pageName="inmobiliaria" />
      <Stats pageName="inmobiliaria" />
      <section className="videos-wrapper container">
        <div className="heading">
          <h1>
            Nuestros Destacados <span className="highlight">Inmobiliarios</span>
          </h1>
          <p>
            Explora nuestros últimos destacados de propiedades y proyectos a
            través de video.
          </p>
        </div>
        <ul className="videos">
          {videos.map((video) => (
            <Video
              key={video.id}
              id={video.id}
              title={video.title}
              description={video.description}
              location={video.location}
              url={video.url}
            />
          ))}
        </ul>
      </section>
      <Contact />
    </>
  );
};

export default InmobiliariaPage;
