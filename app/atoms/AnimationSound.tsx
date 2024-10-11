import React, { useEffect, useRef } from 'react'

interface AnimationSoundProps {
    src: string;
}

const AnimationSound = (props: AnimationSoundProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <audio ref={audioRef} src={props.src} preload="auto" />
    )
}

export default AnimationSound
