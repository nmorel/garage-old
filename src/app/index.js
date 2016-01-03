import '../styles/main.scss';
import App from './components/App';
import Home from './views/Home';
import Occasions from './views/Occasions';
import Occasion from './views/Occasion';
import Prestations from './views/Prestations';
import Contact from './views/Contact';

const rootRoute = {
  childRoutes: [
    {
      component: App,
      childRoutes: [
        Home,
        Occasions,
        Occasion,
        Prestations,
        Contact,
      ],
    },
  ],
};

export default rootRoute;
