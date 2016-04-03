import { configure } from '@kadira/storybook';
import '../style.scss'

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
