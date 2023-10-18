import Tree from '../../core/Tree';
import { isAlive } from 'mobx-state-tree';
import { useLayoutEffect } from 'react';

export function Annotation({ annotation, root }) {
  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      if (annotation && isAlive(annotation)) {
        annotation.resetReady();
      }
      document.body.removeChild(script);
    };
  }, [annotation.pk, annotation.id]);
  return root ? Tree.renderItem(root, annotation) : null;
}
