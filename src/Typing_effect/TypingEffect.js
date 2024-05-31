import React, { useEffect, useState } from 'react';
import './Typing.css';  // Create a CSS file for styles

const TypingEffect = ({ phrases, typingSpeed, erasingSpeed, newPhraseDelay }) => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                if (letterIndex > 0) {
                    setText(prev => prev.slice(0, -1));
                    setLetterIndex(letterIndex - 1);
                } else {
                    setIsDeleting(false);
                    setPhraseIndex((phraseIndex + 1) % phrases.length);
                }
            } else {
                if (letterIndex < phrases[phraseIndex].length) {
                    setText(prev => prev + phrases[phraseIndex].charAt(letterIndex));
                    setLetterIndex(letterIndex + 1);
                } else {
                    setIsDeleting(true);
                    setTimeout(() => {}, newPhraseDelay);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, letterIndex, isDeleting, phrases, phraseIndex, typingSpeed, erasingSpeed, newPhraseDelay]);

    return (
        <span className="typing">{text}</span>
    );
};

export default TypingEffect;
