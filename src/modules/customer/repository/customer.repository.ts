import { Injectable } from '@nestjs/common';
import { Customer } from '../modules/customer.model'
import { customer } from './fixtures/customer';

@Injectable()
export class CustomerRepository {
  async findOneById(id: string): Promise<Customer> {
    return customer;
  }

  async findAll(): Promise<Customer[]> {
    return [customer];
  }
}
