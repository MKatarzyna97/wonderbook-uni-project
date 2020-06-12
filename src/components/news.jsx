import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


class News extends Component {
    state = {  }
    render() { 
        return ( <div className="carousel"> <h1>Czytelnicze nowości</h1> <Carousel>
          
            <Carousel.Item>
              <div className="first"></div>
              <Carousel.Caption>
                <h2>Poufne</h2>
                <h3>Mikołaj Grynberg</h3>
                <p>Piękna, osobista proza o losach pewnej żydowskiej rodziny naznaczonej długim cieniem historii. Podążając za narratorem, śledzimy sceny z codziennego życia, pełne czułości i humoru, niekiedy trudne, przepełnione doświadczeniem choroby i straty. (...) </p>
                  <a className='book-link' href="https://lubimyczytac.pl/ksiazka/4927526/poufne"><button className="button-more">Czytaj więcej</button></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="second"></div>
          
              <Carousel.Caption>
                <h2>Kiedy mnie zobaczyłeś</h2>
                <h3>J. D. Russo</h3>
                <p>Kiedy oczami są uczucia, można zobaczyć niewidzialne.
Chłopak Gabrysi ulega wypadkowi samochodowemu, w wyniku którego traci wzrok. Dziewczyna musi zdecydować, czy zostać z próbującym odnaleźć się w nowej rzeczywistości Kubą, czy wyjechać do Paryża na miesięczny staż, o którym od dawna marzy. (...) </p>
<a className='book-link' href="https://lubimyczytac.pl/ksiazka/4926285/kiedy-mnie-zobaczyles"><button className="button-more">Czytaj więcej</button></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="third"></div>
          
              <Carousel.Caption>
                <h2>Nie myśl za dużo</h2>
                <h3>Anne Bogel</h3>
                <p>Wszyscy przez to przechodzimy – zapętleni w ciągłych wątpliwościach „co, jeśli?”. Niezdolni do podjęcia decyzji, sparaliżowani przez strach, że dokonamy złego wyboru. Nikt nie chce żyć, bez przerwy się zamartwiając i nie mogąc zdecydować na konkretne działanie w obawie przed konsekwencjami. Jednak wydaje się, że trudno tego uniknąć, że taka jest nasza natura i nie można tego zmienić.
Ale czy na pewno? (...)  </p>
                  <a className='book-link' href="https://lubimyczytac.pl/ksiazka/4927725/nie-mysl-za-duzo"><button className="button-more">Czytaj więcej</button></a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> </div> );
    }
}
 
export default News;