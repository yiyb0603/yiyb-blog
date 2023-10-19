const removeHTMLString = (value: string): string => {
  return value
    ?.replace(/(<([^>]+)>)/gi, '')
    .replace(/&#40;/gi, '(')
    .replace(/&#41;/gi, ')')
    .replace(/&#59/gi, ';')
    .replace(/&#64/gi, '@')
    .replace(/&#91/gi, '[')
    .replace(/&#93/gi, ']')
    .replace(/&#123/gi, '{')
    .replace(/&#125/gi, '}')
    .replace(/&#126/gi, '~')
    .replace(/&#169;/gi, 'ⓒ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&nbsp;/gi, ' ');
};

export default removeHTMLString;
