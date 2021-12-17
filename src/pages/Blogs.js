import React from 'react';
import ReactPlayer from "react-player"


const Blogs = () =>{
  return (
    
    <div >

      <div className='Titre'> <h1>Les types de diabetes : </h1></div>
      <img className='image' src="https://www.novonordisk.tn/fr/disease-areas/type-1-diabetes/_jcr_content/root/imagevideotext.coreimg.png/1615459925217/type-1-01.png" alt=''/>

      <div className='blogs'>
      

<h2 className='diabete1'> Le diabète de type 1 </h2>
    
            
            <h4 className='diab1parag'>
    Ce type de diabète apparaît généralement chez les personnes de moins de 20 ans. Il touche environ 10 % des personnes vivant avec le diabète. Le diabète de type 1 était autrefois appelé diabète insulinodépendant ou diabète juvénile.<br/><br/>

Il se caractérise par l’absence totale de production d’insuline. La personne vivant avec le diabète de type 1 dépend donc d’injections quotidiennes d’insuline ou d’une pompe à insuline pour assurer sa survie.


</h4>
<h2 className='diabete2'> Le diabète de type 2 </h2>
    
            
            <h4 className='diab2parag'>
            Le diabète de type 2 est une maladie caractérisée par une hyperglycémie chronique, c'est-à-dire par un taux trop élevé de glucose (sucre) dans le sang. Cette maladie survient généralement chez les adultes avançant en âge, et touche davantage les personnes obèses ou ayant un surplus de poids.</h4>

 </div>
 <ReactPlayer className='video'
        url="https://www.youtube.com/watch?v=XfyGv-xwjlI&ab_channel=AlilaMedicalMedia" 
      />



 </div>
      
    
   
  );
}
export default Blogs;