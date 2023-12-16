import { useEffect, useRef } from 'react';

const SplitText = ({  children }) => {
  const splitTextRef = useRef();

  useEffect(() => {
    const splitText = splitTextRef.current;
    const arrayText = splitText.textContent.split('');
    let newText = '';

    const unEscapeHtml = (str) => {
      return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
    }

    arrayText.forEach((el) => {
      const text = unEscapeHtml(el);
      newText += text === ' ' ? '<span>&nbsp;</span>' : `<span>${text}</span>`;
    });

    splitText.innerHTML = newText;
  }, []);

  return <span ref={splitTextRef}>{children}</span>;
}

export default SplitText;
