import '../styles/main.scss';
import App from './components/App';
import Home from './views/Home';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Contact from './views/Contact';

const rootRoute = {
  childRoutes: [
    {
      component: App,
      childRoutes: [
        Home,
        Page1,
        Page2,
        Contact,
      ],
    },
  ],
};

export default rootRoute;
