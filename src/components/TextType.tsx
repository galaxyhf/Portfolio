import { useEffect, useState } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

export default function TextType({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);

  // Efeito de digitação/apagamento
  useEffect(() => {
    const currentText = text[currentTextIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Digitando
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pausa antes de apagar
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Apagando
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        // Passa para o próximo texto
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentTextIndex,
    text,
    typingSpeed,
    pauseDuration,
  ]);

  // Efeito para piscar o cursor
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className={showCursorState ? 'opacity-100' : 'opacity-0'}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
