/** Renders a <script type="application/ld+json"> for any schema object.
 *  Kept as its own component (not inside lib/seo.ts) since it needs JSX. */
export function SchemaScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
