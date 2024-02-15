import { type SchemaTypeDefinition } from 'sanity';
import blog from './lib/blog';
import author from './lib/author';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,author],
}
