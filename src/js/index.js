import 'normalize.css';
import '@/scss/main.scss';
import Swiper from 'swiper';
import 'swiper/css';

import Navigation from './scripts/navigation';
import Guide from './scripts/guide';
import IndexBox from './scripts/indexBox';
import Sliders from './scripts/sliders';
import ViewtopicFields from './scripts/viewtopic_fields';
import ProfileviewFields from './scripts/profileview_fields';
import Dices from './scripts/dices';
import Listings from './scripts/listings';

Guide.init();
Navigation.init();
ViewtopicFields.init();
ProfileviewFields.init();
IndexBox.init();
Sliders.init();
Dices.init();
Listings.init();
