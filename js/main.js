import { Clock } from './components/clock/Clock.js';

import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from './components/progress-bar/renderProgressBar.js';

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';

const clock = new Clock('.hero .clock');
clock.init();


renderProgressBar('.left', progressBarData);

renderSocials ('footer > .long', socialsData);