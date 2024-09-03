
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  
  const photos = [
    { src: 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/399022385_1985243801861555_2130273841183701717_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFh9sGP63cd0iDgnRV-nl2pU38oc1j1UatTfyhzWPVRq_G1cerHxrbQhpwQD3kzWZBuGzxhCcyXzXzs4bYX6fBV&_nc_ohc=6hQK0ChMklMQ7kNvgHb18x-&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&oh=00_AYDnt6z9X6jfuuSUaNvJBYUdy3NBm0ektW1svkDpUwpm4g&oe=66DB7A85', alt: 'Description of photo 1' },
    { src: 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/368244213_1940478783004724_1691277807048614218_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeETCXPvcsYoBqMF0LE2AIYP640BKCDgOPbrjQEoIOA49v5XmTIFlvdbHH2-xd6t1Jqgo1tvwO9zhT_VmyNMAKta&_nc_ohc=2G5JsNFd22gQ7kNvgHyq_UZ&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&oh=00_AYAI8tLiKMuCEMxg3sKv5YVudETXxE_55LRtt1l-_ZhicQ&oe=66DB87A5', alt: 'Description of photo 2' },
    { src: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/329884498_578798517462150_2932402914036994422_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGO5sIvvKNd_wo3HV7kk_sG-mdONGGMBxb6Z040YYwHFsa3sQpaSZCzuBQM8EqUG9BDlSWZrgKSsCB-2SysM5co&_nc_ohc=vpu2eLuLilYQ7kNvgHYvfY9&_nc_zt=23&_nc_ht=scontent.fmnl25-2.fna&oh=00_AYCT0PMWbFD14tZNb6VuJsDlEQGBTKWERoRYtbZ_gxlVVA&oe=66DBA92A', alt: 'Description of photo 3' },
    { src: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/152795081_1308255436227065_4459529525225567232_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHknGnP_NHS9kVdyQMqudRmDCGAYi7jUCwMIYBiLuNQLOtQ7w38yauvMHZ2V_COquXk4Xd8uEoy2C2LekrE1Wab&_nc_ohc=fA8uAscgamgQ7kNvgFthnqp&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=AshKQS-xNoFaXHtaMDQWWSZ&oh=00_AYD1TE3ZdBAmxOi16_9AD86XfCjuVCHvgi98NDyWjNwJ2g&oe=66FD3E34', alt: 'Description of photo 4' },
    { src: 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.6435-9/134101680_1273757489676860_178461125097201798_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFv6baiQ5gx2idM0I6Iq_x5P_tnDKEkor8_-2cMoSSiv302BSvHmkG5U2YzprjLx3MKrbs152l4dWTjrhkDMeOR&_nc_ohc=JN7oHmv2klAQ7kNvgFVzhty&_nc_ht=scontent.fmnl25-4.fna&oh=00_AYDaBMoA4k9pkKXcDnGj6aP2RiA_jNStSakhzI7P51qf0w&oe=66FD3447', alt: 'Description of photo 5' },
    { src: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/92948182_1063337294052215_7980906047583813632_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeG48KmH-98Fx8aM75a_aDazKvKGZoFCl2kq8oZmgUKXaVNoR_Dfz1PzRoLaM12w2neOkPjj9CWPtLOyjYog3r2r&_nc_ohc=kEskA5doT5EQ7kNvgFS8G7P&_nc_ht=scontent.fceb2-1.fna&oh=00_AYAm82tB68NGaur6AjakcoMG3wiT_GfjH23yFIp-swgtmw&oe=66FD67FB', alt: 'Description of photo 6' },
    { src: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/432412198_2069278846791383_2248092589449915229_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF1mKmt7wPyUBYioymIogoKmDTEr3YVffqYNMSvdhV9-g4hXlq_WIsLcv7KOPiP-OiLsNxDjQ6jEAgwN2undBuW&_nc_ohc=UzswLV8CfRIQ7kNvgGFuEgu&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=00_AYCjusawqBeozG8LfVmVqH5wqYqTZVqK60jJKK21uAwk6w&oe=66DBC952', alt: 'Description of photo 7' },
    { src: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/411227367_2012875695765032_5782564354717570720_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGyoz-y128K9VAwIhtpRehnLfFMsutxHmYt8Uyy63EeZmoHkctyufaqfETbPuBTsxHwsUaNI9rAq9yorkVlCWT_&_nc_ohc=kKOEvgfaNysQ7kNvgGWk1Oa&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=00_AYC_QTWa-_rdk_q9PgsOPmR_QTe1Ex4hPR7zTVWK69Inxw&oe=66DBA65C', alt: 'Description of photo 8' },
  ];

  return (
    <section id="gallery">
      <h2>Photos</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
