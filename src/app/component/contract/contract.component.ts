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
  private contractService = inject(ContractService);
  contractList: Contract[] = [];
  collapsedRows: boolean[] = [];

  toggleCollapse(index: number) {
    this.collapsedRows[index] = !this.collapsedRows[index];
  }

  getColspan() {
    // Return the number of visible columns
    return Object.values(this.showContractColumns).filter(Boolean).length;
  }
  showContractForm = false;

  onSubmit(form: any) {
    if (form.valid) {
      // Add contract to your contractList or handle as needed
      this.contractList.push(form.value);
      this.showContractForm = false;
      form.resetForm();
    }
  }
  showContractColumns = {
    id: true,
    name: true,
    signDate: true,
    status: true,
    action: true,
  };
  showItemColumns = {
    id: true,
    name: true,
    unit: true,
    quantity: true,
    price: true,
    total: true,
    action: true,
  };
  ngOnInit(): void {
    this.contractList = this.contractService.getAll();
  }
}
