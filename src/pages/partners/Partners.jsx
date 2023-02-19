import React, { useState, useEffect} from 'react';
import './Partners.scss'

import axios from 'axios';

const Partners = () => {

    const [partners, setPartners] = useState(null)



    const getData = async () => {
        try {
          await axios
            .get(
              "https://backend.salymbekov.kg/wp-json/wp/v2/partners?per_page=100"
            )
            .then((res) => setPartners(res.data));
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        getData();
      }, []);

    return (
        <div className="brand-logo ">


                <div className="slider">
	<div className="slide-track">
        {partners?.map((partner) => (
        <div key={partner.id} className="slide">
			<img src={partner.acf.logotips} height="40" width="145" alt="" />
		</div> 
        ))}
	</div>
</div>
                
                  
                </div>
    );
};

export default Partners;