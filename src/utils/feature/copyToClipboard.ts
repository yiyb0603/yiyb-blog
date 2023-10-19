import isEmpty from '../is-packages/isEmpty';

const copyToClipboard = (text: string): void => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (isEmpty(navigator.clipboard) || userAgent.includes('kakaotalk')) {
    const textarea = document.createElement('textarea');

    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';

    document.appendChild(textarea);

    textarea.focus();
    textarea.select();

    document.execCommand('copy');

    document.removeChild(textarea);
  } else {
    navigator.clipboard.writeText(text);
  }
};

export default copyToClipboard;
