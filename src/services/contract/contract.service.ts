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
        items: [
          {
            id: 1,
            itemId: 'VT001',
            name: 'Giấy A4',
            unit: 'Ream',
            quantity: 100,
            price: 50.0,
            total: 5000.0,
          },
          {
            id: 1,
            itemId: 'VT002',
            name: 'Bút bi',
            unit: 'Cái',
            quantity: 200,
            price: 5.0,
            total: 1000.0,
          },
        ],
      },
      {
        id: 2,
        contractId: 'HD002',
        name: 'Hợp đồng mua máy chủ',
        signDate: '2024-01-10 09:00:00',
        status: 'UNLIQUIDATED',
        items: [
          {
            id: 1,
            itemId: 'MT001',
            name: 'Máy chủ Dell R740',
            unit: 'Bộ',
            quantity: 2,
            price: 50000.0,
            total: 100000.0,
          },
        ],
      },
    ];
  }
}
