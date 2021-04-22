import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PipelineService {
  url = 'http://localhost:3000/cms/pipeline';
  propertiesUrl = ''
  constructor(private http: HttpClient) { }

  all(org_id: string): any {
    let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
    return this.http.get(`${this.url}/${org_id}`, { headers });
  }

  get(id: any): any {
    return this.http.get(`${this.url}/${id}`);
  }

  getProperties() {
    let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
    return this.http.get(`http://localhost:3000/cms/table-config/pipeline`, { headers });
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
}
