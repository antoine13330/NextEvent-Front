import {Localisation} from "../Localisation/localisation";

export interface Evenement{
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  type_evenement: NEventType;
  dateDebut: Date;
  dateFin: Date;
  localisation: Localisation;
}

export type NEventType  = 'music' | 'gaming'
