import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import TblBootstrapComponent from '../../demo/pages/tables/tbl-bootstrap/tbl-bootstrap.component';

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [SharedModule, TblBootstrapComponent],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss',
})
export class ContractComponent {}
