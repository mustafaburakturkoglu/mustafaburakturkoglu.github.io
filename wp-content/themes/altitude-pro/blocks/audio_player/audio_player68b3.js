let dbioAudioPlayer = (selector,audioFileSwitchOn,audioFileSwitchOff) => {
    /** Implementation of the presentation of the audio player */
    const audioPlayerBlockContainer = document.getElementById(selector);
    const audioPlayerPlayerContainer = audioPlayerBlockContainer.getElementsByClassName('audioplayer_player_container')[0];
    const seekSlider = audioPlayerBlockContainer.getElementsByClassName('audioplayer_seek_slider')[0];
    const playIconContainer = audioPlayerBlockContainer.getElementsByClassName('audioplayer_play_icon')[0];
    const volumeSlider = audioPlayerBlockContainer.getElementsByClassName('audioplayer_volume_slider')[0];
    const muteIconContainer = audioPlayerBlockContainer.getElementsByClassName('audioplayer_mute_icon')[0];
    const isDevice = /ipad|iphone|ipod|android/i.test(window.navigator.userAgent.toLowerCase()) && !window.MSStream;
    const clickEvent = (isDevice ? 'touchstart' : 'click') 
    const volumeSliderEvent = (isDevice ? 'touchend' : 'input') 

    let playState = 'pause'
    let muteState = 'unmute'
    let selected = 1
    let audioCurrentTime = 0

    const audio1 = new Audio(audioFileSwitchOff);
    const audio2 = new Audio(audioFileSwitchOn);

    audio1.load()
    audio2.load()
    
    playIconContainer.addEventListener(clickEvent, () => {
        //audio1.play()
        playState = (playState === 'pause') ? 'play' : 'pause'
        updateAudioCurrentTime()
        playHandler()
    })

    muteIconContainer.addEventListener(clickEvent, () => {
        if(muteState === 'unmute') {
            audio.muted = true;
            muteState = 'mute';
        } else {
            audio.muted = false;
            muteState = 'unmute';
        }
    })

    const overcomeMobileLimitations = () => {
        // iOS does not let "volume" property to be set programmatically
        audioPlayerPlayerContainer.classList.add('is_mobile')
        volumeSlider.style.display = 'none'
        muteIconContainer.style.display = 'none'
    }

    // If on a mobile device do not display volume slider and mute icon
    if(isDevice) { overcomeMobileLimitations() }

    const playHandler = () => {
        //console.log('selected one')
        if(playState === 'play') {
            playIconContainer.style.backgroundImage = "url('/wp-content/themes/altitude-pro/blocks/audio_player/audio_player_pause.svg')"
            if (selected === 1) {
                audio1.currentTime = audioCurrentTime
                audio1.play()
                audio2.pause() 
            } else {
                audio2.currentTime = audioCurrentTime
                audio2.play()
                audio1.pause()                 
            }
            requestAnimationFrame(whilePlaying);
            //playState = 'pause';
        } else {
            playIconContainer.style.backgroundImage = "url('/wp-content/themes/altitude-pro/blocks/audio_player/audio_player_play.svg')"
            audio1.pause()
            audio2.pause()
            cancelAnimationFrame(raf);
            //playState = 'play';
        }
    }

    const audioPlaying = () => {
        if (selected === 1) {
            return audio1
        } else if (selected === 2) {
            return audio2
        } else {
            return audio1
        }
    }

    const updateAudioCurrentTime = () => {
        audioCurrentTime = (selected === 1) ? audio1.currentTime : audio2.currentTime
    }

    const updateAudioVolume = () => {
        audioCurrentTime = (selected === 1) ? audio1.currentTime : audio2.currentTime
    }

    const showRangeProgress = (rangeInput) => {
        if(rangeInput === seekSlider) audioPlayerPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        else audioPlayerPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    }

    seekSlider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });
    volumeSlider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });





    /** Implementation of the functionality of the audio player */

    const audio = audioPlayerBlockContainer.getElementsByClassName('audioplayer_audio')[0];
    const durationContainer = audioPlayerBlockContainer.getElementsByClassName('audioplayer_duration')[0];
    const currentTimeContainer = audioPlayerBlockContainer.getElementsByClassName('audioplayer_current_time')[0];
    const outputContainer = audioPlayerBlockContainer.getElementsByClassName('audioplayer_volume_output')[0];
    let raf = null;

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const displayDuration = () => {
        durationContainer.textContent = calculateTime(audioPlaying().duration);
    }

    const setSliderMax = () => {
        seekSlider.max = Math.floor(audioPlaying().duration);
    }

    const whilePlaying = () => {
        seekSlider.value = Math.floor(audioPlaying().currentTime);
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        audioPlayerPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
        raf = requestAnimationFrame(whilePlaying);
    }

    if (audio1.readyState > 0) {
        displayDuration();
        setSliderMax();
    } else {
        audio1.addEventListener('loadedmetadata', () => {
            displayDuration();
            setSliderMax();
        });
    }


    seekSlider.addEventListener('input', () => {
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        audioCurrentTime = seekSlider.value
        if(!audioPlaying().paused) {
            cancelAnimationFrame(raf);
        }
    })

    seekSlider.addEventListener('change', () => {
        //audioPlaying().currentTime = seekSlider.value;
        audio1.currentTime = seekSlider.value;
        audio2.currentTime = seekSlider.value;
        if(!audioPlaying().paused) {
            requestAnimationFrame(whilePlaying)
        }
    })

    volumeSlider.addEventListener(volumeSliderEvent, (e) => {
        const value = e.target.value;
        outputContainer.textContent = value;
        //audioPlaying().volume = value / 100;
        console.log(volumeSliderEvent)

        audio1.volume = value / 100
        audio2.volume = value / 100
        console.log(value / 100)
        console.log(`Audio 1: ${audio1.volume}`)
        console.log(`Audio 2: ${audio2.volume}`)
    })


    /** Implementation of the functionality of the switch*/

    const switchCheckbox = audioPlayerBlockContainer.getElementsByClassName('audioplayer_switch_checkbox')[0];

    switchCheckbox.addEventListener('change', function() {
        if (this.checked) {
			jQuery('.audio_enhance_on').text('Dolby Enhance On');
            updateAudioCurrentTime()
            //audioCurrentTime = audio1.currentTime
            selected = 2
            playHandler()
        } else {
			jQuery('.audio_enhance_on').text('Dolby Enhance Off'); 
            updateAudioCurrentTime()
            //audioCurrentTime = audio2.currentTime
            selected = 1
            playHandler()
        }
    })

}
