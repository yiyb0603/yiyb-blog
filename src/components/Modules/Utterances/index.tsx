const Utterances = (): JSX.Element => {
  return (
    <section
      ref={(element) => {
        if (!element) {
          return;
        }

        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'yiyb0603/yiyb-blog');
        scriptElem.setAttribute('issue-term', 'title');
        scriptElem.setAttribute('theme', 'github-light');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';

        element.appendChild(scriptElem);
      }}
    />
  );
}

export default Utterances;