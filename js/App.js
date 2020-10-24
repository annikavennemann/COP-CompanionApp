import Header from './components/Header';
import Nav from './components/Nav';
import { createElement} from './ui-framework'


export default () => {
    const headerComponent = Header();
    const main = createElement('main')

  Nav((headerTitle, headerSubtitle) => headerComponent.update(headerTitle, headerSubtitle))
}

