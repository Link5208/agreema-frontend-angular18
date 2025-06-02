import { Injectable } from '@angular/core';
import { Contract } from 'src/app/models/Contract';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  constructor() {}

  getAll(): Contract[] {
    return [
      {
        id: 1,
        contractId: 'HD001',
        name: 'Hợp đồng cung cấp thiết bị văn phòng',
        signDate: '2024-01-10 09:00:00',
        status: 'UNLIQUIDATED',
      },
      {
        id: 2,
        contractId: 'HD002',
        name: 'Hợp đồng mua máy chủ',
        signDate: '2024-01-10 09:00:00',
        status: 'UNLIQUIDATED',
      },
    ];
  }
}
