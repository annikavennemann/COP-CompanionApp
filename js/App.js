import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import { createElement} from './ui-framework'


export default () => {
    const headerComponent = Header();
    const main = createElement('main');
    Dashboard();

  Nav((headerTitle, headerSubtitle) => headerComponent.update(headerTitle, headerSubtitle))
}

