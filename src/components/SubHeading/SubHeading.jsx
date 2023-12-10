import React from 'react';
import images from '../../constants/images';

const SubHeading = ({ title }) => {
  return (
    <div className="app__subHeading">
      <p className="p__cormorant" style={{ color: '#fff' }}>{title}</p>
      <img src={images.spoon} alt="spoon_img" />
    </div>
  )
}

export default SubHeading

/* Erros que cometi para correção na revisão:

1 - Ao invés de utilizar o h2, seria melhor utilizar o p, pois ele terá as caracteristicais de p__cormorant
2 - A colher se chamará spoon__img
3 - Cuidado na hora de escrever suas funções, lembre-se que quando você fizer com {} a palavra return será obrigatória. 
*/