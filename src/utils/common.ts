import { LinkQueries } from '@/interfaces';

export const generateQueries = <T>(
  defaultLink: string,
  queries: LinkQueries<T>[],
) => {
  const params = new URLSearchParams('');

  queries.forEach((query) => {
    const { value, key, label } = query;

    switch (typeof value) {
      case 'object':
        if (key && value.length) {
          return params.set(
            label,
            value
              .map((element) => element[key as keyof typeof element])
              .join(','),
          );
        }
        return '';
      case 'string':
        if (value) return params.set(label, value);
        return '';

      default:
        return '';
    }
  });

  const finalQueries = params.toString();

  return {
    defaultLink,
    queries: finalQueries,
    result: `${defaultLink}?${finalQueries}`,
  };
};
