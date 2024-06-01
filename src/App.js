import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Gallery from "./components/gallery";




function App() {

  const galleryImages = [
    'https://images.pexels.com/photos/3566226/pexels-photo-3566226.jpeg',
    'https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1601774/pexels-photo-1601774.jpeg?auto=compress&cs=tinysrgb&w=600'
  
  ];

  return (
    <>
    <Header/>
    <main>
      <Banner

      title="Mollys Bar"
      text="est. in 1978"
      primaryBtnText="Menu"
      secondaryBtnText="Drinks"

      />
      <Gallery images = {galleryImages}/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
