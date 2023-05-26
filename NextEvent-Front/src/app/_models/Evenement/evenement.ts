import {Localisation} from "../Localisation/localisation";

export interface Evenement{
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  typeEvenement: string;
  dateDebut: Date;
  dateFin: Date;
  localisation: Localisation;
}
