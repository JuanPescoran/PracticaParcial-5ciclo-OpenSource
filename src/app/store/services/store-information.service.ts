import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Bundle} from "../models/bundle/bundle.entity";

@Injectable({
  providedIn: 'root'
})
export class StoreInformationService extends BaseService<Bundle>{

  constructor(http: HttpClient) {
    super(http)
    this.resourceEndpoint = '/bundles'
  }
}
