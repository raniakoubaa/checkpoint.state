import React from 'react'
import Profil from './Profil';
import Listimage from "../ListImage/Listimage"
import Footer from '../Footer/Footer';

function ProfilPerson(){
   
    const nom = "Rania Koubaa"
      const descrip = "Personnalité publique"
      const profess = "Developper"
      const handlclick = (Profilname) => { alert(`This person name is : ${Profilname}`) }
      let UrlImg = [
        {
          src: "https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
          title: "image1",
        },
        {
          src: "https://www.inpixio.com/remove-background/images/main-before.jpg",
          title: "image2",
        },
        {
          src: "https://www.slazzer.com/static/images/remove_image_background.jpg",
          title: "image3",
        },
        {
          src:
            "https://techager.com/wp-content/uploads/2021/06/How-to-100-Remove-Background-from-Image-online.jpg",
          title: "image4",
        },
      ];
      return (
        <div>
          
          <Profil name={nom} handlclick={handlclick} bio={descrip} professional={profess} />
          <Listimage list={UrlImg}/>
          <Footer/>
         
        </div>
      );
}

export default ProfilPerson
