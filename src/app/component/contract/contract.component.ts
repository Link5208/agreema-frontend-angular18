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
  showEditContractForm = false;
  showCreateItemForm = false;
  selectedContract: any = {};

  editContract(contract: any) {
    this.selectedContract = { ...contract }; // clone để tránh binding trực tiếp
    this.showEditContractForm = true;
  }

  onEditSubmit(form: any) {
    if (form.valid) {
      // Cập nhật contractList với selectedContract đã chỉnh sửa
      const idx = this.contractList.findIndex(
        (c) => c.id === this.selectedContract.id,
      );
      if (idx > -1) {
        this.contractList[idx] = { ...this.selectedContract };
      }
      this.showEditContractForm = false;
    }
  }
  onCreateItemSubmit(form: any) {
    if (form.valid) {
      // Thêm item vào danh sách hoặc gọi API
      // this.selectedContract.items.push(form.value);
      this.showCreateItemForm = false;
      form.resetForm();
    }
  }

  showEditItemForm = false;
  selectedItem: any = {};

  editItem(item: any) {
    this.selectedItem = { ...item };
    this.showEditItemForm = true;
  }

  onEditItemSubmit(form: any) {
    if (form.valid) {
      // Cập nhật lại item trong danh sách (hoặc gọi API)
      // Ví dụ: tìm item trong contract.items và cập nhật
      this.showEditItemForm = false;
    }
  }
}
