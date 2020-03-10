import '../node_modules/spectre.css/dist/spectre.min.css';
import '../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.min.css';

import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});