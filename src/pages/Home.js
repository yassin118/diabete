import React from 'react';
import Chart from '../components/chart/Chart';
import { userData } from '../components/dummyData';

const Home = () =>{
  return (
    <div className='home'>
      <Chart data={userData} title="Nombre de diabete" grid  dataKey="Active User"/>
     <div className='introduction' > <h3> L’épidémie du diabète en Tunisie est un véritable problème de santé publique. En effet, la prévalence du diabète en Tunisie avoisine les 19,8% de la population. Les prévisions statistiques évoquent 27% à l’horizon 2027 pour atteindre plus d’un quart de la population.</h3></div>
    </div>
  );
}
export default Home;