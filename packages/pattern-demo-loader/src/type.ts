export interface FlattenImport {
  raw: string;
  name: string;
  content: string;
}

export interface ImportType extends FlattenImport {
  imports: ImportType[];
}
