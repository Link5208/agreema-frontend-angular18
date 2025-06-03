import { Item } from './Item';

export class Contract {
  id!: number;
  contractId!: string;
  name!: string;
  signDate!: string;
  status!: string;
  items!: Item[];
}
