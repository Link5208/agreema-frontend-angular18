import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import TblBootstrapComponent from '../../demo/pages/tables/tbl-bootstrap/tbl-bootstrap.component';
import { ContractService } from 'src/services/contract/contract.service';
import { Contract } from 'src/app/models/Contract';

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss',
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];
  private contractService = inject(ContractService);
  collapsedRows: boolean[] = [];

  toggleCollapse(index: number) {
    this.collapsedRows[index] = !this.collapsedRows[index];
  }

  getColspan() {
    // Return the number of visible columns
    return Object.values(this.showColumns).filter(Boolean).length;
  }
  showColumns = {
    id: true,
    name: true,
    signDate: true,
    status: true,
    action: true,
  };
  ngOnInit(): void {
    this.contractList = this.contractService.getAll();
  }
}
