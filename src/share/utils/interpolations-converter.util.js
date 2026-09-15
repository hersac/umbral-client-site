export const interpolationsConverter = (html, context = {}) => {
  const patron = /\{\{\s*([^}]+)\s*\}\}/g;

  return html.replace(patron, (match, expression) => {
    const cleanExpression = expression.trim();

    try {
      const evalue = new Function(
        'context',
        `with (context) {
          try {
            const resultado = ${cleanExpression};
            return resultado !== undefined ? resultado : '';
          } catch (e) {
            return '';
          }
        }`
      );

      const value = evalue(context);
      return value !== undefined && value !== null ? value : match;
    } catch {
      return match;
    }
  });
};
