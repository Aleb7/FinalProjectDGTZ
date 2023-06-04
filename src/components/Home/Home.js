import React, { useMemo} from 'react';
import Turchia from '../Foto/Turchia.jpg'
import { Link } from 'react-router-dom';
import '../Home/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import CardCustomLink from './CardCustomLink';
import { useGet } from '../_Hooks/Customs';
import { URL_TRIPS } from '../_Utils/Url';
import { BASE_64_PREFIX } from '../_Costants/Img';







const Home = () => {

  const { data } = useGet(URL_TRIPS)



  const hotTrips = useMemo(() => {    //se non arrivano dati restituisce un array vuoto cosi non scoppia 
    if (!data) {
      return []
    }
    return [...data].sort((a, b) => b.travelPrice - a.travelPrice).slice(0, 4); //sennò viene creato un array in ordine descrescente(b-a) in baso al costo travelPrice(max 4 con metodo slice)
  }, [data]);

  return ( //header
    <div>


      <main> 
        <div className='container-fluid p-0'>
          <div class="hero">
            <img src={Turchia} alt='Turchia' />
            <section class="hero-text">
              <div className='text-center'>
              <h1 className='mega-text'>Viaggi unici nel mondo</h1>
              
              <p>...esplora destinazioni mozzafiato</p>
              <Link className=' btn btn-dark' to="/trips">Scopri ora tutti i viaggi</Link>
              </div>
            </section>
          </div>
        </div>


        <section class="my-4 border-bottom">
          <div class="container text-center">
            <h2 class="text-lg font-bold mb-2">Destinazioni HOT
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </h2>
            <div class="destinazioni">
              <section className='row'>
                {hotTrips.map(trip => {
                  const imgSource = trip.imgSource ? `${BASE_64_PREFIX}${trip.imgSource}` : 'https://ithhostels.com/wp-content/uploads/2021/04/honeymoon_road_trip_1.jpg' //se c'è imgSource creamelo col prefisso sennò usa il link costante
                  return (
                    <article className=' col-sm-6 col-md-6 col-lg-3' key={trip.id}>
                      {/* riprende il componente cardCustomLink di grandezze predefinite e le ordina tramite hotTrips.map */}
                      <CardCustomLink href={"trips/trip/" + trip.id} src={imgSource} width={300} height={250} label={trip.name} />
                    </article>
                  )
                })}
                {/* <article className=' col-sm-6 col-md-6 col-lg-3'>
                  <CardCustomLink href={"trips/trip/1"} src={"https://www.lifestyleblog.it/wp-content/uploads/2023/01/egitto-piramidi-1200x1200.jpg"} width={300} height={250} label={"Egitto"} />
                </article>
                <article className=' col-sm-6 col-md-6 col-lg-3'>
                  <CardCustomLink href={"trips/trip/2"} src={"https://media.istockphoto.com/id/1164339417/it/foto/la-spiaggia-tropicale-di-varadero-a-cuba-con-auto-darte-classica-americana-barche-a-vela-e.jpg?s=612x612&w=0&k=20&c=OMEMGTvRoyEcB-XoBhIGAgSeoAzWZ48oZimL9C6VH3k="} width={300} height={250} label={"Cuba"} />
                </article>
                <article className=' col-sm-6 col-md-6 col-lg-3'>
                  <CardCustomLink href={"trips/trip/3"} src={"https://www.consigliamidove.it/wp-content/uploads/2021/01/Islanda.jpg"} width={300} height={250} label={"Islanda"} />
                </article>
                <article className=' col-sm-6 col-md-6 col-lg-3'>
                  <CardCustomLink href={"trips/trip/4"} src={"https://media.istockphoto.com/id/938335974/photo/aerial-view-of-kualoa-area-of-oahu-hawaii.jpg?s=612x612&w=0&k=20&c=OqqkjtRGFffwCx5Ac4kyfO9AReN-wnc6hGW8jJp7vok="} width={300} height={250} label={"Hawaii"} />
                </article> */}
              </section>






            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>


    </div>
  );
}

export default Home;
