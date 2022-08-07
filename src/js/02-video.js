
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = localStorage.getItem(CURRENT_TIME);
const onPlay = ({seconds}) => {
  localStorage.setItem(CURRENT_TIME, seconds);
  
};

player.setCurrentTime(currentTime)

player.on('timeupdate' , throttle(onPlay , 500))


