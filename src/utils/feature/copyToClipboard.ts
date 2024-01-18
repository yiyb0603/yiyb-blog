import isEmpty from '../is-packages/isEmpty';

const copyToClipboard = async (text: string): Promise<void> => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (isEmpty(navigator.clipboard) || userAgent.includes('kakaotalk')) {
    const textarea = document.createElement('textarea');

    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    document.execCommand('copy');

    document.body.removeChild(textarea);
  } else {
    await navigator.clipboard.writeText(text);
  }
};

export default copyToClipboard;
