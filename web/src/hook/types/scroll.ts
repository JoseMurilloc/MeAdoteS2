import { FormEvent } from "react";

export interface Section {
  title: string,
  active: boolean,
}

export interface SelectSessionData {
  selectSections: Array<Section>
  handleScroll(event: FormEvent): void;
}

