import Tree from '../../core/Tree';
import { isAlive } from 'mobx-state-tree';
import { useLayoutEffect } from 'react';

export function Annotation({ annotation, root }) {
  useLayoutEffect(() => {
    const twitterScript = document.createElement('script');
    twitterScript.async = true;
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.charset = 'utf-8';
    document.body.appendChild(twitterScript);

    const tiktokScript = document.createElement('script');
    tiktokScript.async = true;
    tiktokScript.src = 'https://www.tiktok.com/embed.js';
    tiktokScript.charset = 'utf-8';
    document.body.appendChild(tiktokScript);

    return () => {
      if (annotation && isAlive(annotation)) {
        annotation.resetReady();
      }
      document.body.removeChild(twitterScript);
      document.body.removeChild(tiktokScript);
    };
  }, [annotation.pk, annotation.id]);

  return root ? Tree.renderItem(root, annotation) : null;
}
