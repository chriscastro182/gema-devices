import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../models/Contract.model';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  
  private serverURL = "localhost";
  private URL = `http://${this.serverURL}:3000/api/contracts`;

  constructor(private http: HttpClient) { }

  getContracts(){

    return this.http.get<[Contract]>(this.URL).pipe(
      catchError((err)=> {
        console.error(err);
        throw err;
      })
    );
    
  }

  createContract(contract: Contract): Observable<Contract> {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(contract);

    return this.http.post<Contract>(this.URL, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    ) 
  }

  // Update contracts
  updateContract(contract: Contract): Observable<Contract>{
    
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(contract);

    const contractId = contract._id;
    const urlComplete = this.URL + '/' + contractId;

    return this.http.put<Contract>( urlComplete, body, { 'headers': headers })
      .pipe(
        catchError( (err)=>{
          console.error(err);
          throw err;
        })
      )
  }

  // Delete contracts
  deleteContractById(contractId: string){
    const urlComplete = this.URL + '/' + contractId;
    return this.http.delete(urlComplete).pipe(
      catchError( (err)=>{
        console.error(err);
        throw err;
      })
    )
  }
}
