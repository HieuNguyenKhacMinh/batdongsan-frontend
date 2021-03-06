import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  url = 'http://localhost:3000/cms/product';
  propertiesUrl = ''
  constructor(private http: HttpClient) { }

  all(isBuy): any {
    let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
    return this.http.get(`${this.url}/all/${isBuy}`, { headers });
  }

  get(id: any): any {
    return this.http.get(`${this.url}/${id}`);
  }

  getProperties() {
    let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
    return this.http.get(`http://localhost:3000/cms/table-config/product`, { headers });
  }
  update(data: any) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return data.id ? this.http.put(`${this.url}/${data.id}`, data, { headers }) :
      this.http.post(`${this.url}`, data, { headers });
  }
  delete(data: any) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return this.http.delete(`${this.url}/${data.id}`, { headers });
  }
  getData(url: string) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return this.http.get(`${url}`, { headers });
  }
  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'http://localhost:3000';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, { headers: {} });
  }
}
